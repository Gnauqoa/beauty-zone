import { Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";

const chatBotExample = [
  "Xin chào! Tôi là chuyên viên tư vấn của BeautyZone. Tôi có thể giúp gì cho bạn?",
  "Tôi đã hiểu vấn đề của bạn. Các sản phẩm sau đây có thể sẽ phù hợp với yêu cầu của bạn:",
];

const employeeChatExample = [
  "Xin chào! Tôi là nhân viên tư vấn của BeautyZone. Tôi có thể giúp gì cho bạn?",
  "Tôi đã hiểu yêu cầu của bạn. Các sản phẩm sau đây có thể sẽ phù hợp với yêu cầu của bạn:",
];

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [searchParams] = useSearchParams();
  const isEmployee = !!searchParams.get("employee");

  const handleSubmitMessage = (userMessage) => {
    if (!userMessage.trim()) return; // Ignore empty messages

    // Add user message to the chat
    const newMessages = [...messages, { type: "user", content: userMessage }];

    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      const botResponse =
        (isEmployee ? employeeChatExample : chatBotExample)[
          messages.length / 2
        ] || "Xin lỗi, tôi chưa hiểu ý của bạn.";
      setMessages((prev) => [...prev, { type: "bot", content: botResponse }]);
    }, 1000);
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.default",
        p: 2,
        gap: 5,
        overflowY: "auto",
        pt: 5,
      }}
    >
      {messages.map((message, index) => {
        if (message.type === "user")
          return <UserChat key={index} content={message.content} />;
        return <BotChat key={index} content={message.content} />;
      })}
      <ChatBox onSubmit={handleSubmitMessage} />
    </Stack>
  );
};

const ChatBox = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const isEmployee = !!searchParams.get("employee");

  const handleSend = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <Stack direction="row" gap={1}>
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Type a message..."
        sx={{
          flexGrow: 1,
          borderRadius: "8px",
        }}
      />
      <Button
        variant="contained"
        onClick={handleSend}
        sx={{
          borderRadius: "8px",
        }}
      >
        <SendIcon />
      </Button>
      {isEmployee && (
        <Button
          variant="contained"
          sx={{
            borderRadius: "8px",
          }}
        >
          <CallIcon />
        </Button>
      )}
    </Stack>
  );
};

ChatBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const UserChat = ({ content }) => {
  return (
    <div className="px-6 py-3 bg-[#A78A7F] rounded-[8px] ml-auto">
      <Typography
        sx={{
          color: "#000",
          fontSize: 16,
        }}
      >
        {content}
      </Typography>
    </div>
  );
};

UserChat.propTypes = {
  content: PropTypes.string,
};

const BotChat = ({ content }) => {
  return (
    <div className="px-6 py-3 bg-[#735751] rounded-[8px] mr-auto">
      <Typography
        sx={{
          color: "#fff",
          fontSize: 16,
        }}
      >
        {content}
      </Typography>
    </div>
  );
};

BotChat.propTypes = {
  content: PropTypes.string,
};

export default ChatBot;
