"use client";
import { navLinks } from "@/app/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-gradient-to-r from-[#073B3A] to-[#0A5C5B] text-white py-10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                
                {/* Left Section - Logo */}
                <div className="flex items-center gap-4">
                    {/* <Image src="/logo.png" alt="Logo" width={100} height={100} className="rounded-lg" /> */}
                    <span className="text-2xl font-bold">Lost Key</span>
                </div>

                {/* Center Section - Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`transition duration-300 ${
                                pathname === href ? "text-yellow-400" : "hover:text-yellow-300"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Right Section - Social Icons */}
                <div className="flex gap-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} className="hover:text-gray-300 transition duration-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} className="hover:text-gray-300 transition duration-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} className="hover:text-gray-300 transition duration-300" />
                    </a>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} All rights reserved | Lost Key
            </div>
        </footer>
    );
}
