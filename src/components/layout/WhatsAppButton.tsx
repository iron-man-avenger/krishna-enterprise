import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '919876543210';
  const defaultMessage = encodeURIComponent('Hello Krishna Enterprises! I would like to inquire about your products and order status.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center justify-center w-11 h-11 sm:w-auto sm:h-auto sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-1 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
      <span className="text-xs font-bold hidden sm:inline-block ml-2">WhatsApp Help</span>
      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full" />
    </a>
  );
};

