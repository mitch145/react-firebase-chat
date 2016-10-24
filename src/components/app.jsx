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
      messages: [],
      currentUser: '',
    }
    const self=this;
    this.sendMessage = this.sendMessage.bind(this);

    // database setup
    var base = rebase.createClass({
      apiKey: "AIzaSyBmiFPSzLtDBgNi2a-v5lIOP75MpI1bSrA",
      authDomain: "fir-chat-4097b.firebaseapp.com",
      databaseURL: "https://fir-chat-4097b.firebaseio.com",
      storageBucket: "fir-chat-4097b.appspot.com"
    });
    base.syncState('messages', {
      context: this,
      state: 'messages',
      loading: 'true'
    });

    function authDataCallback(user) {
      if (user) {
        console.log("User " + user.uid + " is logged in with " + user.providerId);
      } else {
        console.log("User is logged out");
      }
      self.setState({currentUser: user.displayName})
    }

    var authHandler = function(error, result) {
      if(error){
        console.log(error)
      };
      authDataCallback(result.user);
    }
    // base.authWithOAuthPopup('facebook', authHandler);

    var onRedirectBack = function(error, authData){
      if(error) console.log(error);
      if(authData.user){
        authDataCallback(authData.user);
      } else {
        //redirect to facebook for auth
        base.authWithOAuthRedirect('facebook', authHandler);
      }
    }

    base.authGetOAuthRedirectResult(onRedirectBack);

  }

  sendMessage(name, text){
    this.setState({
      messages: this.state.messages.concat({name: name, text: text}) //updates Firebase and the local state
    })
  }
  componentWillMount() {


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
              <MessageList messages={this.state.messages} currentUser={this.state.currentUser} />
              <MessageForm sendMessage={this.sendMessage} currentUser={this.state.currentUser} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
