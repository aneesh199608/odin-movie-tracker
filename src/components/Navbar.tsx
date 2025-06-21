import { useState } from "react";
import { Link } from "react-router-dom";
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink 
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip";
import { Clapperboard } from "lucide-react";
import { Badge } from "./ui/badge";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logoPng from "../assets/OdinFlix Logo.png"
import { useWatchList } from "@/context/WatchListContext";
import { Button } from "./ui/button";

export interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

export interface NavbarProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
}

const defaultMenu: MenuItem[] = [
    { title: "Home", url: "/" },
    { title: "Movies", url: "/movies" },
    // Add more items
  ];

  const defaultLogo = {
    url: "/",
    title: "OdinFlix",
    alt: "Product Logo",
    src: logoPng,
  };


  export default function Navbar({
    logo = defaultLogo,
    menu = defaultMenu,
    
  }: NavbarProps) {

    const [mobileOpen, setMobileOpen] = useState(false);
    const { watchList } = useWatchList();
    const moviesCount = watchList.length;

    return (
        <header className="border-b bg-background h-24 relative px-16">
            <div className="container mx-auto flex items-center justify-between h-full relative">

                <div className="flex items-center gap-2 font-bold text-2xl flex-shrink-0">
                    <Link to={logo.url} className="flex items-center gap-2">
                        <img src={logo.src} alt={logo.alt} className="max-h-8" />
                        <span>{logo.title}</span>
                    </Link>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menu.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuLink asChild>
                                <Link to={item.url}>{item.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="hidden md:block">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                <a
                                    href="https://github.com/aneesh199608/odin-movie-tracker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="outline" className="cursor-pointer">View on Github</Button>
                                </a>
                                </TooltipTrigger>
                                <TooltipContent side="bottom" align="center">
                                <span>
                                    On my plate currently - Mobile version!
                                </span>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </div>
                    <Separator
                        orientation="vertical"
                        className="hidden md:flex mx-2 data-[orientation=vertical]:h-4"
                    />
                    <Link to="/watchlist" className="relative">
                        <Clapperboard className="w-6 h-6" />
                            {moviesCount > 0 && (
                                <Badge className="absolute -top-2 -right-2 rounded-full text-xs px-2 py-0.5">
                                    {moviesCount}
                                </Badge>
                        )}
                    </Link>
                    <ModeToggle />

                    {/* Hamburger Menu Button (visible on mobile) */}
                    <button
                        className="md:hidden ml-2 p-2"
                        aria-label="Open menu"
                        onClick={() => setMobileOpen((open) => !open)}
                    >
                        {mobileOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="md:hidden absolute left-0 right-0 bg-white border-b shadow z-20">
                <nav className="flex flex-col items-center gap-4 py-4">
                    {menu.map((item) => (
                        <Link
                        to={item.url}
                        key={item.title}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.title}
                        </Link>
                    ))}
                    <Button>Check on Github</Button>
                </nav>
                </div>
            )}

        </header>
    )
}