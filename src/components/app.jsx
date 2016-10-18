import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './message-list';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'



const App = ({messages}) => (
  <MessageList messages={messages} />
)
const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)
