import React, { useState } from "react";
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
import { TbMessageCircle2 } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaPlus, FaMinus } from "react-icons/fa6";

const footerMobile = [
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
    name: "Orders",
    subLinks: [
      "Track Your Order",
      "Free 30 Day Returns",
      "Free Shipping Both Ways",
      "Free Lifetime Warranty",
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
  {
    name: "VISIT OUR SHOWROOMS",
    subLinks: [
"Virtual Appointment",
"Atlanta - West Midtown",
"Austin - Domain Northside",
"Baltimore - Harbor East",
"Bethesda",
"Boston - Newbury Street",
"Brooklyn - Williamsburg",
"Charlotte - South End",
"Chicago - Gold Coast",
"Chicago - Fulton Market",
"Cleveland - Orange Village",
"Columbus - Easton Town Center",
"Dallas - West Village",
"Denver - Cherry Creek",
"Detroit - Birmingham",
"Fairfax - Mosaic District",
"Garden City - Roosevelt Field Mall",
"Houston - Montrose Collective",
"King of Prussia",
"Los Angeles - West Hollywood",
"Miami - Coconut Grove",
"Minneapolis - Edina",
"Nashville - The Gulch",
"New York - Flatiron",
"Palo Alto - Stanford Shopping Center",
"Pasadena",
"Philadelphia - Rittenhouse Square",
"Portland - Nob Hill",
"Sacramento - Westfield Galleria at Roseville",
"San Diego - University Town Center (UTC)",
"San Francisco - Union Square",
"Santa Monica",
"Scottsdale",
"Seattle - University Village",
"St. Louis - Central West End",
"Tampa",
"Walnut Creek - Broadway Plaza",
"Washington D.C. - Georgetown",
]
  }
];
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
  const [expandedPanels, setExpandedPanels] = useState({});

  const toggleHeight = (index) => {
    setExpandedPanels((prev) => ({
    //   ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <footer className="border-t-[1px] border-gray-300 pt-5 sm:pt-10">
      <main className="w-[80%] mx-auto hidden sm:grid grid-cols-12 gap-16">
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
              className="text-sm border-[1px] h-10 w-[150px] lg:w-[300px] outline-none px-2 lg:px-4 placeholder:text-black placeholder:text-xs"
              name="email"
              id=""
            />
            <div className="w-10 h10 bg-[#183E40] flex justify-center items-center">
              <MdKeyboardArrowRight size={27} color="#fff" />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 items-center">
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
      <div className="block sm:hidden w-full space-y-4 mb-8">
        <h1 className="text-center text-xl text-gray-600">Contact</h1>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col justify-center items-center gap-2">
            <TbMessageCircle2 size={28} className="text-gray-500" />
            <p>chat</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <BsTelephone size={28} className="text-gray-500" />
            <p>call</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <RxEnvelopeClosed size={28} className="text-gray-500" />
            <p>chat</p>
          </div>
        </div>
      </div>
      <div className="block sm:hidden">
        {footerMobile.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden border-y-[1px] px-4 ${
              expandedPanels[index] ? "h-full transition-all duration-500 ease-linear" : "h-12"
            }`}
          >
            <div
              className="group  py-3 flex justify-between"
              onClick={() => toggleHeight(index)}
            >
              <h4 className="uppercase group-hover:text-[#0d6363] hover:underline">{item.name}</h4>
              {expandedPanels[index] ? <FaMinus /> : <FaPlus />}
            </div>
            <ul className="text-sm space-y-4 pb-3 px-2">
              {item.subLinks.map((link, subIndex) => (
                <li key={subIndex} className="hover:text-[#0d6363] cursor-pointer hover:underline">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="block sm:hidden w-[80%] mx-auto mt-4">
            <h4 className="capitalize">Sign Up For Email</h4>
          <div className="flex mt-4 mb-10">
            <input
              type="email"
              placeholder="Your Email Address"
              className="text-sm border-[1px] h-10 w-[250px] outline-none px-2 placeholder:text-black placeholder:text-sm"
              name="email"
              id=""
            />
            <div className="w-10 h10 bg-[rgb(24,62,64)] flex justify-center items-center">
              <MdKeyboardArrowRight size={27} color="#fff" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-6 h-6 bg-black hover:bg-[#0d6363] cursor-pointer rounded-md flex justify-center items-center">
              <FaTiktok size={19} className="text-white" />
            </div>
            <div className=" flex justify-center items-center">
              <AiFillYoutube
                size={33}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaInstagram
                size={31}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaFacebookF
                size={23}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaPinterestP
                size={25}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaXTwitter
                size={25}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
            <div className=" flex justify-center items-center">
              <FaLinkedin
                size={28}
                className="hover:text-[#0d6363] cursor-pointer"
              />
            </div>
          </div>
        </div>
      <ul className="w-[90%] sm:w-[80%] mx-auto flex flex-wrap justify-center gap-1 text-[10px] sm:text-xs mt-8 sm:mt-12 mb-6">
        <li className="hidden sm:block border-r-[1px] border-black pr-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          ©2024 Brilliant Earth, LLC
        </li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          Terms & Conditions
        </li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          Privacy Policy
        </li>
        <li className="border-r-0 sm:border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          Interest-Based Ads <br className="sm:hidden" />
        </li>
        <li className="border-r-0 sm:border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          Do Not Share My Personal Information (California Residents) <br className="sm:hidden" />
        </li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          CA Transparency Act
        </li>
        <li className="border-r-[1px] border-black px-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          CPRA
        </li>
        <li className="pl-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          Site Map
        </li>
        <li className="block sm:hidden border-r-[0px] border-black pr-3 text-center hover:text-[#0d6363] cursor-pointer hover:underline">
          ©2024 Brilliant Earth, LLC
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
