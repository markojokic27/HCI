import { getProducts, Product } from "@/lib/api";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Counter } from "@/components/Counter";
import { Button } from "@/components/Button";
import Image from "next/image";

// Define types for description
interface DescriptionChild {
  text: string;
}

interface DescriptionItem {
  type: string;
  children: DescriptionChild[];
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  let product: Product | null = null;

  try {
    const products = await getProducts();
    product = products.data.find((p) => p.id === Number(params.id)) || null;
  } catch (error) {
    console.error("Greška pri dohvaćanju proizvoda:", error);
  }

  if (!product) {
    return <p>Proizvod nije pronađen.</p>;
  }

  console.log(product);

  // Adjusted function to handle both string and array of DescriptionItem[]
  const extractTextFromDescription = (description: string | DescriptionItem[]): string => {
    if (Array.isArray(description)) {
      return description
        .map((item) => item.children?.map((child) => child.text).join(""))
        .join(" ");
    }
    // If it's just a string, return it directly
    return description;
  };

  // Using the extract function
  const descriptionText = extractTextFromDescription(product.description);

  const imageUrl = product.image ? product.image[0].url : null;
  console.log(imageUrl);

  return (
    <Layout className="mt-28 min-h-screen">
      <LayoutRow>
        <LayoutColumn mdSpan={6}>
          {imageUrl && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${imageUrl}`}
              alt={product.name}
              className="rounded-xl"
            />
          )}
        </LayoutColumn>
        <LayoutColumn
          mdSpan={6}
          className="mt-8 md:mt-0 md:flex md:flex-col md:justify-between"
        >
          <div>
            <h1 className="text-2xl">{product.name}</h1>
            <p className="text-xl">{descriptionText}</p>
            <p className="mt-4 text-xl">{product.price} €</p>
          </div>
          <div>
            <Counter className="mb-4" />
            <Button className="w-full">Add to cart</Button>
          </div>
        </LayoutColumn>
      </LayoutRow>
    </Layout>
  );
}
