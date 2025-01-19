require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs/promises");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

async function run(extraParams) {
  try {
    // تحديد النموذج المستخدم (Gemini 1.5 Flash)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = await fs.readFile("prompt.md", "utf-8");
    prompt += extraParams;
    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    let ToJson = text.replace("```json", "").replace("```", "");
    const json = JSON.parse(ToJson);
    
    console.log("Response:", json);
    return json;
  } catch (error) {
    console.error("Error:", error);
  }
}

run(` 
  Hello, this is Osman Ghandour, CEO of Soal Labs (soallabs.com).

  We are looking to hire a full-time product designer (UI/UX) to our team. Mid to senior level.

  We have built a high performing team that is lovely to work with. 

  If you think you would be a good fit, please reach out to me: osman@soallabs.com
`);
