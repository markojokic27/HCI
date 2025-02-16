import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Counter } from "@/components/Counter";
import { Button } from "@/components/Button";
import Image from "next/image";

import getProducts from "@/lib/getProducts";

export default function ProductPage({ params }: { params: { id: string } }) {
  const products = getProducts();
  const product = products.find((product) => product.id === Number(params.id));

  return (
    <Layout className="mt-32 min-h-screen">
      <LayoutRow>
        <LayoutColumn mdSpan={6}>
          <div className="h-full w-full overflow-hidden rounded-3xl">
            <Image
              src={`/images/${product?.image}`}
              alt={product?.category || ""}
              width={300}
              height={300}
              className="w-full  aspect-square rounded-3xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </LayoutColumn>
        <LayoutColumn
          mdSpan={6}
          className="md:flex md:flex-col md:justify-between"
        >
          <div>
            <h3 className="text-lg md:text-xl my-4 lg:my-10">
              {product?.name}
            </h3>
            <p className="text-orange-800">Description</p>
            <p className="mb-4 lg:text-md">{product?.description}</p>
            <p className="text-orange-800 hidden lg:block">Category</p>
            <p className="mb-4 lg:text-md hidden lg:block">
              {product?.category}
            </p>
            <p className="text-orange-800">Price</p>
            <p className="mb-4 lg:text-md">{product?.price} EUR</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Counter />
            <Button className="w-full">Add to cart</Button>
          </div>
        </LayoutColumn>
      </LayoutRow>
    </Layout>
  );
}
