const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBO1l8-Dte2nCPdDIeUvmn0UD4-Xwfa9W8");

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt =`
  CoursesSchema =new {
title: String,
context: String,
links: [String],
keys: [String],
location: String,
age:{start:Num,end:Num},
center: String,
nationality: String,
price: Number,
IsAge: Boolean,
IsPublished: Boolean,
TypePost: String,//session, course,  volunteer, training, job
"nationality": [{
"value":"Lebanese",
"label": "لبناني"
},{"value": Palestinian","label": "فلسطيني"},{"value": "Syrian","label": "سوري"},{"value": "All","label": "الكل"}] يجب ان تكون الجنسية وفقا للقيم هذه فقط 
{ // end schema
context syntax markdown
only lang arabic
If the phone number exists, process it and convert it into a WhatsApp link, and add it to the links section 
If there is a course that is not online, the site must be added, and if it is online, the site can be added optionally
اذا  كان الردود فيها صور استخرج النصوص من الصور واضفها للسياق النصي للاعلان
تحليل النصوص في الردود القادمة وتحويلها  وتحوليه الى json بنفس هذه البنية أعلاه
انتظرني
Reply all format json


Hello, this is Osman Ghandour, CEO of Soal Labs (soallabs.com).

We are looking to hire a full-time product designer (UI/UX) to our team. Mid to senior level.

We have built a high performing team that is lovely to work with. 

If you think you would be a good fit, please reach out to me: osman@soallabs.com
  `

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();