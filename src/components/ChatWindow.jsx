const Messages = ({ text, date, role }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble">
        `se acabo`,
        <br />I have the high ground.
      </div>
    </div>
  );
};



const ChatWindow = ({ messages }) => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6">
      {messages.map((message, index) => (
        <Messages key={index} className="mb-4" text={message.text} />
      ))}
    </section>
  );
};

export default ChatWindow;
