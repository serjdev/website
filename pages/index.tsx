import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="md:px-64 md:py-12 px-10 py-0">
        <Hero />
      </main>
    </Layout>
  );
}
