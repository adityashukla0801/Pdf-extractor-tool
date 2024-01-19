import { extractTextFromPdf } from "../utils/pdfUtils";
import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import ResultsTable from "../components/ResultsTable";
import styles from "../Spinner.module.css";
import "../app/globals.css";

const Home = () => {
  const [extractedText, setExtractedText] = useState(null);
  const [langchainResult, setLangchainResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //After upload file this will extract data from pdf and results in an interactive table.
  const handleTextExtraction = async (file) => {
    setLoading(true);
    setExtractedText(null);
    setLangchainResult(null);
    // Implement text extraction logic (using pdf.js if needed)
    const text = await extractTextFromPdf(file);

    // Integrate Langchain OpenAI for post-extraction text analysis.
    const analyzeTextWithLangchain = async (text) => {
      try {
        // POST API call for the process text with Langchain OpenAI
        const response = await fetch("/api/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        });

        if (!response.ok) {
          throw new Error("Langchain API request failed");
        }

        const result = await response.json();
        // Set the  Langchain OpenAI result
        setLangchainResult(result.langchainResult);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Set the error if API becomes fail
        setError(error);
        console.error("Error analyzing text with Langchain:", error);
      }
    };
    // call the Langchain OpenAI for text analysis.
    analyzeTextWithLangchain(text);

    // set the pdf extracted data
    setExtractedText(text);
  };

  return (
    <div className="container mx-auto px-4 mt-40">
      <h1 className="text-3xl m-4">Enhanced Text Extractor</h1>

      {/* Componet for file upload */}
      <FileUpload loading={loading} onUpload={handleTextExtraction} />
      {loading && (
        <div className={styles.spinner_container}>
          <div className={styles.spinner}></div>
        </div>
      )}

      {extractedText && langchainResult?.length && (
        // Component for showing the result data
        <ResultsTable text={extractedText} analysis={langchainResult} />
      )}

      {/* IF error comes then it show the error */}
      {error && <label className="text-red-500 p-4">{error}</label>}
    </div>
  );
};

export default Home;
