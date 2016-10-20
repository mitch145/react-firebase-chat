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
      currentUser: 'Mitch'
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(name, text){
    this.setState({
      messages: this.state.messages.concat({name: name, text: text}) //updates Firebase and the local state
    })
  }
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBmiFPSzLtDBgNi2a-v5lIOP75MpI1bSrA",
      authDomain: "fir-chat-4097b.firebaseapp.com",
      databaseURL: "https://fir-chat-4097b.firebaseio.com",
      storageBucket: "fir-chat-4097b.appspot.com",
      messagingSenderId: "121679038004"
    };
    // firebase.initializeApp(config);
    // var provider = new firebase.auth.FacebookAuthProvider();
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   this.state.user = user.displayName
    //
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    // console.log(this.state)
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
    function handleAuthentication(user){
      
    }
    var authHandler = function(error, result) {
      if(error){
        console.log(error)
      };
      handleAuthentication(result.user);
    }
    base.authWithOAuthPopup('facebook', authHandler);

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
