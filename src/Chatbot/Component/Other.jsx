import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState, useEffect } from "react";

export default function Other(props) {
    const [data, setData] = useState("");
    const googleApiKey = import.meta.env.REACT_APP_GOOGLE_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            if (!googleApiKey) {
                console.error("Google API key not found. Make sure to set REACT_APP_GOOGLE_API_KEY in your environment.");
                return;
            }
            
            const genAI = new GoogleGenerativeAI(googleApiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = 'hi, can you tell me a joke?';
            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = await response.text();
            setData(text);
        };

        fetchData();
    }, [googleApiKey]);

    return (
        <div>{data}</div>
    );
}
