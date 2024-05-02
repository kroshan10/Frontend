import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import "./App.css";
import Header from './Chatbot/Component/Header';
function App() {

  return (
    <div className='App'>
       <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        headerText=<Header/>
        
      />
    </div>
  )
}

export default App;
