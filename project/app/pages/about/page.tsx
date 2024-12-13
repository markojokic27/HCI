// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mt-28">
        <LayoutRow>
          <LayoutColumn>
            <h1 className="text-5xl text-center">About</h1>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
