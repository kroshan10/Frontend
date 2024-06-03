import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import './style.css';
import RingLoader from 'react-spinners/RingLoader';


export default function Suggestion(props) {
  const [data, setData] = useState("");
  const [load,setload]=useState(false)

  const googleApiKey = import.meta.env.VITE_API_Google;
  
  useEffect(() => {
    const fetchData = async () => {
      const genAI = new GoogleGenerativeAI(googleApiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "I have been diagnosed with heart disease and I am seeking advice on how to manage my condition.Please provide suggestions for lifestyle changes, dietary recommendations, exercises that are safe to perform, and any other tips that could help improve my heart health.Additionally, mention any important medical advice or precautions I should be aware of."
     
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      setData(text);
      setload(true)

    };

    fetchData();
  }, [googleApiKey]);

  return (
    <div className="suggestion-container">
        {load? (
               
                <div className="suggestion-text">
                  <ReactMarkdown>{data}</ReactMarkdown>
                </div>
              
            ) : (
                <div className="Loader">
                    <RingLoader color="#36d7b7" />
                </div>
            )}
        </div>
  );
}
