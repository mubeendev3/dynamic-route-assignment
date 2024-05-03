import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-5/6">
      <p>Sorry, This Page Does Not Exist</p>
      <button className="bg-black px-4 py-2 rounded text-white">
        <Link href="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
