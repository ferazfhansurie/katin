import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { AnimatedChatBubble } from "./AnimatedChatBubble";

export const Hero = () => {
  return (
    <section className="container flex items-center justify-between py-24 md:py-40 relative">
      <div className="absolute inset-0 z-0">
        <AnimatedChatBubble />
      </div>
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-primary dark:text-white font-extrabold">
            Manage{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Automated
            </span>{' '}
            WhatsApp Conversations
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-primary dark:text-white mb-6">
          with Shared Team Inbox
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Team Collaboration. One Platform for All Your WhatsApp Conversations
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg" asChild>
            <a href="https://web.jutasoftware.co/register" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </div>
      </div>
  
      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};