import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let MessageForm = ({ dispatch }) => {
  let input
  return(
    <div>
      <form className="panel-footer message-form" onSubmit={ e => {
        e.preventDefault()
        if(!input.value.trim()){
          return
        }
        console.log(input.value)
        dispatch(addMessage('Mitch', input.value))
        input.value = ''
      }} >
        <div className="form-group">
            <input
              ref={node => {
                input = node
              }}
              type="text"
              className="form-control" />
              <hidden type="submit" />
        </div>
      </form>
    </div>
  )

}
MessageForm = connect()(MessageForm)

export default MessageForm
