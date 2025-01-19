import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs/promises";

type JsonResponse = Record<string, any> | null;

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY as string);

async function run(extraParams: string): Promise<JsonResponse> {
  try {
    // تحديد النموذج المستخدم (Gemini 1.5 Flash)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = await fs.readFile("prompt.md", "utf-8");
    prompt += extraParams;

    const result = await model.generateContent(prompt);
    const text: string = await result.response.text();

    let textClean = text.replace("```json", "").replace("```", "").trim();

    try {
      const json: JsonResponse = JSON.parse(textClean);
      console.log("Response:", json);
      return json;
    } catch (jsonError) {
      console.error("JSON Parse Error:", jsonError);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error);
  }
}

run(`
  Hello, this is Osman Ghandour, CEO of Soal Labs (soallabs.com).

  We are looking to hire a full-time product designer (UI/UX) to our team. Mid to senior level.

  We have built a high performing team that is lovely to work with. 

  If you think you would be a good fit, please reach out to me: osman@soallabs.com
`);
