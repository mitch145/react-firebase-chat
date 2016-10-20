import React from 'react';

class MessageForm extends React.Component{
  constructor(){
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.sendMessage(this.props.currentUser, this.state.value)
    this.setState({value: ''})
  }
  render(){
    return(
      <div>
        <form className="panel-footer message-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
              <input
                type="text"
                className="form-control"
                autoFocus="true"
                value={this.state.value}
                onChange={this.handleChange}
                 />
          </div>
        </form>
      </div>
    )
  }

}

export default MessageForm
