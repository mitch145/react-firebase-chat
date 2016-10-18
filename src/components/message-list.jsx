import React from 'react';
import Message from './message';


class MessageList extends React.Component {

  render() {
    var messageList = this.props.messages.map(function(message) {
      return (
        <Message name={message.name} text={message.text} />
      );
    });
    return (
      <div className="panel-body">
      {messageList}
      </div>
    );
  }
}

export default MessageList;
