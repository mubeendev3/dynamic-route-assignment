import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center h-20 bg-black text-white items-center">
      <ul className="flex gap-5">
        <Link href={"/"}>
          <li>PHONE</li>
        </Link>
        <li>PHONE CASES</li>
        <li>WATCHES</li>
        <li>ACCESSORIES</li>
      </ul>
    </div>
  );
};

export default Header;
