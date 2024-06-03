import { createChatBotMessage, createClientMessage, createCustomMessage } from 'react-chatbot-kit';
import Avatar from './Component/Avatar';

import Option from './widget/Option'
import HeartForm from "./widget/Form/HeartDisease"
import Other from './Component/Other';
import Suggestion from './Component/Suggestion';


const config = {

  botName: "Healt Chatbot Assistant",
  initialMessages: [createChatBotMessage(`Welcome to HealthCare Assistance!`, {
    widget: "startBtn"
  }),
  


],
  customComponents: {
    botAvatar : (props) => <Avatar { ... props} />,
  },
  state:{
    name:'',checker:''

  },
  customMessages: {
    other: (props) => <Other {...props} />,
    suggest:(props)=> <Suggestion {...props} />,
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
        {text:"Heart Disease", action:props.actions.DiseaseMenu.heartDisease},
        {text:"Fever",action:props.actions.DiseaseMenu.fever},
        {text:"Cough",action:props.actions.DiseaseMenu.cough},
        {text:"Headache",action:props.actions.DiseaseMenu.headache},
        {text:"Pain",action:props.actions.DiseaseMenu.pain},
        {text:"Other",action:props.actions.DiseaseMenu.other}
      ]} />,
    },
    {
      widgetName: "sex",
      widgetFunc: (props) => <Option {...props} values={[
        {text:"Male", action: props.actions.handleSex},
        {text:"Female", action: props.actions.handleSex}
        ]}/>
    },
    
    {
      widgetName: "heartForm",
      widgetFunc: (props) => <HeartForm {...props} />
    },
    {
      widgetName: "Other",
      widgetFunc: (props) => <Other {...props} />
    }

  ]
}

export default config;