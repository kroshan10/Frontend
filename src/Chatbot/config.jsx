import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './Component/Avatar';

import Option from './widget/Option'
import Optionmenu from './widget/Optionmenu'
import HeartForm from "./widget/Form/HeartDisease"

const config = {

  botName: "Healt Chatbot Assistant",
  initialMessages: [createChatBotMessage(`Welcome to HealthCare Assistance!`, {
    widget: "startBtn"
  })
],
  customComponents: {
    botAvatar : (props) => <Avatar { ... props} />,
  },
  state:{
    name:'',age:'',sex:'',cp:'',trestbps:'',chol:'',fbs:"",restecg:'',thalach:"",exang:'',oldpeak:'',slope:'',ca:'',thal:'',

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
      widgetName: "optionmenu",
      widgetFunc: (props) => <Optionmenu {...props} />
    },
    {
      widgetName: "heartForm",
      widgetFunc: (props) => <HeartForm {...props} />
    },

  ]
}

export default config;