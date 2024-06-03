import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import { createClientMessage,createCustomMessage } from 'react-chatbot-kit';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const custommsg = (msg, checker ='') => {

    const message = createChatBotMessage(msg);
    updateState(message, checker);
  };
  const clientmsg = (msg, widget='') => {
    const message = createClientMessage(msg,{
      widget:widget,
      withAvatar:true,
      delay:1000
    });
    updateState(message);
  };

  const initialAction = () => {
    const message = createChatBotMessage("Hello! Please type in your name to begin.");
    

    updateState(message, "name");
  };
  const afterNameMessage = (name) => {

    if (name=="undefined" || name==null || name=="") {
      initialAction()
    }
    else{
    const message = createChatBotMessage(
      `Hey ${name}! How can I assist you today? Please Select any option for futher process. `,
      {
        widget: "disease",
        withAvatar:true
      }
    );
    updateState(message);

    

  }
};


const handleRetrain = async () => {
  
  try {
    const response = await axios.get('http://127.0.0.1:8000/retrain');  // Adjust the URL accordingly
    const message = createChatBotMessage(response.data.status,{
      widget:"startBtn"
    });
    updateState(message);
  } catch (error) {
    const message = createChatBotMessage('There was an error retraining the model.',{
      widget:"startBtn"
    });
    
   
    updateState(message);
  }
};

const handleSuggestion = () => {
  const message =createCustomMessage('',"suggest")
  updateState(message);
}

  

  const DiseaseMenu = {
    heartDisease: function () {
      clientmsg("Heart Disease");
      const message = createChatBotMessage("Please ansewer the following questions to assess your risk of heart disease:",
        {
          widget: "heartForm",
          withAvatar: true,
        }
      );
      updateState(message, "heartDisease");
    },
    fever: function () {
      clientmsg("Fever", "feverForm");
      const message = createChatBotMessage("Do you have a fever?");
      updateState(message, "fever");
    },
    cough: function () {
      clientmsg("Cough", "coughForm");
      const message = createChatBotMessage("Are you experiencing coughing?", {
        withAvatar: true,
      });
      updateState(message, "cough");
    },
    headache: function () {
      clientmsg("Headache", "headacheForm");
      const message = createChatBotMessage("Are you experiencing headaches?", {
        withAvatar: true,
      });
      updateState(message, "headache");
    },
    pain: function () {
      clientmsg("Pain", "painForm");
      const message = createChatBotMessage("Are you experiencing any pain?", {
        withAvatar: true,
      });
      updateState(message, "pain");
    },
    other: function () {
      clientmsg("Other", "otherForm");
      const message = createChatBotMessage(
        "Please describe your symptoms in detail. I can help you with that.",
        { withAvatar: true ,

        }
      );
      updateState(message, "other");
      // consolesole.log(children.props);
    },
  };

  const handleotherform=(msg)=>{
    const message = createCustomMessage('','other',{
      withAvatar: true,payload:msg
    })
    updateState(message, "other");
  }
  const handleErr=()=>{
    const message = createChatBotMessage("Sorry, I don't Understand .Please Start Again from Beginning.", {
      withAvatar: true,
      widget: "startBtn"
    });
    updateState(message);
    // afterNameMessage()
  }


  const updateState = (message, checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };
  const updateVal = (key ,val) => {
    setState((prev) => ({
      ...prev,
      [key]: val
    }));
  }

  ActionProvider.propTypes = {
    createChatBotMessage: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            custommsg,
            setState,
            afterNameMessage,
            DiseaseMenu,
            createChatBotMessage,
            updateState,
            updateVal,
            handleErr,
            handleRetrain,
            handleotherform,
            handleSuggestion,
           
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
