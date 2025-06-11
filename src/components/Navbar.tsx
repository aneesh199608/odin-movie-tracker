import { useState } from "react";
import { Link } from "react-router-dom";
import { 
    NavigationMenu, 
    NavigationMenuList, 
    NavigationMenuItem, 
    NavigationMenuLink 
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logoPng from "../assets/shopcart-logo.png"

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
    cartCount?: number;
}

const defaultMenu: MenuItem[] = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    // Add more items
  ];

  const defaultLogo = {
    url: "/",
    title: "ShopCart",
    alt: "Product Logo",
    src: logoPng,
  };


  export default function Navbar({
    logo = defaultLogo,
    menu = defaultMenu,
    cartCount = 2,
  }: NavbarProps) {

    const [mobileOpen, setMobileOpen] = useState(false);

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
                        <Input placeholder="Search" className="w-48" />
                    </div>
                    <Separator
                        orientation="vertical"
                        className="hidden md:flex mx-2 data-[orientation=vertical]:h-4"
                    />
                    <Link to="/cart" className="relative">
                        <ShoppingCart className="w-6 h-6" />
                            {cartCount > 0 && (
                                <Badge className="absolute -top-2 -right-2 rounded-full text-xs px-2 py-0.5">
                                    {cartCount}
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
                    <Input placeholder="Search" className="w-4/5" />
                </nav>
                </div>
            )}

        </header>
    )
}