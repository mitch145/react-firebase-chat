import React from 'react';
import ReactDOM from 'react-dom';
import MessageTitle from './message-title'
import MessageList from './message-list';
import MessageForm from './message-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'



const App = ({messages}) => (
  <div className="container message-list">
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div className="panel panel-default">
          <MessageTitle />
          <MessageList messages={messages} />
          <MessageForm />
        </div>
      </div>
    </div>
  </div>
)
const mapStateToProps = state => ({
  messages: state.messages
})

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App)
