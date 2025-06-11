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


export default function Navbar() {

    const cartCount = 2;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="border-b bg-white h-24 relative px-16">
            <div className="container mx-auto flex items-center justify-between h-full relative">

                <div className="font-bold text-2xl flex-shrink-0">
                    <Link to="/">ShopCart</Link>
                </div>

                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/">Home</Link>
                            </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/products">Products</Link>
                            </NavigationMenuLink>
                            </NavigationMenuItem>
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
                    <Link to="/" onClick={() => setMobileOpen(false)}>
                    Home
                    </Link>
                    <Link to="/products" onClick={() => setMobileOpen(false)}>
                    Products
                    </Link>
                    <Input placeholder="Search" className="w-4/5" />
                </nav>
                </div>
            )}
            
        </header>
    )
}