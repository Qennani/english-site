"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  return (
    <section className="bg-[#E6E66A] flex flex-col min-h-screen overflow-hidden">
      {/* ✅ БЕГУЩАЯ СТРОКА */}
      <div className="bg-[#1A2238] text-white overflow-hidden py-2 md:py-3 border-b-2 border-black relative z-30">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-8 md:gap-12 px-4 md:px-6">
              {Array.from({ length: 10 }).map((_, j) => (
                <span
                  key={j}
                  className="uppercase tracking-widest text-xs md:text-sm font-bold whitespace-nowrap"
                >
                  Учебники Хиппоши ✦ Учись с нами ✦ Стань лучше нас ✦
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
      {/* Мобила — flex-col (текст сверху, звезда снизу) */}
      {/* Десктоп — старая раскладка */}
      <div className="flex-1 relative">
        {/* МОБИЛКА: контейнер с обычным потоком */}
        <div className="lg:hidden flex flex-col items-center px-4 py-8 gap-8">
          <InfoBlock />
          <div className="w-full flex justify-center">
            <CloudLogin mobile />
          </div>
        </div>

        {/* ДЕСКТОП: старая раскладка с absolute */}
        <div className="hidden lg:block h-full" style={{ minHeight: "800px" }}>
          <div className="relative z-10 h-full flex items-center px-16 py-12">
            <div className="max-w-xl">
              <InfoBlock />
            </div>
          </div>

          <div
            className="absolute z-[5] pointer-events-none"
            style={{
              width: "1000px",
              height: "1000px",
              top: "50%",
              right: "-80px",
              transform: "translateY(-50%)",
            }}
          >
            <CloudLogin />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

/* ================================================= */
function InfoBlock() {
  return (
    <div className="space-y-5 md:space-y-6 w-full max-w-xl">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-black text-[#E6E66A] flex items-center justify-center font-extrabold text-base md:text-lg border-2 border-black">
          ХП
        </div>
        <span className="font-bold text-lg md:text-xl text-black">
          Учебники Хиппоши
        </span>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border-2 border-black rounded-full text-xs md:text-sm font-bold">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        Образовательная платформа
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.05]">
        Учись <span className="text-[#FF5B4A]">с нами</span>,
        <br />
        стань лучше нас.
      </h1>

      <p className="text-black/80 text-base md:text-lg max-w-md">
        Интерактивные учебники, тренажёры и проверка знаний — всё в одном месте
        для учеников и преподавателей.
      </p>

      <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white border-2 border-black rounded-2xl max-w-md shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#E6E66A] border-2 border-black flex items-center justify-center text-lg md:text-xl shrink-0">
          🛡️
        </div>
        <div>
          <p className="font-bold text-black text-sm md:text-base">
            Безопасно и проверено
          </p>
          <p className="text-xs md:text-sm text-black/70">
            Защита данных и прозрачные результаты обучения.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {[
            { c: "#FF5B4A", l: "А" },
            { c: "#4A9EFF", l: "М" },
            { c: "#FFC94A", l: "К" },
            { c: "#4ACE6A", l: "+" },
          ].map((a, i) => (
            <div
              key={i}
              style={{ backgroundColor: a.c }}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-xs md:text-sm"
            >
              {a.l}
            </div>
          ))}
        </div>
        <span className="font-semibold text-black text-sm md:text-base">
          12 000+ учеников уже с нами
        </span>
      </div>
    </div>
  );
}

/* ================================================= */
function CloudLogin({ mobile = false }: { mobile?: boolean }) {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const calcPupil = (eyeEl: HTMLDivElement | null, mx: number, my: number) => {
      if (!eyeEl) return { x: 0, y: 0 };
      const rect = eyeEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const max = mobile ? 8 : 16;
      return {
        x: (dx / dist) * max || 0,
        y: (dy / dist) * max || 0,
      };
    };

    const move = (e: MouseEvent) => {
      setLeftPupil(calcPupil(leftEyeRef.current, e.clientX, e.clientY));
      setRightPupil(calcPupil(rightEyeRef.current, e.clientX, e.clientY));
    };

    // На мобиле — следим за касанием
    const touch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      setLeftPupil(calcPupil(leftEyeRef.current, t.clientX, t.clientY));
      setRightPupil(calcPupil(rightEyeRef.current, t.clientX, t.clientY));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", touch);

    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3500);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", touch);
      clearInterval(blinkInterval);
    };
  }, [mobile]);

  // Размеры для разных версий
  const size = mobile ? "min(110vw, 850px)" : "100%";
const eyeSize = mobile ? "75px" : "100px";        // глаза тоже больше
const eyeBorder = mobile ? 5 : 6;
const eyeGap = mobile ? "30px" : "40px";
const formWidth = mobile ? "min(70%, 300px)" : "350px";

  return (
    <div
      className="relative pointer-events-auto"
      style={{
        width: size,
        height: size,
        aspectRatio: "1 / 1",
      }}
    >
      <svg
        viewBox="0 0 800 800"
        className="absolute inset-0 w-full h-full drop-shadow-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="
            M 400 30
            L 460 130
            L 570 70
            L 590 200
            L 730 180
            L 680 300
            L 780 380
            L 670 440
            L 720 580
            L 580 560
            L 560 700
            L 450 620
            L 400 770
            L 350 620
            L 240 700
            L 220 560
            L 80 580
            L 130 440
            L 20 380
            L 120 300
            L 70 180
            L 210 200
            L 230 70
            L 340 130
            Z
          "
          fill="white"
          stroke="black"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <circle cx="240" cy="380" r="22" fill="#FFB3B3" opacity="0.5" />
        <circle cx="560" cy="380" r="22" fill="#FFB3B3" opacity="0.5" />
      </svg>

      {/* Глаза */}
      <div
        className="absolute flex"
        style={{
          top: "27%",
          left: "50%",
          transform: "translateX(-50%)",
          gap: eyeGap,
        }}
      >
        {[leftEyeRef, rightEyeRef].map((ref, idx) => {
          const pupil = idx === 0 ? leftPupil : rightPupil;
          return (
            <div
              key={idx}
              ref={ref}
              className="relative bg-white rounded-full"
              style={{
                width: eyeSize,
                height: eyeSize,
                border: `${eyeBorder}px solid black`,
                transform: blink ? "scaleY(0.1)" : "scaleY(1)",
                transition: "transform 0.1s",
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 bg-black rounded-full"
                style={{
                  width: "44%",
                  height: "44%",
                  transform: `translate(calc(-50% + ${pupil.x}px), calc(-50% + ${pupil.y}px))`,
                  transition: "transform 0.08s",
                }}
              />
              <div
                className="absolute bg-white rounded-full"
                style={{
                  width: "14%",
                  height: "14%",
                  top: "22%",
                  right: "26%",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Форма */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "42%",
          width: formWidth,
        }}
      >
        <form className="space-y-2 md:space-y-2.5">
          <div>
            <label className="block text-[10px] md:text-xs font-bold text-black mb-0.5 md:mb-1">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 text-black/60 text-xs md:text-sm">
                ✉
              </span>
              <input
                placeholder="email@mail.com"
                className="w-full pl-8 md:pl-9 pr-2 md:pr-3 py-1.5 md:py-2 rounded-md md:rounded-lg border-2 border-black bg-[#F4F4F4] text-xs md:text-sm focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] md:text-xs font-bold text-black mb-0.5 md:mb-1">
              Пароль
            </label>
            <div className="relative">
              <span className="absolute left-2.5 md:left-3 top-1/2 -translate-y-1/2 text-black/60 text-xs md:text-sm">
                🔒
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-8 md:pl-9 pr-2 md:pr-3 py-1.5 md:py-2 rounded-md md:rounded-lg border-2 border-black bg-[#F4F4F4] text-xs md:text-sm focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] md:text-xs">
            <label className="flex items-center gap-1 md:gap-1.5 cursor-pointer">
              <input type="checkbox" className="accent-black w-3 h-3" />
              <span>Запомнить</span>
            </label>
            <a href="#" className="text-[#FF5B4A] font-bold hover:underline">
              Забыли?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-1.5 md:py-2 rounded-md md:rounded-lg font-bold text-xs md:text-sm hover:bg-[#FF5B4A] transition"
          >
            Войти как ученик
          </button>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-black/20" />
            <span className="text-[9px] md:text-[10px] text-black/50">или</span>
            <div className="flex-1 h-px bg-black/20" />
          </div>

          <button
            type="button"
            className="w-full bg-white text-black py-1.5 md:py-2 rounded-md md:rounded-lg font-bold text-xs md:text-sm border-2 border-black hover:bg-[#E6E66A] transition"
          >
            Войти как админ
          </button>

          <p className="text-center text-[10px] md:text-xs text-black/70">
            Нет аккаунта?{" "}
            <a href="#" className="text-[#FF5B4A] font-bold hover:underline">
              Регистрация
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

/* ================================================= */
function Footer() {
  return (
    <footer className="bg-[#1A2238] text-white border-t-2 border-black relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-8 md:py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-lg bg-[#E6E66A] text-black flex items-center justify-center font-extrabold">
              ХП
            </div>
            <span className="font-bold">Хиппоши</span>
          </div>
          <p className="text-sm text-white/70">
            Образовательная платформа нового поколения.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-[#E6E66A]">Платформа</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">О нас</a></li>
            <li><a href="#" className="hover:text-white">Учебники</a></li>
            <li><a href="#" className="hover:text-white">Тренажёры</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-[#E6E66A]">Поддержка</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">📄 Информация</a></li>
            <li><a href="#" className="hover:text-white">❓ Помощь</a></li>
            <li><a href="#" className="hover:text-white">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3 text-[#E6E66A]">Контакты</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>hello@hipposhi.ru</li>
            <li>+7 (999) 000-00-00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50 px-4">
        © {new Date().getFullYear()} Учебники Хиппоши. Все права защищены.
      </div>
    </footer>
  );
}