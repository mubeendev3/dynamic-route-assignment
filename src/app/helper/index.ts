const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");

  if (!res.ok) {
    throw new Error("Failed To Fetch Data");
  }

  return res.json();
};

export const getSingleProduct = async (_id: number) => {
  const products = await getData();
  const singleProduct = await products.find(
    (product: any) => product._id === _id
  );
  return singleProduct;
};
