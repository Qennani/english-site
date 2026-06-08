export default function Footer() {
  return (
    <footer className="bg-ink text-warm-white/70 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">☁️</span>
              <span
                className="text-xl text-warm-white font-semibold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Cloudy
              </span>
            </div>
            <p className="text-sm max-w-xs">
              Образовательная платформа для учеников и преподавателей.
            </p>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span>📧 hello@cloudy.school</span>
            <span>📱 +7 (999) 123-45-67</span>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 bg-warm-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors text-xs font-bold"
            >
              TG
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-warm-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors text-xs font-bold"
            >
              VK
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-warm-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors text-xs font-bold"
            >
              YT
            </a>
          </div>
        </div>

        <div className="border-t border-warm-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs">© 2025 Cloudy. Все права защищены.</p>
          <p
            className="text-base text-warm-white/40"
            style={{ fontFamily: "var(--font-hand)" }}
          >
          </p>
        </div>
      </div>
    </footer>
  );
}