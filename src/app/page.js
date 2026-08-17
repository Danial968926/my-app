import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Hero1 from "@/components/Hero1";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Specialization from "@/components/Specialization";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <Header />

      {/* <section>
        <Hero1 />
      </section> */}

      <section>
        <Hero />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Solutions />
      </section>

      <section>
        <Specialization />
      </section>
    </main>
  );
}