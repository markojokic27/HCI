import { getProducts, ProductResponse } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
// Components
import { Layout, LayoutColumn, LayoutRow } from "@/components/Layout";
export default async function ProductsPage() {
  let products: ProductResponse | null = null;

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Greška pri dohvaćanju proizvoda:", error);
  }
  if (!products) {
    return <p>Greška pri dohvaćanju proizvoda.</p>;
  }

  console.log(products);

  return (
    <Layout className="mt-28 md:mt-36 min-h-screen">
      <LayoutRow>
        <LayoutColumn>
          <h1 className="text-2xl md:text-4xl mb-16 md:mb-20">Products</h1>
        </LayoutColumn>
        {products.data.map((product) => (
          <LayoutColumn key={product.id} span={6} smSpan={4} mdSpan={3}>
            <Link href={`/products/${product.id}`}>
              <div className="p-2 rounded-lg shadow-lg">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.image[0].url}`}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price} EUR</p>
              </div>
            </Link>
          </LayoutColumn>
        ))}
      </LayoutRow>
    </Layout>
  );
}
