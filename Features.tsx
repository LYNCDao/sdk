const features = [
  {
    title: "AI Trading",
    description:
      "Autonomous agents execute market strategies 24/7."
  },
  {
    title: "Smart Liquidity",
    description:
      "Dynamic capital allocation for optimal efficiency."
  },
  {
    title: "Buyback Engine",
    description:
      "Revenue is used to acquire tokens from the market."
  },
  {
    title: "Deflationary Burns",
    description:
      "Tokens are permanently removed from circulation."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-8">
      <h2 className="text-5xl font-bold text-center">
        Core Features
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mt-16">
        {features.map((item) => (
          <div
            key={item.title}
            className="border border-zinc-800 p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
