import React, { Component } from 'react';
import Horizon from '@horizon/client';
// Specify the host property for initializing the Horizon connection
const horizon = Horizon({host: 'localhost:8181'});
const chat = horizon('messages');
import ChatContainer from './components/ChatContainer';
// all component styles
const styles = {
  container: {
    textAlign: 'center',
    width: '475px',
    margin: 'auto'
  }
}
export default class App extends Component {
  constructor(){
    super()

    this.state = {
      messages: []
    }
    // binding this to keep the scope
    this._addMessage = this._addMessage.bind(this);
    this._deleteMessage = this._deleteMessage.bind(this);
  }
  
  componentDidMount() {
    // init create the connection to horizon
    chat.order('datetime')
    .watch()
    .subscribe((messages) => {
      this.setState({ messages })
    },
    (err) => {
      console.log(err);
    })
  }
  // @param text input from ChatInput
  // adding extra data
  // posting it to the store (rethinkdb) via. horizon
  _addMessage(text){
    let message = {
      text,
      datetime: new Date(),
      author: 'Anonymous'
    }

    chat.store(message);
  }
  // @param message id from ChatMessage
  _deleteMessage(id){
    chat.remove(id);
  }

  render() {
    console.log(this.state.messages);
    return (
      <div style={styles.container}>
        <h1>Hello, chat.</h1>
        <div>
          <ChatContainer
            addMessage={this._addMessage}
            deleteMessage={this._deleteMessage}
            messages={this.state.messages}
          />
        </div>
      </div>
    );
  }
}
