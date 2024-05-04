import PropTypes from 'prop-types';
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const custommsg = (msg, checker ='') => {
    const message = createChatBotMessage(msg);
    updateState(message, checker);
  };
  const afterNameMessage = (name) => {
    const message = createChatBotMessage(
      `Hello ${name}! How can I assist you today? Are you experiencing any symptoms? Please describe them to me.`,
      {
        widget: "disease",
      }
    );

    updateState(message);
  };

  const initialAction = () => {
    const message = createChatBotMessage("Just type in your name to begin.");
    updateState(message, "name");
  };

  const DiseaseMenu = {
    heartDisease: function () {
      const message = createChatBotMessage("Please ansewer the following questions to assess your risk of heart disease:", {
        withAvatar: true,
        widget: "heartForm"
      });
      updateState(message, "heartDisease");
    },
    fever: function () {
      const message = createChatBotMessage("Do you have a fever?", {
        withAvatar: true,
      });
      updateState(message, "fever");
    },
    cough: function () {
      const message = createChatBotMessage("Are you experiencing coughing?", {
        withAvatar: true,
      });
      updateState(message, "cough");
    },
    headache: function () {
      const message = createChatBotMessage("Are you experiencing headaches?", {
        withAvatar: true,
      });
      updateState(message, "headache");
    },
    pain: function () {
      const message = createChatBotMessage("Are you experiencing any pain?", {
        withAvatar: true,
      });
      updateState(message, "pain");
    },
    other: function () {
      const message = createChatBotMessage(
        "Please describe your symptoms in detail. I can help you with that.",
        { withAvatar: true }
      );
      updateState(message, "other");
    },
  };



  const updateState = (message, checker = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

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
            updateState
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
