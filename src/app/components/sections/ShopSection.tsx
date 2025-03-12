import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function ShopSection() {
  return (
    <div className="relative w-full h-[75vh]">
      <Image
        src="/pexels-cottonbro-5914922.jpg"
        alt="Background"
        fill
        className="object-cover"
      />

      <div className="absolute inset-y-0 left-0 w-1/2 bg-bgAll/70 flex items-center justify-center p-10 sm:p-6">
        <div className="w-full lg:w-2/3 h-auto flex flex-col items-center gap-3 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-textAll text-center leading-tight">
            Secure your <br /> treasures
          </h1>
          <p className="text-sm md:text-base text-center text-textAll">Free shipping from 20€</p>
          <FaChevronDown size={24} className="text-textAll" />
          <p className="text-sm md:text-base text-center text-textAll">
            Save 10% when you buy 3 products or <br /> more
          </p>
          <FaChevronDown size={24} className="text-textAll" />
          <p className="text-sm md:text-base text-center text-textAll">
            Save 20% when you buy 5 products or <br /> more
          </p>
        </div>
      </div>
    </div>
  );
}
