This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup Instructions

1. Clone the repository: https://github.com/adityashukla0801/Pdf-extractor-tool.git
2. Install dependencies: npm install
3. Run the development server: npm run dev

## Testing

Run unit tests: npm run test:unit

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Enhanced Text Extractor Tool

## Overview

The Enhanced Text Extractor Tool is a Next.js web application that leverages the Langchain library for text extraction from uploaded files, particularly in PDF format. The application then performs natural language processing using OpenAI, displaying the processed results in an interactive table.

## Core Features

- Extract text from uploaded files.
- Support for PDF file format.
- RESTful API routes in Next.js for text extraction.
- Integration of Langchain for post-extraction text analysis.
- Fetch Key-Pair attributes using OpenAI.
- Display extracted text and NLP analysis results in an interactive table.

## Warning

-Some time it gives error due to the fail of OpenAI API.
-OpenAI is for free trails so there is a limit of hiting API.
