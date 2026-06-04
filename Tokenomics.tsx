export default function Tokenomics() {
  return (
    <section className="py-32">
      <h2 className="text-5xl font-bold text-center">
        Tokenomics
      </h2>

      <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <div className="border p-8 rounded-xl">
          <h3>Total Supply</h3>
          <p>1,000,000,000</p>
        </div>

        <div className="border p-8 rounded-xl">
          <h3>Burn Allocation</h3>
          <p>Protocol Revenue Based</p>
        </div>
      </div>
    </section>
  );
}
