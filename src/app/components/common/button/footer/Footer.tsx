"use client";
import { navLinks } from "@/app/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="bg-white text-primary py-10 px-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                
                <div className="flex items-center gap-4">
                <img src="/WhatsApp_Image_2025-03-12_at_5.01.22_PM__1_-removebg-preview.png" alt="" className="h-12 w-auto" />
                </div>

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

            <div className="mt-8 text-center text-primary text-sm">
                &copy; {new Date().getFullYear()} All rights reserved | Lost Key
            </div>
        </footer>
    );
}
