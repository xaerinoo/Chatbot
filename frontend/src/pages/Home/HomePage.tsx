import Budda from "@/components/Budda"
import HistoryButton from "@/components/HistoryButton"
import Input from "@/components/Input"
import { useState } from "react";

const HomePage = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSend = (message: string) => {
    setMessages(prev => [...prev, message]);
    console.log("전송한 질문: ", message);
  };

  return (
    <>
      <HistoryButton />
      <Budda />
      <Input onSend={handleSend} />
    </>
  )
}

export default HomePage