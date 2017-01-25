import React, { Component } from 'react';
import Horizon from '@horizon/client';
// Specify the host property for initializing the Horizon connection
const horizon = Horizon({host: 'localhost:8181'});
const chat = horizon('messages');
import ChatContainer from './components/ChatContainer';

export default class App extends Component {
  constructor(){
    super()

    this.state = {
      messages: []
    }
    this._addMessage = this._addMessage.bind(this);
    this._deleteMessage = this._deleteMessage.bind(this);
  }
  componentDidMount() {
    chat.order('datetime')
    .watch()
    .subscribe((messages) => {
      this.setState({ messages })
    },
    // If an error occurs, this function
    //  will execute with the `err` message
    (err) => {
      console.log(err);
    })
  }
  _addMessage(text){
    let message = {
      text,
      datetime: new Date(),
      author: 'Anonymous'
    }

    chat.store(message);
  }
  _deleteMessage(id){
    chat.remove(id);
  }
  render() {
    console.log(this.state.messages);
    return (
      <div style={{
        textAlign: 'center',
        width: '475px',
        margin: 'auto'
      }}>
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
