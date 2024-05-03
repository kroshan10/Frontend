import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const custommsg = (msg) => {
    const message = createChatBotMessage(msg);
    updateState(message);
  }
  const afterNameMessage = (name) => {
    const message = createChatBotMessage(`Hello ${name}! How can I assist you today? Are you experiencing any symptoms? Please describe them to me.`, {
      widget: "disease"
    });
    updateState(message);
  }

  const initialAction = () => {
    const message = createChatBotMessage('Just type in your name to begin.');
    updateState(message, "name");
  }

  const heartDisease = () => {
    const message = createChatBotMessage('Are you experiencing any chest pain?',{
      payload:{name: "heartDisease"}
    }
  );
    updateState(message, "heartDisease");
  }

  const fever = () => {
    const message = createChatBotMessage('Do you have a fever?');
    updateState(message, "fever");
  }

  const cough = () => {
    const message = createChatBotMessage('Are you experiencing coughing?');
    updateState(message, "cough");
  }

  const headache = () => {
    const message = createChatBotMessage('Are you experiencing headaches?');
    updateState(message, "headache");
  }

  const pain = () => {
    const message = createChatBotMessage('Are you experiencing any pain?');
    updateState(message, "pain");
  }

  const other = () => {
    const message = createChatBotMessage('Please describe your symptoms in detail. I can help you with that.');
    updateState(message, "other");
  }

  

  const updateState = (message, checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            custommsg,
            afterNameMessage,
            heartDisease,
            fever,
            cough,
            headache,
            pain,
            other,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
