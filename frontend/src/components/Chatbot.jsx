import { useState, useRef, useEffect } from "react";
import { marked } from "marked";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    if (isSending || input.trim() === "") return;

    setIsSending(true);

    const newMessage = {
      role: "user",
      text: input,
    };

    setChatHistory((prev) => [
      ...prev,
      newMessage,
      { role: "model", text: "Analyzing your query..." },
    ]);

    try {
      const contents = [...chatHistory.slice(-5), newMessage].map((msg) => ({
        role: msg.role === "model" ? "model" : "user",
        parts: [{ text: msg.text }],
      }));
      
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contents }),
        }
      );

      const data = await res.json();
      console.log("Gemini response:", data);

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response";

      setChatHistory((prev) => {
        const updated = [...prev];
        updated.pop();
        return [...updated, { role: "model", text: reply }];
      });
    } catch (err) {
      setChatHistory((prev) => {
        const updated = [...prev];
        updated.pop();
        return [...updated, { role: "model", text: err.message || "⚠️ Error occurred" }];
      });
    }

    setTimeout(() => setIsSending(false), 1000);
  };

  return (
    <div className="fixed bottom-10 right-10 z-9999">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center shadow-2xl text-white text-xl"
      >
        🤖
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 text-white">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Chat Panel */}
          <div className="absolute right-0 top-0 h-full w-100 bg-zinc-900 p-4 flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between mb-2 h-12">
              <button
                className="bg-blue-600 w-7 h-7 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <b>x</b>
              </button>
              <h2 className="font-bold text-blue-200">Skill-Helper</h2>
              <div></div>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="flex flex-col gap-2 h-[80vh] overflow-y-auto px-1"
            >
              <div className="bg-zinc-700 px-3 py-2 rounded-lg w-fit">
                Hey there! How can I help you?
              </div>

              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[75%] ${
                      msg.role === "user"
                        ? "bg-blue-600"
                        : "bg-zinc-700"
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(msg.text || ""),
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 mt-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Enter your message..."
                className="flex-1 p-2 rounded-lg text-zinc-200 bg-zinc-700 focus:outline-none"
              />

              <button
                onClick={sendMessage}
                className="bg-blue-600 w-10 h-10 rounded-full hover:bg-blue-500 flex items-center justify-center"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;