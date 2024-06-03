import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import './style.css';
import RingLoader from 'react-spinners/RingLoader';


export default function Other(props) {
    const [data, setData] = useState("");
    const [load,setload]=useState(false)
    const googleApiKey = import.meta.env.VITE_API_Google;
    // console.log(props);
    
    
    useEffect(() => {
        const fetchData = async () => {
          const genAI = new GoogleGenerativeAI(googleApiKey);
          const model = genAI.getGenerativeModel({ model: "gemini-pro" });
          const prompt = "I have several health issues and I am looking for advice and suggestions on how to manage them. Here are the details of my condition:"+props.payload+ " I need recommendations on lifestyle changes, dietary adjustments, exercises, and any other tips that could help me improve my overall health. Please provide detailed and practical advice."
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = response.text();
          setData(text);
          setload(true)
        };
    
        fetchData();
      }, [googleApiKey,props.payload]);
    
    
   


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
