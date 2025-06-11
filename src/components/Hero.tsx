import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

const Hero = ({
  heading = "Shop Smarter, Live Better! Your Cartly Journey Begins Here",
  description = "Discover the best deals on everyday essentials, all in one seamless shopping experience designed just for you.",
  button = {
    text: "Explore Our Products",
    url: "/products"
  }
}: HeroProps) => {
  return (
    <section className="py-32">
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
