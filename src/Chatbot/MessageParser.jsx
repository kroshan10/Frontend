import React from 'react';
import { createChatBotMessage } from'react-chatbot-kit';


const MessageParser = ({ children, actions, }) => {
  const { checker } = children.props.state;
  const parse = (message) => {

    
    if(checker === "name") {
      children.props.state.name=message
      actions.afterNameMessage(message);
    }
    else if(checker === "heartDisease") {
      const ques = {
        "What is your age?": '',
        "What is your sex? (1 for male, 0 for female)": '',
        "What type of chest pain are you experiencing?": '',
        "What is your resting blood pressure?": '',
        "What is your serum cholesterol level?": '',
        "Do you have fasting blood sugar > 120 mg/dl? (1 for true, 0 for false)": '',
        "What are your resting electrocardiographic results?": '',
        "What is your maximum heart rate achieved?": '',
        "Do you experience exercise-induced angina? (1 for yes, 0 for no)": '',
        "What is your ST depression induced by exercise relative to rest?": '',
        "What is the slope of the peak exercise ST segment?": '',
        "How many major vessels are colored by fluoroscopy?": '',
        "What is your thalassemia type?": ''
      };
      
      for (const question in ques) {
        createChatBotMessage(question);
        const answer = message;
        ques[question] = answer;
        console.log(ques,name);
      }
      
    }
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;