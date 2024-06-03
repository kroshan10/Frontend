import React from 'react';
import PropTypes from 'prop-types';


const MessageParser = ({ children, actions, }) => {
  const { checker } = children.props.state;
  let err=1
  const parse = (message) => 
  {
    message = message.toLowerCase();
    if (message.includes("retrain")) {
      actions.handleRetrain();
      err=0
    }
    if (checker==="" && err===1){
     console.log(children.props.state);
     if (children.props.state.name){
      actions.handleErr()
     }
     else{
      actions.initialAction()
     }
    }
    if(checker === "name" && err==1) {
      actions.updateVal("name", message);
      
      actions.afterNameMessage(message);
      
    }
    if (checker==='other' && err==1) {
      actions.handleotherform(message);
    }
    

  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};


MessageParser.propTypes = {
  children: PropTypes.element.isRequired, // Ensure children is a single React element
  actions: PropTypes.object.isRequired, // Ensure actions is
};
export default MessageParser;