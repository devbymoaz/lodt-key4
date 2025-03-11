import { FaRegSmile } from "react-icons/fa";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

export default function WhyLostKey() {
  const data = [
    { icon: <MdSecurity size={60} />, title: "Anonymous", description: "You can use the OLAF app without providing any personal data!" },
    { icon: <HiOutlineChatBubbleBottomCenterText size={60} />, title: "Fast", description: "The finder can contact you immediately. No police or lost property office necessary." },
    { icon: <TfiWorld size={60} />, title: "Worldwide", description: "Whether in Germany or while traveling, the OLAF app works everywhere!" },
    { icon: <FaRegSmile size={60} />, title: "Social", description: "With every sale, a portion of the revenue goes to a social project." },
  ];

  return (
    <section className="w-full mx-auto px-12 max-w-2/3 py-12 text-center bg-bgAll text-textAll">

      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold">Why the Lost Key app?</h2>
        <p className="text-lg mt-4  first-line:">
          In the OLAF app, you can activate individual tags or stickers with unique QR codes and attach them to your valuables.
        </p>
        <p className="text-lg mt-4 ">
          If you lose something, the finder can scan the code and contact you via our app. This allows for a quick and easy return 
          without disclosing personal data. Our system works without a subscription model, can be used worldwide, and does not require batteries. 
          This saves you costs and hassle in the event of a loss, allowing you to always keep an eye on your items.
        </p>
      </div>

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {data.map((val, ind) => (
          <div key={ind} className="flex flex-col items-center space-y-3 text-center p-6 rounded-lg ">
            <div className="">{val.icon}</div>
            <p className="font-extrabold text-2xl">{val.title}</p>
            <p className="text-lg">{val.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
