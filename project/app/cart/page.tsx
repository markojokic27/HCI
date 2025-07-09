"use client";
// External packages
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useCart } from "@/app/cart-provider";
import getProducts from "@/lib/getProducts";

export default function Page() {
  const products = getProducts() ?? [];
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.id);
    return acc + product!.price * item.quantity;
  }, 0);
  console.log("Cart:", cart);
  return (
    <>
      <Layout className="mb-26 mt-26 md:mb-36 md:mt-40">
        <LayoutRow>
          <LayoutColumn span={12} mdSpan={8} xlSpan={9}>
            <h1 className="mb-8 text-xl md:mb-16 md:text-4xl">
              Your shopping cart
            </h1>
            {cart.length > 0 ? (
              cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <CartProductCard
                    key={product?.id}
                    id={product?.id ?? 0}
                    image={
                      <Image
                        src={`/images/${product?.image}`}
                        alt="Product image"
                        width={120}
                        height={120}
                        className="w-full rounded-lg object-cover"
                      />
                    }
                    price={product?.price}
                    category={product?.category}
                    name={product?.name}
                    quantity={item.quantity}
                  />
                );
              })
            ) : (
              <p className="mt-10 text-md">Your cart is empty</p>
            )}
          </LayoutColumn>
          <LayoutColumn span={12} mdSpan={4} xlSpan={3}>
            <div className="mb-4 flex justify-between border-t pt-8 md:mt-2 md:border-t-0 lg:mt-10 lg:pt-0">
              <p className="text-grayscale-400">Subtotal:</p>
              <p>{totalPrice} EUR</p>
            </div>
            <div className="mb-8 flex justify-between border-b pb-8">
              <p className="text-grayscale-400">Shipping:</p>
              <p>Free</p>
            </div>
            <div className="mb-10 flex justify-between">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg font-bold">{totalPrice} EUR</p>
            </div>
            <div className="mb-6 flex items-center leading-none">
              <Input
                label="Discount code"
                className="h-12 md:text-sm lg:text-base"
                inputProps={{ className: "h-12 m-0" }}
              />
              <Button size="sm" className="ml-2 h-12 px-5 text-base">
                Apply
              </Button>
            </div>
            <Link href={cart.length===0 ? "/cart" : "/confirmation"} className="block w-full text-center">
              <Button isDisabled={cart.length === 0}  className="block w-full text-center">
                Buy
              </Button>
            </Link>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}

interface CartProductCardProps {
  id: number;
  image: React.ReactNode;
  name?: string;
  category?: string;
  price?: number;
  quantity?: number;
  originalPrice?: string;
  className?: string;
}

const CartProductCard: React.FC<CartProductCardProps> = ({
  id,
  image,
  className,
  price,
  originalPrice,
  category,
  name,
  quantity,
  ...rest
}) => {
  const { cart, setCart } = useCart();
  const removeItem = (id?: number) => {
    if (id) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    }
  };
  return (
    <div {...rest} className={twMerge("flex gap-6 border-t py-8", className)}>
      <div className="min-w-30">{image}</div>
      <div className="relative w-full">
        <div className="relative mb-6 w-full justify-between sm:flex md:mb-10">
          <div className="mb-4 sm:mb-0">
            <h3 className="sm:mb-1 sm:text-lg">{category}</h3>
            <p className="text-2xs text-grayscale-500 sm:text-base">{name}</p>
            <p className="text-2xs text-grayscale-500 sm:text-base">
              Quantity: {quantity}
            </p>
          </div>
          <div className="sm:text-right">
            <p
              className={twMerge(
                originalPrice && "text-red-700",
                "text-2xs font-bold sm:text-md sm:font-semibold",
              )}
            >
              {price! * quantity!} EUR
            </p>
            <p className="text-2xs text-grayscale-500 line-through sm:text-base">
              {originalPrice}
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center hover:cursor-pointer hover:text-grayscale-500 sm:bottom-8 sm:top-auto sm:h-11 sm:w-11">
          <Icon
            onClick={() => removeItem(id)}
            name="trash"
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        </div>
      </div>
    </div>
  );
};
