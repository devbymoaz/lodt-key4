"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { BiX, BiMenu } from "react-icons/bi";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navigation() {
    const [isScroll, setIsScroll] = useState(false);
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Track Scroll Position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isScroll ? "bg-white shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="bg-secondary p-2 text-center text-white text-sm sm:text-base">
                Free shipping from 50€ | Delivery time 1-3 working days
            </div>

            <div className=" px-6 md:px-16 flex w-full items-center justify-between py-4">
                {/* <Image
  src="/WhatsApp_Image_2025-03-12_at_5.01.22_PM__1_-removebg-preview.png"
  alt="WhatsApp Image"
  layout="intrinsic"
  width={48} 
  height={500}
  className="h-24 w-auto"
/> */}
                <img src="/WhatsApp_Image_2025-03-12_at_5.01.22_PM__1_-removebg-preview.png" alt="" className="h-12 w-auto" />


                <div className="hidden md:flex gap-8">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-xl transition-all duration-300 ${pathname === href
                                ? "text-whtie font-bold border-b-2 pb-1 border-primary"
                                : isScroll
                                    ? "text-black"
                                    : "text-white"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>


                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden flex flex-col gap-4 bg-white shadow-md px-6 py-4"
                    >
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-lg ${pathname === href ? "text-primary font-bold" : "font-semibold"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <FaPhoneAlt />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
