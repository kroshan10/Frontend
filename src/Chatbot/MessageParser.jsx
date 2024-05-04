import React from 'react';
import PropTypes from 'prop-types';


const MessageParser = ({ children, actions, }) => {
  const { checker } = children.props.state;
  
  const parse = (message) => {

    
    if(checker === "name") {
      let msg='';
      updateState(msg,'name',message)
      actions.afterNameMessage(message);
    }
    
    
    
  }

  const updateState=(msg,key='',value='')=>{
    actions.setState((prev)=>({
      ...prev,
      [key]:value,
      messages:[...prev.messages,msg]
    }))
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