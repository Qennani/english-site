"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  return (
    <section className="bg-[#E6E66A] flex flex-col min-h-screen overflow-hidden">
      {/* ✅ БЕГУЩАЯ СТРОКА */}
      <div className="bg-[#1A2238] text-white overflow-hidden py-3 border-b-2 border-black relative z-30">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-12 px-6">
              {Array.from({ length: 10 }).map((_, j) => (
                <span
                  key={j}
                  className="uppercase tracking-widest text-sm font-bold whitespace-nowrap"
                >
                  Учебники Хиппоши ✦ Учись с нами ✦ Стань лучше нас ✦
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== ОСНОВНОЙ КОНТЕНТ — фикс. высота, overflow-hidden ===== */}
      <div
        className="flex-1 relative overflow-hidden"
        style={{ minHeight: "800px" }}
      >
        {/* ЛЕВЫЙ ТЕКСТ */}
        <div className="relative z-10 h-full flex items-center px-6 lg:px-16 py-12">
          <div className="max-w-xl">
            <InfoBlock />
          </div>
        </div>

        {/* 🌟 ЗВЕЗДА — 1100×1100 */}
        <div
          className="absolute z-[5] pointer-events-none"
          style={{
            width: "1000px",
            height: "1000px",
            top: "55%",
            right: "-20px",
            transform: "translateY(-50%)",
          }}
        >
          <CloudLogin />
        </div>
      </div>

      <Footer />
    </section>
  );
}

/* ================================================= */
function InfoBlock() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-black text-[#E6E66A] flex items-center justify-center font-extrabold text-lg border-2 border-black">
          ХП
        </div>
        <span className="font-bold text-xl text-black">Учебники Хиппоши</span>
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black rounded-full text-sm font-bold">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        Образовательная платформа
      </div>

      <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-[1.05]">
        Учись <span className="text-[#FF5B4A]">с нами</span>,<br />
        стань лучше нас.
      </h1>

      <p className="text-black/80 text-lg max-w-md">
        Интерактивные учебники, тренажёры и проверка знаний — всё в одном месте
        для учеников и преподавателей.
      </p>

      <div className="flex items-center gap-4 p-4 bg-white border-2 border-black rounded-2xl max-w-md shadow-[6px_6px_0_0_#000]">
        <div className="w-12 h-12 rounded-xl bg-[#E6E66A] border-2 border-black flex items-center justify-center text-xl">
          🛡️
        </div>
        <div>
          <p className="font-bold text-black">Безопасно и проверено</p>
          <p className="text-sm text-black/70">
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
              className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-white font-bold text-sm"
            >
              {a.l}
            </div>
          ))}
        </div>
        <span className="font-semibold text-black">
          12 000+ учеников уже с нами
        </span>
      </div>
    </div>
  );
}

/* ================================================= */
function CloudLogin() {
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
      const max = 16;
      return {
        x: (dx / dist) * max || 0,
        y: (dy / dist) * max || 0,
      };
    };

    const move = (e: MouseEvent) => {
      setLeftPupil(calcPupil(leftEyeRef.current, e.clientX, e.clientY));
      setRightPupil(calcPupil(rightEyeRef.current, e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", move);
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 150);
    }, 3500);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-full pointer-events-auto">
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
          gap: "40px",
        }}
      >
        {[leftEyeRef, rightEyeRef].map((ref, idx) => {
          const pupil = idx === 0 ? leftPupil : rightPupil;
          return (
            <div
              key={idx}
              ref={ref}
              className="relative bg-white border-[6px] border-black rounded-full"
              style={{
                width: "100px",
                height: "100px",
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
          width: "350px",
        }}
      >
        <form className="space-y-2.5">
          <div>
            <label className="block text-xs font-bold text-black mb-1">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60 text-sm">
                ✉
              </span>
              <input
                placeholder="email@mail.com"
                className="w-full pl-9 pr-3 py-2 rounded-lg border-2 border-black bg-[#F4F4F4] text-sm focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-black mb-1">
              Пароль
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60 text-sm">
                🔒
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2 rounded-lg border-2 border-black bg-[#F4F4F4] text-sm focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" className="accent-black" />
              <span>Запомнить</span>
            </label>
            <a href="#" className="text-[#FF5B4A] font-bold hover:underline">
              Забыли?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-bold text-sm hover:bg-[#FF5B4A] transition"
          >
            Войти как ученик
          </button>

          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-black/20" />
            <span className="text-[10px] text-black/50">или</span>
            <div className="flex-1 h-px bg-black/20" />
          </div>

          <button
            type="button"
            className="w-full bg-white text-black py-2 rounded-lg font-bold text-sm border-2 border-black hover:bg-[#E6E66A] transition"
          >
            Войти как админ
          </button>

          <p className="text-center text-xs text-black/70">
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
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 grid md:grid-cols-4 gap-8">
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

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Учебники Хиппоши. Все права защищены.
      </div>
    </footer>
  );
}