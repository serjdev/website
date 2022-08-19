import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout/Layout";
import { Meta } from "seo/Meta/Meta";

export default function Home() {
  return (
    <>
      <Meta
        title="Sergiu Grisca blog"
        description="Sergiu Grisca personal website and blog"
      />
      <Layout>
        <main className="md:py-0 px-10 py-0">
          <Hero />
        </main>
      </Layout>
    </>
  );
}
