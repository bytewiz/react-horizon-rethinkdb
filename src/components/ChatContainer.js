import React from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

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
