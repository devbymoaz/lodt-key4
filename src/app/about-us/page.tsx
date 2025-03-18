"use client";
import { motion } from "framer-motion";
import NewsHeroSection from "../components/sections/newsHeroSection";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
    <div className="bg-bgAll">
      <NewsHeroSection 
        imageSrc="/pexels-mark-thomas-2149938474-31044308.jpg" 
        title="About Us" 
        subtitle="Learn more about our journey and values."
      />

      <motion.section 
        className="container mx-auto py-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl text-textAll font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Our Mission & Values
        </motion.h2>

        <motion.p 
          className="text-lg bg-bgAll text-textAll text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          At Lost Key, we are dedicated to providing a reliable and user-friendly solution for lost key recovery. We believe in innovation and trust, ensuring privacy and security while fostering community engagement.
        </motion.p>
      </motion.section>

      <motion.section 
        className="w-full h-screen flex text-textAll"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-1/2 h-full relative">
          <Image 
            src="/pexels-belle-co-99483-783683.jpg" 
            alt="Our Values" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center p-10">
          <motion.div 
            className="max-w-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Values</h2>
            <ul className="text-lg text-textAll list-disc pl-5">
              <li><strong>Privacy & Security:</strong> No personal data is shared during key recovery.</li>
              <li><strong>Innovation:</strong> Our QR code system simplifies lost key retrieval.</li>
              <li><strong>Trust & Community:</strong> Rewarding those who help return lost keys.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="container mx-auto py-16 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl text-textAll md:text-5xl font-bold mb-6">How It Works</h2>
        <p className="text-lg text-textAll max-w-3xl mx-auto mb-8">
          Our platform simplifies lost key recovery with a seamless process.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-bgAll p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl text-textAll font-semibold mb-2">🔑 Register Your Keys</h3>
            <p className="text-textAll">Assign a unique QR code to your keys for easy identification.</p>
          </motion.div>
          <motion.div 
            className="bg-bgAll p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-textAll mb-2">📲 Scan & Notify</h3>
            <p className="text-textAll">Finders scan the QR code to notify the owner.</p>
          </motion.div>
          <motion.div 
            className="bg-bgAll p-6 shadow-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-textAll">🔁 Get Your Keys Back</h3>
            <p className="text-textAll">Retrieve your keys without sharing personal details.</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="container mx-auto py-16 px-6 text-center bg-bgAll"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl text-textAll bg-bgAll font-bold mb-6">Privacy & Security</h2>
        <p className="text-lg bg-bgAll text-textAll max-w-3xl mx-auto">
          We ensure your privacy by using secure QR codes, eliminating the need for personal data exchange.
        </p>
      </motion.section>

    <motion.section 
        className="w-full h-screen flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-1/2 h-full flex items-center justify-center bg-bgAll">
          <motion.div 
            className="max-w-lg text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textAll">Why Choose Us?</h2>
            <p className="text-lg text-textAll">
              Our expertise, commitment to quality, and customer-first approach make us the perfect choice for your needs.
            </p>
          </motion.div>
        </div>
        <div className="w-1/2 h-full relative">
          <Image 
            src="/pexels-anytiffng-2097616 (1).jpg" 
            alt="Section 8" 
            layout="fill" 
            objectFit="cover" 
            priority
          />
        </div>
      </motion.section>
     
      </div>
    </>
  );
}
