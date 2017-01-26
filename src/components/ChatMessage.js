import React from 'react';
// ======================================
// in charge of rendering a chat message
// ======================================

// all component styles
const styles = {
  container: {
    textAlign: 'left',
    margin: '20px 0'
  },
  txtBox: {
    padding: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
  },
  author: {
    textAlign: 'right',
    color: '#c0c0c0',
    fontSize: '12px'
  },
  btn: {
    float: 'left',
    border: 'none',
    color: '#d8d8d8',
    backgroundColor: 'transparent',
    outline: 'none'
  }
}

// destructing passed in props
const ChatMessage = ({ message, deleteMessage }) => (
    <div style={styles.container}>
      <div style={styles.txtBox}>
        {message.text}
      </div>
      <div style={styles.author}>
        <button
          style={styles.btn}
          onClick={() => deleteMessage(message.id)}>
          delete
        </button>
        {message.author}
      </div>
    </div>
)


export default ChatMessage;
