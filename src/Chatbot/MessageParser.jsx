import React from 'react';
import PropTypes from 'prop-types';


const MessageParser = ({ children, actions, }) => {
  const { checker } = children.props.state;
  const parse = (message) => 
  {

    if (checker===""){
     console.log(children.props.state);
     if (children.props.state.name){
      actions.handleErr()
     }
     else{
      actions.initialAction()
     }
    }
    if(checker === "name") {
      actions.updateVal("name", message);
      actions.afterNameMessage(message);
      
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