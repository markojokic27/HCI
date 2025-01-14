// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";

export default function Page() {
  return (
    <>
      <Layout className="mt-28">
        <LayoutRow>
          <LayoutColumn>
            <h1 className="text-5xl text-center">Models</h1>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
