import { GoogleGenAI } from "@google/genai";
import { GOOGLE_AI_API_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: GOOGLE_AI_API_KEY});

export default ai;