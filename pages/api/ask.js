// pages/api/analyzeText.js
import { processTextWithLangchain } from "../../utils/lungchainUtils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { text } = req.body; // Assuming the body contains the text
      const langchainResult = await processTextWithLangchain(text);
      res.status(200).json({ langchainResult });
    } catch (error) {
      console.error("Error analyzing text:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
