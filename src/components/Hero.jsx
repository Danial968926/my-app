
const cards = [
  {
    title: "Vision",
    description:
      "At OSOZMBS, our vision is to become the leading choice for medical billing services by providing precise, efficient, and reliable solutions. We empower healthcare practices to optimize revenue, reduce administrative burdens, and focus on exceptional patient care through innovation and excellence.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to simplify the medical billing process by delivering accurate, timely, and compliant revenue management solutions. We combine advanced technology, industry expertise, and personalized support to maximize financial outcomes while maintaining integrity, transparency, and professionalism.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-slate-50 py-20">
      {/* Background Blur Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h2 className="mb-6 text-3xl font-bold text-emerald-600">
                {card.title}
              </h2>

              <p className="leading-8 text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}