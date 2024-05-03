import React from "react";
import { getSingleProduct } from "../helper";
import Image from "next/image";

const SingleProductPage = async ({ searchParams }: any) => {
  const _idString = searchParams._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id);

  return (
    <div className="flex flex-col p-10 md:flex-row md:items-center h-5/6 mb-6">
      <Image
        src={product.image}
        alt="Product Image"
        width={500}
        height={500}
      ></Image>
      <div>
        <p className="text-2xl font-bold">{product.title.toUpperCase()}</p>
        <p>{product.description}</p>
        <p className="font-bold">${product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
};

export default SingleProductPage;
