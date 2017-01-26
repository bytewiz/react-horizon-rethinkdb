import React from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

// ======================================
// chat Container for wrapping it and in charge of
// passing the data and actions around
// ======================================

const ChatContainer = ({ messages, addMessage, deleteMessage }) => (
  <div>
    <ChatInput addMessage={addMessage} />
    {messages.map((message, index) =>
      <ChatMessage
        key={index}
        message={message}
        deleteMessage={deleteMessage}
      />
    )}
  </div>
)

export default ChatContainer;
