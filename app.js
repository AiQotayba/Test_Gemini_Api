require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs/promises");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

async function run() {
  try {
    // تحديد النموذج المستخدم (Gemini 1.5 Flash)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = await fs.readFile("prompt.txt", "utf-8");
    console.log("Prompt:", prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    let ToJson = text.replace("```json", "").replace("```", "");
    const json = JSON.parse(ToJson);
    console.log("JSON:", json);
    console.log("Response:", json);
    return json;
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
