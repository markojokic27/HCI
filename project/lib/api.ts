export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: {
    url: string;
  }[];
}

export interface ProductResponse {
  data: Product[];
}

export async function getProducts(): Promise<ProductResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`);
  }

  return res.json();
}
