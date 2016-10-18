import React from 'react';
import ReactDOM from 'react-dom';
import MessageTitle from './message-title'
import MessageList from './message-list';
import MessageForm from './message-form'
import * as firebase from 'firebase'
import rebase from 're-base'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
    //     sendMessage: function(name, text){
    //     console.log(this.state)
    //     this.setState({
    //       messages: this.state.messages.concat({name: name, text: text}) //updates Firebase and the local state
    //     });
    //   },
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this);
  }
  sendMessage(name, text){
    this.setState({
      messages: this.state.messages.concat({name: name, text: text}) //updates Firebase and the local state
    })
  }
  componentWillMount() {

    var base = rebase.createClass({
      apiKey: "AIzaSyBmiFPSzLtDBgNi2a-v5lIOP75MpI1bSrA",
      authDomain: "fir-chat-4097b.firebaseapp.com",
      databaseURL: "https://fir-chat-4097b.firebaseio.com",
      storageBucket: "fir-chat-4097b.appspot.com"
    });
    base.syncState('messages', {
      context: this,
      state: 'messages'
    });

  }
  render(){
    let messages = [
      {id: 0, name: 'AI', text: 'Hello there.'},
      {id: 1, name: 'AI', text: 'How\'s it going?'}
    ]
    return(
      <div className="container message-list">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div className="panel panel-default">
              <MessageTitle />
              <MessageList messages={this.state.messages}/>
              <MessageForm sendMessage={this.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
