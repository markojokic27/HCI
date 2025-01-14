// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { ImageSwiper } from "@/components/ImageSwiper";

// Assets
import Palleteria from "@/public/images/palleteria.png";
import Wallet1 from "@/public/images/wallet1.png";
import Wallet2 from "@/public/images/wallet2.png";
import Leathers from "@/public/images/leathers.png";

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
  return (
    <div className="mt-16 md:mt-21 bg-orange-200 w-ful py-16">
      <Layout>
        <LayoutRow>
          <LayoutColumn>
            <ImageSwiper
              slides={slidesData.map(({ title, description, image, alt }) => (
                <div key={title} className="md:flex md:items-center min-h-full">
                  <div className="md:w-1/2 md:px-8 text-center  flex flex-col justify-center">
                    <h1 className="text-lg lg:text-xl mb-6 uppercase">
                      {title}
                    </h1>
                    <p className="md:text-md">{description}</p>
                  </div>
                  <div className="rounded-xl min-[450px]:w-2/3 md:w-1/2 px-1 sm:px-0 mx-auto my-6">
                    <Image
                      alt={alt}
                      src={image}
                      className="w-full aspect-square object-cover rounded-3xl"
                      priority={true}
                    />
                  </div>
                </div>
              ))}
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
