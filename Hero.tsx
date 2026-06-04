export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-7xl font-bold">
          USELYNC
        </h1>

        <p className="mt-6 text-xl max-w-2xl mx-auto text-gray-400">
          The Fully Autonomous Deflationary Engine
        </p>

        <p className="mt-4 max-w-3xl mx-auto">
          AI-powered trading infrastructure that generates value,
          executes strategies, and systematically burns supply.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="https://uselync.xyz"
            className="px-6 py-3 bg-white text-black rounded-xl"
          >
            Launch App
          </a>

          <a
            href="https://x.com/LYNCDao"
            className="px-6 py-3 border border-white rounded-xl"
          >
            Follow X
          </a>
        </div>
      </div>
    </section>
  );
}
