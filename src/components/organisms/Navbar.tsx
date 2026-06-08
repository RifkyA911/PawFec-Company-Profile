import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, PhoneCall, X, PawPrint, Heart, Sparkles } from "lucide-react";

const links = [
  { label: "Home", href: "/", icon: PawPrint },
  { label: "Services", href: "#services", icon: Heart },
  { label: "Why Choose Us", href: "#why_choose_us", icon: Sparkles },
  { label: "Tips", href: "#tips", icon: PawPrint },
  { label: "Our Team", href: "#getToKnows", icon: Heart },
  { label: "Testimonials", href: "#testimonials", icon: Sparkles },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActive(window.location.pathname);
      setHash(window.location.hash);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => {
      setScrolled(window.scrollY > 50);
      if (window.innerWidth >= 768) setOpen(false);
    };

    const hashHandler = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("scroll", handler);
    window.addEventListener("resize", handler);
    window.addEventListener("hashchange", hashHandler);

    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
      window.removeEventListener("hashchange", hashHandler);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-white py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative">
              <PawPrint className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-fredoka text-gray-800">Pawfec</span>
              <span className="text-xs sm:text-sm font-semibold font-balsamiq text-orange-500">Care</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href || hash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 text-sm ${
                    isActive
                      ? "bg-orange-100 text-orange-600 font-semibold"
                      : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-fredoka">{item.label}</span>
                </a>
              );
            })}
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Schedule A Call</span>
              <span className="sm:hidden">Call</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setOpen(!open)}
              className="hover:bg-orange-100"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl p-6 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-3">
              {links.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.href || hash === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-orange-100 text-orange-600 font-semibold"
                        : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-fredoka text-lg">{item.label}</span>
                  </a>
                );
              })}
              <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold mt-4">
                <PhoneCall className="w-5 h-5 mr-2" />
                Schedule A Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
