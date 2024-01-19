import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker"; // Import the worker file

pdfjs.GlobalWorkerOptions.workerSrc = "path/to/pdf.worker.js";

// Extract text from the pdf file through worker.js
const extractTextFromPdf = async (file) => {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = async (e) => {
      const arrayBuffer = e.target.result;
      const pdfData = new Uint8Array(arrayBuffer);

      try {
        const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
        const numPages = pdf.numPages;
        let text = "";

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(" ");
          text += pageText;
        }

        resolve(text);
      } catch (error) {
        reject(error);
      }
    };

    fileReader.readAsArrayBuffer(file);
  });
};

export { extractTextFromPdf };
