const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateQuote() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent("Give me one short, powerful motivational quote.");
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini error:", error);
    throw new Error("Failed to generate quote");
  }
}

module.exports =  generateQuote ;
