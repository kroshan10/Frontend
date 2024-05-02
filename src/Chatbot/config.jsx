import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Avatar';
import StartBtn from './StartBtn';
import Disease from './Disease';

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
      widgetFunc: (props) => <StartBtn { ... props} />,
    },
    {
      widgetName: "disease",
      widgetFunc: (props) => <Disease { ...props} />
    }

  ]
}

export default config;