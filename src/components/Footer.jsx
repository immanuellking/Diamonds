import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const footer = [
  {
    name: "About",
    subLinks: [
      "Our Story",
      "Beyond Conflict Free™",
      "Recycled Gold",
      "Brilliant Earth Reviews",
    ],
  },
  {
    name: "Orders",
    subLinks: [
      "Track Your Order",
      "Free 30 Day Returns",
      "Free Shipping Both Ways",
      "Free Lifetime Warranty",
    ],
  },
  {
    name: "Contact Us",
    subLinks: [
      "Live Chat",
      "Book Appointment",
      "Stores",
      "Email Us",
      "Affiliates",
    ],
  },
  {
    name: "Education",
    subLinks: [
      "Blog",
      "Diamond Buying Guide",
      "Lab Grown Diamonds",
      "Moissanite vs. Diamonds",
      "Ring Size Chart",
      "Careers",
      "Investor Relations",
    ],
  },
  {
    name: "customer Service",
    subLinks: [
      "FAQs",
      "Jewelry Financing",
      "Lifetime Diamond Upgrade",
      "Promo Codes & Offers",
      "Refer a Friend",
      "Accessibility",
      "Accessibility Info",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-gray-500 py-10">
      <main className="w-[80%] mx-auto grid grid-cols-12 gap-16">
        {footer.map((item, index) => (
          <div key={index + 1} className="col-span-4 space-y-4">
            <h4 className="hover:text-[#0d6363] cursor-pointer hover:underline">{item.name}</h4>
            <ul className="space-y-2">
              {item.subLinks.map((link, index) => (
                <li key={index} className="text-[12px] hover:text-[#0d6363] cursor-pointer hover:underline">{link}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-4 space-y-4">
          <div className="space-y-4">
            <h4>SIGN UP FOR EMAIL</h4>
            <p className="text-[12px]">Send me Brilliant Earth news, updates and offers.</p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="text-sm border-[1px] h-10 w-[250px] outline-none px-4 placeholder:text-black placeholder:text-xs"
              name=""
              id=""
            />
            <div className="w-10 h10 bg-[#183E40] flex justify-center items-center">
              <MdKeyboardArrowRight size={27} color="#fff"/>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
