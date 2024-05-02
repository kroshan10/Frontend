import React from 'react';

const MessageParser = ({ children, actions }) => {
  const { checker } = children.props.state;
  let name;
  const parse = (message) => {


    if(checker === "name") {
      name=message;
      actions.afterNameMessage(name);
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