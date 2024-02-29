import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";

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
    <footer className="border-t-[1px] border-gray-500 pt-10">
      <main className="w-[80%] mx-auto grid grid-cols-12 gap-16">
        {footer.map((item, index) => (
          <div key={index + 1} className="col-span-4 space-y-4">
            <h4 className="hover:text-[#0d6363] cursor-pointer hover:underline uppercase">
              {item.name}
            </h4>
            <ul className="space-y-2">
              {item.subLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-[12px] hover:text-[#0d6363] cursor-pointer hover:underline"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-4 space-y-4">
          <div className="space-y-4">
            <h4 className="uppercase">SIGN UP FOR EMAIL</h4>
            <p className="text-[12px]">
              Send me Brilliant Earth news, updates and offers.
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="text-sm border-[1px] h-10 w-[300px] outline-none px-4 placeholder:text-black placeholder:text-xs"
              name="email"
              id=""
            />
            <div className="w-10 h10 bg-[#183E40] flex justify-center items-center">
              <MdKeyboardArrowRight size={27} color="#fff" />
            </div>
          </div>
          <div className="mt-8 flex gap-6 items-center">
            <div className="w-6 h-6 bg-black hover:bg-[#0d6363] cursor-pointer rounded-md flex justify-center items-center">
              <FaTiktok size={16} className="text-white" />
            </div>
            <div className=" flex justify-center items-center">
              <AiFillYoutube
                size={30}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaInstagram
                size={28}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaFacebookF
                size={20}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaPinterestP
                size={22}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaXTwitter
                size={22}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaLinkedin
                size={25}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </main>
      <ul className="w-[80%] mx-auto flex text-xs mt-12 mb-6">
        <li className="border-r-[1px] border-black pr-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">©2024 Brilliant Earth, LLC</li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">Terms & Conditions</li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">Privacy Policy</li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">Interest-Based Ads</li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">Do Not Share My Personal Information (California Residents)</li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">CA Transparency Act</li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">CPRA</li>
        <li className="pl-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">Site Map</li>
      </ul>
    </footer>
  );
};

export default Footer;
