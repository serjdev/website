import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="md:py-0 px-10 py-0">
        <Hero />
      </main>
    </Layout>
  );
}
