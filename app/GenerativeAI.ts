import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBu57kJQcpgUi_QNrMZ3pRIvyNsqDl-6xk");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export { genAI, model };
