import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

const Hero = ({
  heading = "Stop swiping. Start watching!",
  description = "Watch Movies That Deserve Your Attention. A handpicked library of timeless films curated for minds that crave depth.",
  button = {
    text: "I'm ready to stop scrolling",
    url: "/movies"
  }
}: HeroProps) => {
  return (
    <section className="py-16">
      <div className="flex justify-center items-center">
      <DotLottieReact
          src="https://lottie.host/22d0205e-a9cb-4daf-a041-3ac42fc639f7/CwGxKdurdM.lottie"
          loop
          autoplay
          style={{ width: 300, height: 300 }}
        />
      </div>
      <div className="container text-center">
        
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
          <Button asChild size="lg" className="mt-10">
            <Link to={button.url}>{button.text}</Link>
          </Button>
      </div>
    </section>
  );
};

export { Hero };
