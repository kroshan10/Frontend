import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';

import Option from './Option'

const config = {
  botName: "Healt Chatbot Assistant",
  initialMessages: [createChatBotMessage(`Welcome to HealthCare Assistance!`, {
    widget: "startBtn"
  })],
  customComponents: {
    botAvatar : (props) => <Avatar { ... props} />,
    // userAvatar : (props) => <Avatar { ...props} />
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <Option { ... props}
      values={[
        {text:"Let's Get Started", action:props.actions.initialAction},
      ]}/>,
    },
  
    {
      widgetName: "disease",
      widgetFunc: (props) => <Option { ...props} values={[
        {text:"Heart Disease", action:props.actions.heartDisease},
        {text:"Fever",action:props.actions.fever},
        {text:"Cough",action:props.actions.cough},
        {text:"Headache",action:props.actions.headache},
        {text:"Pain",action:props.actions.pain},
        {text:"Other",action:props.actions.other}
      ]} />,
    }

  ]
}

export default config;