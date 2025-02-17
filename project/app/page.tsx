// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { ImageSwiper } from "@/components/ImageSwiper";
import { Button } from "@/components/Button";

// Assets
import Palleteria from "@/public/images/palleteria.png";
import Wallet1 from "@/public/images/wallet1.png";
import Wallet2 from "@/public/images/walletsSea.png";
import Wallet3 from "@/public/images/wallet5.png";
import Leathers from "@/public/images/leathers.png";
import { Icon } from "@/components/Icon";

// Lib
import getProducts from "@/lib/getProducts";

export default function Page() {
  const slidesData = [
    {
      title: "Handmade in Croatia",
      description:
        "At Pelletteria Bizaca, we blend tradition, craftsmanship, and timeless style to create exquisite custom leather goods, all made in the heart of Split.",
      image: Palleteria,
      alt: "palleteria",
    },
    {
      title: "Personalized gift",
      description:
        "Whether you're looking for a personalized gift or a statement piece, our bespoke leather goods are made to order, ensuring each creation reflects your individual style and needs.",
      image: Wallet1,
      alt: "wallet",
    },
    {
      title: "Timeless Elegance",
      description:
        "Each piece is a testament to our dedication to quality and attention to detail, designed to accompany you through life's journeys with sophistication and durability.",
      image: Wallet2,
      alt: "wallet",
    },
    {
      title: "Crocodile Leather",
      description:
        "Renowned for its unique texture and durability, each item is crafted from ethically sourced crocodile leather, delivering unparalleled sophistication and a distinctive style that makes a bold statement.",
      image: Leathers,
      alt: "leathers",
    },
  ];

  const products = getProducts();
  const selectedProducts = [
    products[0],
    products[3],
    products[6],
    products[14],
  ];

  return (
    <>
      <div className="mt-16 w-full bg-gradient-to-b from-orange-25 to-yellow-800 py-14 md:mt-21">
        <Layout>
          <ImageSwiper
            slides={slidesData.map(({ title, description, image, alt }) => (
              <LayoutRow
                key={title}
                className="min-h-full md:flex md:items-center"
              >
                <LayoutColumn mdSpan={6}>
                  <div className="flex flex-col justify-center text-center md:px-8">
                    <h1 className="mb-6 text-lg uppercase lg:text-xl">
                      {title}
                    </h1>
                    <p className="md:text-md">{description}</p>
                  </div>
                </LayoutColumn>
                <LayoutColumn mdSpan={6}>
                  <div className="mx-auto my-6 overflow-hidden rounded-3xl px-1 sm:px-0 md:my-0">
                    <Image
                      alt={alt}
                      src={image}
                      className="aspect-square w-full rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
                      priority={true}
                    />
                  </div>
                </LayoutColumn>
              </LayoutRow>
            ))}
          />
        </Layout>
      </div>
      <Layout>
        <LayoutRow className="py-20 md:flex-row-reverse md:py-32 lg:items-center">
          <LayoutColumn mdSpan={6}>
            <div className="mb-14 flex flex-col justify-center text-center md:mb-0">
              <h1 className="mb-6 text-center text-lg uppercase lg:text-xl">
                Design your perfect wallet
              </h1>
              <p className="mb-6 md:text-md">
                Experience the joy of crafting a wallet tailored to your style.
                With our innovative 3D customization tool, you can: select your
                favorite leather type and color, choose the stitching style and
                thread color and add monograms or personal engravings for a
                unique touch.
              </p>
              <Link href={"/models"}>
                <Button
                  className="mx-auto w-fit py-4 text-orange-800"
                  iconLeft={<Icon name="pen" />}
                >
                  Create
                </Button>
              </Link>
            </div>
          </LayoutColumn>
          <LayoutColumn mdSpan={6}>
            <div className="overflow-hidden rounded-3xl">
              <Image
                alt="wallet"
                src={Wallet3}
                className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                priority={true}
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-20">
          <LayoutColumn>
            <h1 className="mb-6 text-lg uppercase lg:text-xl">
              Popular products
            </h1>
          </LayoutColumn>
          {selectedProducts.map((product) => (
            <LayoutColumn key={product.id} span={6} lgSpan={3} className="mb-6">
              <Link href={`/products/${product.id}`}>
                <div className="rounded-3xl p-2 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.category}
                    width={300}
                    height={300}
                    className="w-full rounded-2xl object-cover"
                  />
                  <h3 className="mt-2 text-lg font-semibold">
                    {product.category}
                  </h3>
                  <p className="my-2 text-sm text-gray-500">
                    {product.price} EUR
                  </p>
                </div>
              </Link>
            </LayoutColumn>
          ))}
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn>
            <div className="relative flex justify-center rounded-3xl bg-yellow-800 p-10 text-center text-xl font-semibold italic text-orange-800 drop-shadow-lg">
              <Icon name="quote" className="absolute left-6 top-6 scale-150" />
              <h5>Don&apos;t lose this wallet, you won&apos;t get it back</h5>
              <Icon
                name="quote"
                className="absolute bottom-6 right-6 rotate-180 scale-150"
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
