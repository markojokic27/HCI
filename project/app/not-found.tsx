// External packages
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";

// Assets
import empty from "@/public/images/empty.jpg";

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
};

export default function NotFound() {
  return (
    <>
      <Layout className="md:empty-height pt-32 md:pb-64 md:pt-60">
        <LayoutRow>
          <LayoutColumn mdSpan={6}>
            <h2 className="text-3xl text-black lg:mb-8">404 Not found</h2>

            <div className="mb-8 text-md text-black">
              <p>
                The page you are looking for doesn&apos;t exist or an error
                occurred. Go back, or head over to our home page.
              </p>
            </div>
            <Link href="/" className="text-lg underline underline-offset-4">
              Back to home
            </Link>
          </LayoutColumn>
          <LayoutColumn mdSpan={6}>
            <div className="rounded-3xl">
              <Image
                height={300}
                width={300}
                alt="empty"
                src={empty}
                className="w-full rounded-3xl object-cover transition-transform duration-300 hover:scale-105"
                priority={true}
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
