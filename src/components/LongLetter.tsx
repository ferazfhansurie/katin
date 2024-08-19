import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const LongLetter: React.FC = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Client's Comments
        </span>
      </h2>
      <Card className="max-w-4xl mx-auto bg-muted/50">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">What our clients say about us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground text-lg">
          <p>"Joining Us To Automate has transformed our business operations. The efficiency gains are remarkable!" - John D., CEO</p>
          <p>"The team's expertise and support have been invaluable. Our productivity has soared since implementing their solutions." - Sarah L., Operations Manager</p>
          <p>"I was skeptical at first, but the results speak for themselves. Our customer engagement has improved significantly." - Michael R., Small Business Owner</p>
          <p>"The automation tools are user-friendly and incredibly effective. It's like having an extra team member!" - Emily S., Marketing Director</p>
          <p>"We've reclaimed so much time that was previously lost to repetitive tasks. Now we can focus on growth and innovation." - David K., Startup Founder</p>
        </CardContent>
      </Card>
    </section>
  );
};