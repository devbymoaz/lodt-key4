import Image from "next/image";
import Button from "../components/common/button/Button";

export default function TryIt() {
    return (
        <div className="relative w-full min-h-[50vh] flex flex-col lg:flex-row items-center justify-center">
            <Image
                src="/pexels-victormoragriega-31101938.jpg"
                alt="Background"
                fill
                priority
                className="object-cover -z-10"
            />
            
            <div className="absolute inset-0 bg-bgAll opacity-60 -z-10"></div>

            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-6 lg:p-10 text-center lg:text-left">
                <div className="text-white space-y-4 max-w-lg">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        TRY IT OUT! <br />
                        <span className="font-normal text-lg md:text-xl">
                            Scan the QR code to contact the owner.
                        </span>
                    </h2>
                    <Button className="bg-[#F73F10] px-6 py-3 text-lg">
                        Finder&apos;s test chat
                    </Button>
                </div>
            </div>

            <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-6 lg:p-10">
                <Image
                    src="/Teste_die_Funktion.jpg"
                    alt="Test Function"
                    width={300}
                    height={300}
                    className="rounded-full shadow-lg"
                />
            </div>
        </div>
    );
}
