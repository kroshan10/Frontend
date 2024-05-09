import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
import { useState } from "react";   

export default function CustomMsg(props) {
    const [prompt, setPrompt] = useState("");
    const [Data, setData] = useState("");
    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const genAI = new GoogleGenerativeAI(
        googleApiKey
      );
    const fetchData = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = ''
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setData(text);
    };
  return (
    <div>CustomMsg</div>
  )
}
