import React from 'react';
import Message from './message'

class MessageList extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    let messageList = this.props.messages.map(function(message) {
      return (
        <Message name={message.name} text={message.text} currentUser={this.props.currentUser} />
      );
    }, this);
    return (
      <div className="panel-body">
      {messageList}
      </div>
    );
  }
}

export default MessageList;
