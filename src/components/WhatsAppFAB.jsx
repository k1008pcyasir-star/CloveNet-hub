import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a 
      href="https://wa.me/255776378529" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
}