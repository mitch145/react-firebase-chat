import React from 'react';

class Message extends React.Component{
  render (){
    return (
      <div className="message row">
        <p className={((this.props.name == this.props.currentUser))? 'self' : 'friend'}>{this.props.name}: {this.props.text}</p>
      </div>
    );
  }
}

export default Message;
