import React from 'react';

class Todo extends React.Component{
  render (){
    return (
      <div className="message row">
        <p className={((this.props.name == 'Mitch'))? 'self' : 'friend'}>{this.props.name}: {this.props.message}</p>
      </div>
    );
  }
}

export default Todo;
