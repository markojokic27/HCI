// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { ImageSwiper } from "@/components/ImageSwiper";
import { Button } from "@/components/Button";

// Assets
import Palleteria from "@/public/images/palleteria.png";
import Wallet1 from "@/public/images/wallet1.png";
import Wallet2 from "@/public/images/wallet2.png";
import Leathers from "@/public/images/leathers.png";
import { Icon } from "@/components/Icon";

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
    <>
      <div className="mt-16 md:mt-21 bg-orange-200 max-h-screen  w-full py-10 2xl:py-32">
        <Layout>
          <LayoutRow>
            <LayoutColumn>
              <ImageSwiper
                slides={slidesData.map(({ title, description, image, alt }) => (
                  <div
                    key={title}
                    className="md:flex md:items-center min-h-full"
                  >
                    <div className="md:w-1/2 md:px-8 text-center flex flex-col justify-center">
                      <h1 className="text-lg lg:text-xl mb-6 uppercase">
                        {title}
                      </h1>
                      <p className="md:text-md">{description}</p>
                    </div>
                    <div className="rounded-xl min-[450px]:w-2/3 md:w-1/2 px-1 sm:px-0 mx-auto my-6 md:my-0">
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
      <Layout>
        <LayoutRow className="py-12 lg:px-28 md:flex-row-reverse items-center">
          <div className="md:px-8  mb-14 md:mb-0  flex flex-col justify-center md:w-1/2 ">
            <h1 className="text-lg lg:text-xl text-center mb-6 uppercase">
              Design your perfect wallet
            </h1>
            <p className="md:text-md">
              Experience the joy of crafting a wallet tailored to your style.
              With our innovative 3D customization tool, you can:
            </p>
            <ul className="list-disc pl-5 mb-4 md:text-md">
              <li>select your favorite leather type and color</li>
              <li>shoose the stitching style and thread color</li>
              <li>add monograms or personal engravings for a unique touch</li>
            </ul>
            <Button
              className="w-fit mx-auto py-4 text-orange-800"
              iconLeft={<Icon name="pen" />}
            >
              Create
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              alt="wallet"
              src={Wallet1}
              className="w-full aspect-square object-cover rounded-3xl"
              priority={true}
            />
          </div>
        </LayoutRow>
      </Layout>
      <div className="h-screen bg-slate-300 flex justify-center text-white">
        
      </div>
    </>
  );
}
