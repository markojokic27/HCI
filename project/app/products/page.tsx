// External packages
import getProducts from "@/lib/getProducts";
import Link from "next/link";
import Image from "next/image";

// Components
import { Layout, LayoutColumn, LayoutRow } from "@/components/Layout";

export default function ProductsPage() {
  const products = getProducts();

  const shuffledProducts = products.sort(() => Math.random() - 0.5);
  return (
    <Layout className="mt-28 min-h-screen md:mt-36">
      <LayoutRow>
        <LayoutColumn>
          <h1 className="mb-16 text-2xl md:mb-20 md:text-4xl">Products</h1>
        </LayoutColumn>
        {shuffledProducts.map((product) => (
          <LayoutColumn
            key={product.id}
            span={6}
            smSpan={4}
            xlSpan={3}
            className="mb-6"
          >
            <Link href={`/products/${product.id}`}>
              <div className="rounded-lg p-2 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
                <Image
                  src={`/images/${product.image}`}
                  alt={product.category}
                  width={300}
                  height={300}
                  className="mb-4 w-full rounded-md object-cover"
                />
                <h3 className="text-lg font-semibold">{product.category}</h3>
                <p className="text-sm text-gray-500">{product.price} EUR</p>
              </div>
            </Link>
          </LayoutColumn>
        ))}
      </LayoutRow>
    </Layout>
  );
}
