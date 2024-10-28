import React from "react";
import logo from "@/app/Chorki_Logo.png";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="h-[48px] w-[85px] flex items-center">
      {<Image priority={true} src={logo} alt="site-logo" />}
    </div>
  );
};

export default Logo;
