// External packages
import Link from "next/link";

// Componenets
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { twMerge } from "tailwind-merge";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "mt-12 w-full bg-orange-800 py-10 md:mt-20",
        className,
      )}
    >
      <Layout>
        <LayoutRow className="text-center text-white sm:text-left">
          <LayoutColumn
            smSpan={6}
            lgSpan={4}
            className="flex flex-col items-center sm:items-start"
          >
            <Link href="" className="w-fit">
              Privacy policy
            </Link>
            <Link href="" className="w-fit">
              Cookie policy
            </Link>
            <Link href="" className="w-fit">
              Terms od use
            </Link>
          </LayoutColumn>
          <LayoutColumn
            smSpan={6}
            lgSpan={4}
            className="my-4 sm:my-0 sm:text-right lg:text-center"
          >
            <p>Follow us on social media</p>
            <div className="mt-2 flex justify-center gap-4 sm:justify-end lg:justify-center">
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
            className="mt-4 sm:text-center lg:mt-0 lg:text-right"
            lgSpan={4}
          >
            <p>Peleteria Bizaca</p>
            <p>Made in Split, Croatia </p>
            <p>© All rights reserved.</p>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
};
