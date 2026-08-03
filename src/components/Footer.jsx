export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <p className="text-gray-400">
          © 2026 Sanjida Aktar. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-cyan-400 hover:text-cyan-300"
        >
          Back to Top ↑
        </a>

      </div>
    </footer>
  );
}