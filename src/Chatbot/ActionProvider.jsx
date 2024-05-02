import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const afterNameMessage = () => {
    // const message = createChatBotMessage('Let me know your age so I can provide the best support');
    const message = createChatBotMessage('Hello! How can I assist you today? Are you experiencing any symptoms? Please describe them to me.',{
      widget: "disease"
    });
    updateState(message);
  }
   const initialAction = () => {
    const message = createChatBotMessage('Just type in your name to begin.');
    updateState(message, "age");
  }


  const updateState = (message, checker = "") => {
    setState((prev) => ({
      ... prev,
      messages: [ ... prev.messages, message],
      checker
    }))
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
