"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";

const links = [
  { name: "", href: "/", icon: <FaHouse className="w-5 h-5" /> },
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
    <nav
      className="bg-gray-800 text-white h-screen"
      //   backgroundImage and linear-gradient
      style={{
        backgroundImage:
          "linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              height={60}
              width={200}
              alt="logo"
              src="https://acodez.in/wp-content/themes/acodez-theme/images/logo.png"
            />
          </Link>
        </div>

        {/* Menu Icon */}
        <div className="lg:hidden z-20">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="w-8 h-8 font-extrabold" />
            ) : (
              <AiOutlineMenu className="w-8 h-8 font-extrabold" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`fixed  md:static lg:flex inset-0 flex flex-col md:flex-row items-center justify-center bg-gray-800 md:bg-transparent md:space-x-8 transform ${
            isOpen ? "translate-y-0 md:hidden" : "-translate-y-full"
          } md:translate-y-0 transition-transform duration-300 md:transition-none`}
        >
          {/* page links */}
          {links.map((link) => (
            <li key={link.name} className="p-2 md:p-0">
              <Link
                href={link.href}
                className={`flex items-center font-medium space-x-1 hover:text-blue-500 hover:duration-500 relative before ${
                  activeLink === link.name ? "text-blue-500" : ""
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.icon && link.icon}
                <span>{link.name}</span>
              </Link>
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
