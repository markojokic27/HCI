// External packages
import Link from "next/link";

// Componenets
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Icon } from "@/components/Icon";

export const Footer = () => {
  return (
    <div className="w-full mt-12 py-10 md:mt-20 bg-orange-800">
      <Layout>
        <LayoutRow className="text-white text-center sm:text-left">
          <LayoutColumn
            smSpan={6}
            lgSpan={4}
            className="flex flex-col items-center sm:items-start"
          >
            <Link href="/privacy-policy" className="w-fit">
              Privacy policy
            </Link>
            <Link href="/cookie-policy" className="w-fit">
              Cookie policy
            </Link>
            <Link href="/terms-of-use" className="w-fit">
              Terms od use
            </Link>
          </LayoutColumn>
          <LayoutColumn
            smSpan={6}
            lgSpan={4}
            className="sm:text-right my-4 sm:my-0 lg:text-center"
          >
            <p>Follow us on social media</p>
            <div className="flex gap-4 justify-center sm:justify-end lg:justify-center mt-2">
              <Link
                href={"https://www.instagram.com/pelletteriabizaca/"}
                target="_blank"
              >
                <Icon name="instagram" />
              </Link>
              <Link
                href={"https://www.instagram.com/pelletteriabizaca/"}
                target="_blank"
              >
                <Icon name="facebook" />
              </Link>
              <Link
                href={"https://www.instagram.com/pelletteriabizaca/"}
                target="_blank"
              >
                <Icon name="youtube" />
              </Link>
            </div>
          </LayoutColumn>
          <LayoutColumn
            className="mt-4 sm:text-center lg:text-right lg:mt-0"
            lgSpan={4}
          >
            <p>Peleteria Bizaca</p>
            <p>Handcrafted Leather Goods | Made in Split, Croatia </p>
            <p>© 2025 Pelleteria Bizaca. All rights reserved.</p>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
};
