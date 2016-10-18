import React from 'react';

class MessageForm extends React.Component{
  render(){
    return(
      <div className="panel-footer message-form">
        <div className="form-group">
          <input type="text" className="form-control" id="inputDefault" />
        </div>
      </div>
    )
  }
}

export default MessageForm
