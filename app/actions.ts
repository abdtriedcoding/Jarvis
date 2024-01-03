"use server";

import { model } from "./GenerativeAI";

export async function send(search: any) {
  try {
    const prompt = `${search}`;
    const generationResult = await model.generateContent(prompt);
    const response = generationResult.response;
    const text = response.text();
    return text;
  } catch (error: any) {
    console.log("Error", error.message);
  }
}
