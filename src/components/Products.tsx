"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  _id: number;
  title: string;
  price: number;
  previousPrice: number;
  description: string;
  category: string;
  image: string;
  isNew: boolean;
  brand: string;
  quantity: number;
}

interface Props {
  products: ProductProps[];
}

export default function Products({ products }: Props) {
  console.log(products);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {products.map((item) => (
        <div
          key={item._id}
          className="p-4 w-64 border m-5 rounded hover:border-black duration-300"
        >
          <Image
            src={item.image}
            alt="Product Image"
            width={700}
            height={800}
            className="h-72 w-72 object-cover"
          />
          <div className="text-gray-800">
            <p>{item.title.toUpperCase()}</p>
            <p className="font-bold text-black">${item.price}</p>
            <div className="flex justify-between">
              <p>Add to cart</p>
              <Link
                href={{ pathname: "/singleproduct", query: { _id: item._id } }}
                className="text-black text-xs font-bold "
              >
                MORE INFO
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
