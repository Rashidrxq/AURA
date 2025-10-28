import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { CloseIcon, SendIcon } from './Icon';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface SupportAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportAssistant: React.FC<SupportAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);
  const chatRef = useRef<Chat | null>(null);

  const systemInstruction = `You are a friendly and knowledgeable customer support assistant for AURA, a premium interior design and furniture store.
    You help customers by answering questions about products, pricing, shipping, returns, materials, and customization options.
    Always reply in a warm, polite, and conversational tone, like a personal shopping assistant.
    If a product is mentioned (like sofa, lamp, table, etc.), give a short helpful reply describing:
    - The product’s key features
    - Material & style (modern, minimal, cozy, etc.)
    - Approximate price range
    - Availability or next steps (like “You can find this in our Living Room section”).
    If the customer asks general questions (e.g., delivery, warranty, colors, fabric options), give clear, simple answers.
    Always sound like a real human interior design assistant, not a robot.
    Keep answers short, aesthetic, and helpful.`;

  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: { systemInstruction },
      });
      setMessages([{ role: 'model', text: "Hello! I'm the AURA assistant. How can I help you design your perfect space today?" }]);
      hasInitialized.current = true;
    }
  }, [isOpen, systemInstruction]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const messageToSend = input;
    setInput('');
    setIsLoading(true);

    try {
        const response = await chatRef.current.sendMessage({ message: messageToSend });
        setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm having a little trouble right now. Please try again in a moment." }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <div className="w-screen h-screen sm:w-96 sm:h-[500px] bg-beige rounded-none sm:rounded-lg shadow-2xl flex flex-col font-poppins">
        <header className="bg-taupe text-ivory p-4 rounded-none sm:rounded-t-lg flex justify-between items-center">
          <div>
            <h3 className="font-playfair text-lg font-bold">AURA Assistant</h3>
            <p className="text-xs text-beige/70">Your personal design guide</p>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/20 transition-colors">
            <CloseIcon className="w-5 h-5" />
          </button>
        </header>

        <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-[80%] ${msg.role === 'user' ? 'bg-gold-accent text-white' : 'bg-ivory text-matte-black'}`}>
                {msg.text}
              </div>
            </div>
          ))}
            {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="rounded-lg px-4 py-2 bg-ivory text-matte-black flex items-center space-x-1">
                <span className="w-2 h-2 bg-taupe/40 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                <span className="w-2 h-2 bg-taupe/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                <span className="w-2 h-2 bg-taupe/40 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-taupe/20 flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a product..."
            className="flex-1 bg-ivory px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-accent text-sm"
          />
          <button type="submit" className="ml-3 bg-gold-accent text-white p-3 rounded-full hover:bg-opacity-90 transition-all duration-300 disabled:bg-taupe/50">
            <SendIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportAssistant;