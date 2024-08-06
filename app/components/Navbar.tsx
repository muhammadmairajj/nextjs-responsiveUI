'use client';
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-[24px] py-[16px] lg:container lg:max-auto lg:px-20">
      {/* Left Part of div */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[54px]">
          {navLinks.map((item: any, index: number) => (
            <p key={index} className="font-medium text-[#36485C]">
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* Right Part of div */}
      <div className="flex gap-x-5">
        <p className="lg:block hidden text-[#36485C] pr-[56px] font-medium">
          Open an Account
        </p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign In
          </span>
        </div>

        <Image
          src={Menu}
          alt="Menu"
          className="lg:hidden cursor-pointer"
          onClick={showDrawer}
        />
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white shadow-lg lg:hidden">
          <div className="flex justify-end p-6">
            <button onClick={onClose} className="text-gray-600">
              &times; {/* or use an image/icon for the close button */}
            </button>
          </div>
          <div className="flex flex-col items-center">
            {navLinks.map((item, index) => (
              <p
                key={index}
                className="py-4 text-lg font-medium text-[#36485C]"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
