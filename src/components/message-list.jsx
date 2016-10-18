import React from 'react';
import Message from './message';

var messages = [
  {name: 'Mitch', text: 'Hello World'},
  {name: 'Mitch', text: 'What a nice day'},
  {name: 'AI', text: 'Hello Mitch'},
  {name: 'Mitch', text: 'How\'s it going?'}
]

// var messageList = this.props.messages.map(function(message) {
var messageList = messages.map(function(message) {
  return (
    <Message name={message.name} text={message.text} />
  );
});

class MessageList extends React.Component {

    render() {
        return (
          <div className="container message-list">
            <div className="row">
              <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h1 className="text-center">Mitch's Chat App</h1>
                  </div>
                  <div className="panel-body">
                  {messageList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default MessageList;
