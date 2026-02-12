import React, { useState, useRef, useEffect } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

interface QAPair {
    keywords: string[];
    response: string;
}

const knowledgeBase: QAPair[] = [
    {
        keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening'],
        response: 'Namaste! 🙏 Welcome to A India Logistics. How can I help you today? You can ask me about our services, branches, fleet, pricing, or anything else!'
    },
    {
        keywords: ['service', 'services', 'what do you do', 'offer', 'help'],
        response: 'We offer a wide range of logistics services:\n\n🚛 Trucking Services – Safe cargo transport across India\n📦 Storage & Warehousing – Clean, secure facilities\n🔗 Supply Chain Management – Route & cost optimization\n🏭 Factory Logistics – In-plant material handling\n🚚 Business Delivery – Daily local deliveries\n📋 Packing & Moving – Professional packing & loading\n\nWould you like details on any specific service?'
    },
    {
        keywords: ['truck', 'trucking', 'transport', 'shipping', 'ship', 'move', 'delivery', 'deliver'],
        response: 'Our trucking service covers all of India! We focus on safe, on-time delivery of your goods. We handle everything from small packages to heavy machinery. Call us at +91 78299 08500 to book a shipment!'
    },
    {
        keywords: ['warehouse', 'warehousing', 'storage', 'store', 'godown'],
        response: 'We have clean and secure warehousing facilities across multiple locations including Bangalore, Bidadi, Kadi (Gujarat), Pune, and Gurgaon. Our warehouses are perfect for short-term and long-term storage needs.'
    },
    {
        keywords: ['supply chain', 'optimize', 'optimization', 'plan', 'planning'],
        response: 'Our supply chain experts help you find the best routes and methods to move your materials while saving you money. We analyze your logistics needs and create efficient solutions tailored to your business.'
    },
    {
        keywords: ['pack', 'packing', 'moving', 'label', 'loading'],
        response: 'Our packing & moving service includes professional packing, labeling, and careful loading to ensure your items travel safely. We use quality materials to protect your goods during transit.'
    },
    {
        keywords: ['branch', 'branches', 'location', 'office', 'where', 'address', 'city', 'cities'],
        response: 'We have offices across India:\n\n📍 Bangalore – Main Office, Basaveshwara Layout\n📍 Bidadi – Warehouse, Industrial Area\n📍 Kadi, Gujarat – Warehouse, Mascot Industrial Park\n📍 Pune – Warehouse, Transport Nagar\n📍 Gurgaon – Warehouse, Bhora Kalan\n\nWe cover 50+ cities across India!'
    },
    {
        keywords: ['bangalore', 'bengaluru'],
        response: '📍 Our Bangalore Main Office is at:\n1st Floor No.258/1 Basaveshwara Layout, Bidadi Ramanagara - 562109, Karnataka\n📞 +91 78299 08500\n✉️ info@AILargos.com'
    },
    {
        keywords: ['pune'],
        response: '📍 Our Pune Warehouse is at:\nPlot No.128 Sec No.23 Transport Nagar, Nigdi Pune - 411044, Maharashtra\n📞 +91 93529 78852\n✉️ ops@AILargos.com'
    },
    {
        keywords: ['gujarat', 'kadi', 'ahmedabad'],
        response: '📍 Our Kadi (Gujarat) Warehouse is at:\nE-44 Mascot Industrial Park, Jadavpura Cross Kadi, Mehsana 382715\n📞 +91 96635 846162\n✉️ wh.ahm@AILargos.com'
    },
    {
        keywords: ['gurgaon', 'gurugram', 'delhi', 'ncr'],
        response: '📍 Our Gurgaon Warehouse is at:\nKBS House Plot No. 15 Bhora Kalan, Gurgaon Haryana - 122413\n📞 +91 99824 29046\n✉️ ops@AILargos.com'
    },
    {
        keywords: ['price', 'pricing', 'cost', 'rate', 'charge', 'fee', 'quote', 'estimate', 'how much', 'kitna'],
        response: 'Pricing depends on the type of goods, distance, and truck size. We offer very competitive rates! For a free quote, please:\n\n📞 Call: +91 78299 08500\n✉️ Email: info@AILargos.com\n\nOr fill out the "Get Pricing" form on our website!'
    },
    {
        keywords: ['fleet', 'truck type', 'vehicle', 'capacity'],
        response: 'Our fleet includes:\n\n🚛 Big Cargo Trucks – 20-50 Tons (Heavy Goods)\n🚚 Delivery Vans – 2-10 Tons (Local Delivery)\n❄️ Cold Storage Trucks – 5-15 Tons (Food & Medicine)\n📦 Small Pickups – 1-3 Tons (Quick Moves)\n\nAll vehicles are well-maintained and GPS-tracked!'
    },
    {
        keywords: ['cold', 'refrigerated', 'temperature', 'food', 'medicine', 'pharma'],
        response: '❄️ Yes! We have Cold Storage Trucks (5-15 Tons capacity) for temperature-sensitive items like food and medicine. Our refrigerated trucks keep your goods at the right temperature throughout the journey.'
    },
    {
        keywords: ['heavy', 'machinery', 'equipment', 'factory', 'industrial'],
        response: '🏭 We specialize in moving heavy machinery and industrial equipment! Our Big Cargo Trucks can handle 20-50 tons. We also provide factory logistics to keep your production running smoothly.'
    },
    {
        keywords: ['contact', 'phone', 'call', 'email', 'reach', 'number'],
        response: 'You can reach us at:\n\n📞 Phone: +91 78299 08500\n📞 Sales: +91 95357 79215\n✉️ Email: info@AILargos.com\n✉️ Sales: sales@AILargos.com\n\nWe are available to help you anytime!'
    },
    {
        keywords: ['track', 'tracking', 'gps', 'where is', 'status'],
        response: '📍 Yes! We offer GPS tracking on all our trucks. You can see where your cargo is anytime. Contact us with your shipment details and we will share the live tracking information with you.'
    },
    {
        keywords: ['insurance', 'safe', 'safety', 'damage', 'secure', 'protection'],
        response: '🛡️ We take full responsibility for your goods! Every shipment comes with basic insurance coverage. Our team handles your items with care, using proper packing materials and secure loading techniques.'
    },
    {
        keywords: ['payment', 'pay', 'upi', 'cash', 'bank', 'transfer'],
        response: '💳 We accept multiple payment methods:\n\n💵 Cash\n📱 UPI (GPay / PhonePe)\n🏦 Bank Transfer\n\nPayment is collected after the job is done, so you only pay when you are satisfied!'
    },
    {
        keywords: ['time', 'how long', 'duration', 'fast', 'speed', 'urgent', 'express'],
        response: '⏱️ Delivery time depends on the distance and route. We always pick the fastest and safest roads. For urgent deliveries, we offer express service options. Call us at +91 78299 08500 for an estimated delivery time!'
    },
    {
        keywords: ['owner', 'rajan', 'bansal', 'founder', 'who'],
        response: '👤 A India Logistics is founded and run by Rajan Bansal. As a family business, we take personal care of every client. "We treat every box as if it were our own" – Rajan Bansal, Founder & Owner'
    },
    {
        keywords: ['experience', 'years', 'history', 'old', 'established'],
        response: '📊 We have 10+ years of experience in the logistics industry! With 50+ cities covered, 5000+ happy clients, and 10,000+ tons moved, we are one of Rajasthan\'s most trusted logistics partners.'
    },
    {
        keywords: ['book', 'booking', 'order', 'schedule', 'how to', 'process', 'start'],
        response: 'Booking with us is simple:\n\n1️⃣ Call us or send a message with your needs\n2️⃣ We plan the best route\n3️⃣ Our team loads your items carefully\n4️⃣ We deliver right to your door!\n\n📞 Call: +91 78299 08500 to get started!'
    },
    {
        keywords: ['thank', 'thanks', 'bye', 'goodbye', 'ok', 'okay', 'great'],
        response: 'Thank you for choosing A India Logistics! 🙏 If you have any more questions, feel free to ask. We are always here to help!\n\n📞 +91 78299 08500\n✉️ info@AILargos.com'
    },
];

const defaultResponse = "I'm sorry, I didn't quite understand that. You can ask me about:\n\n• Our services\n• Branch locations\n• Fleet & vehicles\n• Pricing & quotes\n• Contact information\n• Tracking & insurance\n• Payment methods\n• Booking process\n\nOr call us directly at 📞 +91 78299 08500!";

function findBestResponse(input: string): string {
    const lower = input.toLowerCase().trim();
    if (!lower) return defaultResponse;

    let bestMatch: QAPair | null = null;
    let bestScore = 0;

    for (const qa of knowledgeBase) {
        let score = 0;
        for (const keyword of qa.keywords) {
            if (lower.includes(keyword)) {
                // Longer keyword matches are more specific, give higher score
                score += keyword.length;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestMatch = qa;
        }
    }

    return bestMatch ? bestMatch.response : defaultResponse;
}

const chatbotStyles = `
  .chatbot-fab {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #2d4133;
    color: #f4f1e6;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: transform 0.3s ease, background 0.3s ease;
    -webkit-tap-highlight-color: transparent;
  }
  .chatbot-fab:hover {
    background: #c5a47e;
  }
  .chatbot-fab.open {
    transform: rotate(90deg);
  }

  .chatbot-window {
    position: fixed;
    bottom: 96px;
    right: 24px;
    width: 380px;
    max-width: calc(100vw - 48px);
    height: 520px;
    max-height: calc(100vh - 140px);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    z-index: 9998;
    display: flex;
    flex-direction: column;
    transform: translateY(20px) scale(0.95);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    font-family: 'Montserrat', sans-serif;
  }
  .chatbot-window.open {
    transform: translateY(0) scale(1);
    opacity: 1;
    pointer-events: auto;
  }

  .chatbot-header {
    background: #2d4133;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }
  .chatbot-header-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #c5a47e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .chatbot-header-title {
    color: #f4f1e6;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
  .chatbot-header-status {
    color: #c5a47e;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .chatbot-close-btn {
    margin-left: auto;
    background: none;
    border: none;
    color: #f4f1e6;
    cursor: pointer;
    padding: 4px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;
  }

  .chatbot-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    background: #f4f1e6;
    display: flex;
    flex-direction: column;
    gap: 12px;
    -webkit-overflow-scrolling: touch;
  }
  .chatbot-msg-row {
    display: flex;
  }
  .chatbot-msg-row.user {
    justify-content: flex-end;
  }
  .chatbot-msg-row.bot {
    justify-content: flex-start;
  }
  .chatbot-msg-bubble {
    max-width: 80%;
    padding: 12px 16px;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-line;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    word-break: break-word;
  }
  .chatbot-msg-bubble.user {
    border-radius: 16px 16px 4px 16px;
    background: #2d4133;
    color: #f4f1e6;
  }
  .chatbot-msg-bubble.bot {
    border-radius: 16px 16px 16px 4px;
    background: white;
    color: #2d4133;
  }

  .chatbot-input-area {
    padding: 12px 16px;
    background: white;
    border-top: 1px solid #e8e4d9;
    display: flex;
    gap: 8px;
    align-items: center;
    flex-shrink: 0;
  }
  .chatbot-input {
    flex: 1;
    border: 2px solid #e8e4d9;
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 16px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    color: #2d4133;
    background: #faf9f5;
    transition: border-color 0.2s;
    -webkit-appearance: none;
  }
  .chatbot-input:focus {
    border-color: #c5a47e;
  }
  .chatbot-send-btn {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: none;
    color: #f4f1e6;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.2s;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .chatbot-send-btn.active {
    background: #2d4133;
    cursor: pointer;
  }
  .chatbot-send-btn.inactive {
    background: #d4d0c5;
    cursor: default;
  }

  /* ===== MOBILE (≤640px) ===== */
  @media (max-width: 640px) {
    .chatbot-fab {
      bottom: 16px;
      right: 16px;
      width: 54px;
      height: 54px;
    }

    .chatbot-window {
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      border-radius: 0;
      transform: translateY(100%);
    }
    .chatbot-window.open {
      transform: translateY(0);
    }

    .chatbot-header {
      padding: 14px 16px;
      padding-top: max(14px, env(safe-area-inset-top, 14px));
    }
    .chatbot-close-btn {
      display: flex;
    }

    .chatbot-messages {
      padding: 12px;
      gap: 10px;
    }
    .chatbot-msg-bubble {
      max-width: 85%;
      font-size: 14px;
      padding: 10px 14px;
    }

    .chatbot-input-area {
      padding: 10px 12px;
      padding-bottom: max(10px, env(safe-area-inset-bottom, 10px));
    }
    .chatbot-input {
      padding: 12px 14px;
      font-size: 16px;
    }
    .chatbot-send-btn {
      width: 46px;
      height: 46px;
    }
  }

  /* ===== TABLET (641–768px) ===== */
  @media (min-width: 641px) and (max-width: 768px) {
    .chatbot-window {
      width: 360px;
      height: 480px;
      bottom: 88px;
      right: 20px;
    }
  }
`;

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: 'Namaste! 🙏 I\'m the AIL assistant. How can I help you today?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    // Lock body scroll on mobile when chat is open
    useEffect(() => {
        const isMobile = window.innerWidth <= 640;
        if (isOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        const userMessage: Message = { text: trimmed, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        setTimeout(() => {
            const botResponse: Message = { text: findBestResponse(trimmed), sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        }, 400);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            <style>{chatbotStyles}</style>

            {/* FAB */}
            <button
                className={`chatbot-fab${isOpen ? ' open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Chat with us"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div className={`chatbot-window${isOpen ? ' open' : ''}`}>
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header-avatar">🚛</div>
                    <div>
                        <div className="chatbot-header-title">AIL Assistant</div>
                        <div className="chatbot-header-status">Online • Ready to help</div>
                    </div>
                    <button className="chatbot-close-btn" onClick={() => setIsOpen(false)} aria-label="Close chat">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((msg, i) => (
                        <div key={i} className={`chatbot-msg-row ${msg.sender}`}>
                            <div className={`chatbot-msg-bubble ${msg.sender}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="chatbot-input-area">
                    <input
                        ref={inputRef}
                        className="chatbot-input"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your question..."
                        enterKeyHint="send"
                    />
                    <button
                        className={`chatbot-send-btn ${input.trim() ? 'active' : 'inactive'}`}
                        onClick={handleSend}
                        disabled={!input.trim()}
                        aria-label="Send message"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};
