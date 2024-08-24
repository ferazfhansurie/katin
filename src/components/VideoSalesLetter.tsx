import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Play, Pause } from 'lucide-react';


export const VideoSalesLetter: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById('vsl-video') as HTMLVideoElement;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="container py-12 sm:py-16">
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Watch How We Can{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Transform Your Business
            </span>
          </h2>
          <div className="relative aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
         
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="bg-primary/80 text-primary-foreground rounded-full p-4 cursor-pointer hover:bg-primary transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={48} /> : <Play size={48} />}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            Discover how our AI-powered solutions can revolutionize your WhatsApp business strategy.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};