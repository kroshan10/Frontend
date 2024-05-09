import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
import { useState } from "react";   

export default function CustomMsg(props) {
    const [prompt, setPrompt] = useState("");
    const [Data, setData] = useState("");

    const genAI = new GoogleGenerativeAI(
        "AIzaSyBV_VqzgAKqOgXhXt4VTsDnRM4tyf8YUCo"
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
