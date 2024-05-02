import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  const parse = (message) => {


    if(checker === "name") {
      actions.afterNameMessage();
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

export default MessageParser;