import React, { Component } from 'react';

// ======================================
// controlling user input and the action
// trigger for posting a chat message
// ======================================

const styles = {
  input: {
    fontSize: '20px',
    margin: 0,
    border: 'none',
    minWidth: '405px',
    padding: '10px',
    outline: 'none',
    height: '40px',
    verticalAlign: 'top',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  },
  btn: {
    height: '40px',
    verticalAlign: 'top',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    backgroundColor: '#3F51B5',
    color: '#fff',
    padding: '5px 20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  }
}

class ChatInput extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        if (this.state.message.length){
          this.props.addMessage(this.state.message);
          this.setState({message: ''})
        }
      }}>
        <input
          value={this.state.message}
          onChange={(e) => this.setState({message: e.target.value})}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.btn}>Send</button>
      </form>
    )
  }
}

export default ChatInput;
