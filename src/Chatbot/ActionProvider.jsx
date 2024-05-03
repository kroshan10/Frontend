import React from 'react';
import PropTypes from 'prop-types';

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
      const message = createChatBotMessage("What is your age?", {
        withAvatar: true,
       
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

  const handleSex = (sex) => {
    const message = createChatBotMessage(`You selected ${sex}`);
    let val;
    if (sex === "Male") {
      val = 1;
    } else {
      val = 0;
    }
    // children.props.children.props.state.sex = sex;
    children.props.children.props.state.sex = val;
    
    // custommsg("What type of chest pain are you experiencing?", "cp");
    const msg= createChatBotMessage('What type of chest pain are you experiencing?' ,{
      withAvatar: true,
      payload: [
        {text:'Typical Angina',action:''},
        {text:'Atypical Angina',action:''}, 
        {text:'Non-anginal Pain',action:''},
        {text:'Asymptomatic',action:''},
      ],
      widget:'optionmenu'
    })
    children.props.children.props.state.checker = 'cp';
    updateState(msg,"cp")

    console.log(children.props.children.props.state,val);
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
            handleSex,
            createChatBotMessage,
            updateState
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
