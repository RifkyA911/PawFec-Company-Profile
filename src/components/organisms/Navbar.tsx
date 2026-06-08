import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, PhoneCall, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Health & Wellness", href: "/health" },
//   { label: "Shop", href: "/shop" },
//   { label: "Community", href: "/community" },
{ label: "Services", href: "#services" },
{ label: "Tips", href: "#tips" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <nav className="relative bg-white xshadow-md p-4 flex justify-between items-center">
      <img src="/images/logo.png" className="h-16" alt="Logo" />

      {/* Desktop */}
      <div className="text-xl hidden md:flex gap-16 md:items-baseline md:justify-between">
        {links.map((item) => {
          const isActive = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={` font-semibold align-middle ${
                isActive
                  ? "text-orange-500 font-bold"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              {item.label}
            </a>
          );
        })}
        <Button className="text-base bg-amber-500 py-6 px-8 rounded-full">
          <PhoneCall className="w-16 h-16" /> Schedule A Call
        </Button>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Button variant="ghost" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#fff6e6] shadow-md p-4 flex flex-col gap-4 md:hidden z-10">
          {links.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  isActive
                    ? "text-orange-500 font-bold"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
