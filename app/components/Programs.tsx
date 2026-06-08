"use client";

import { motion } from "framer-motion";

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative bg-coral paper-texture pt-2 pb-20 md:pb-28 -mt-1"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Карточки сразу — без заголовка */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* КАРТОЧКА 1 — Олимпиада */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            className="group relative bg-dusty-blue rounded-[2.5rem] p-8 md:p-12 overflow-hidden cursor-pointer min-h-[480px] flex flex-col justify-between border-2 border-ink shadow-[8px_8px_0px_#1A1A1A] hover:shadow-[12px_12px_0px_#1A1A1A] transition-shadow duration-300"
          >
            <div
              className="absolute -bottom-32 -right-16 text-[24rem] leading-none text-ink/10 font-bold select-none pointer-events-none"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              O
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-ink text-warm-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
                Olympiad
              </div>

              <p className="text-ink/60 text-sm uppercase tracking-[0.25em] font-bold mb-3">
                Текущая платформа
              </p>

              <h3
                className="text-ink text-6xl md:text-7xl lg:text-8xl leading-[0.85] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Олимпиада
              </h3>

              <p className="text-ink/75 text-lg max-w-md leading-relaxed">
                Учебники, кроссворды, задания и стрики. Прокачивай знания в
                игровой форме каждый день.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-10">
              <button className="group/btn flex items-center gap-3 bg-ink text-warm-white px-7 py-4 rounded-full font-semibold hover:bg-coral transition-all duration-300">
                Перейти
                <span className="w-7 h-7 rounded-full bg-coral text-warm-white flex items-center justify-center group-hover/btn:bg-warm-white group-hover/btn:text-coral group-hover/btn:translate-x-1 transition-all">
                  →
                </span>
              </button>

              <div className="flex flex-col items-end">
                <span className="text-ink/50 text-xs uppercase tracking-widest">
                  Modules
                </span>
                <span
                  className="text-ink text-3xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  120+
                </span>
              </div>
            </div>
          </motion.div>

          {/* КАРТОЧКА 2 — Gatehouse Awards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            whileHover={{ y: -8 }}
            className="group relative bg-ink rounded-[2.5rem] p-8 md:p-12 overflow-hidden cursor-pointer min-h-[480px] flex flex-col justify-between border-2 border-ink shadow-[8px_8px_0px_#FFFDF7] hover:shadow-[12px_12px_0px_#FFFDF7] transition-shadow duration-300"
          >
            <div
              className="absolute -bottom-32 -left-16 text-[24rem] leading-none text-warm-white/8 font-bold select-none pointer-events-none"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              G
            </div>

            <div className="absolute top-0 right-0 w-72 h-72 bg-coral/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-dusty-blue/30 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-warm-white text-ink px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
                Exams
              </div>

              <p className="text-warm-white/60 text-sm uppercase tracking-[0.25em] font-bold mb-3">
                Экзамены
              </p>

              <h3
                className="text-warm-white text-6xl md:text-7xl lg:text-8xl leading-[0.85] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Gatehouse
                <br />
                <span className="italic text-coral">Awards</span>
              </h3>

              <p className="text-warm-white/75 text-lg max-w-md leading-relaxed">
                Пробные тесты, уровни Stage / CEFR и персональные рекомендации
                для уверенной подготовки.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-10">
              <button className="group/btn flex items-center gap-3 bg-coral text-warm-white px-7 py-4 rounded-full font-semibold hover:bg-warm-white hover:text-ink transition-all duration-300">
                Перейти
                <span className="w-7 h-7 rounded-full bg-warm-white text-coral flex items-center justify-center group-hover/btn:bg-ink group-hover/btn:text-warm-white group-hover/btn:translate-x-1 transition-all">
                  →
                </span>
              </button>

              <div className="flex flex-col items-end">
                <span className="text-warm-white/40 text-xs uppercase tracking-widest">
                  Levels
                </span>
                <span
                  className="text-warm-white text-3xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  A1—C2
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Нижняя плашка */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-warm-white/15 backdrop-blur-sm border-2 border-warm-white/30 rounded-full px-8 py-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center"
        >
          <span className="text-warm-white text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-warm-white rounded-full" />
            Профильные данные общие для обоих разделов
          </span>
          <span className="hidden md:block text-warm-white/50">●</span>
          <span className="text-warm-white text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-ink rounded-full" />
            Прогресс и материалы разделяются отдельно
          </span>
        </motion.div>
      </div>
    </section>
  );
}