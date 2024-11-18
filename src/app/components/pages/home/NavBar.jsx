"use client";
import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const links = [
  { name: "Home", href: "#", icon: <AiOutlineHome className="w-5 h-5" /> },
  { name: "Work", href: "#" },
  { name: "Services", href: "#" },
  { name: "Products", href: "#" },
  { name: "Awards", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">LogoText</span>
        </div>

        {/* Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed md:static inset-0 flex flex-col md:flex-row items-center justify-center bg-gray-800 md:bg-transparent md:space-x-8 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 md:transition-none`}
        >
          {links.map((link) => (
            <li key={link.name} className="p-2 md:p-0">
              <a
                href={link.href}
                className={`flex items-center space-x-1 hover:text-blue-500 ${
                  activeLink === link.name ? "text-blue-500 font-semibold" : ""
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.icon && link.icon}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
          <li className="p-2 md:p-0">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Quick Enquiry
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
