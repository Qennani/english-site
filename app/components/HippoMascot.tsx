"use client";

import { motion } from "framer-motion";

interface HippoMascotProps {
  size?: number;
  className?: string;
  withBook?: boolean;
  withHeadphones?: boolean;
  waving?: boolean;
}

export default function HippoMascot({
  size = 300,
  className = "",
  withBook = false,
  withHeadphones = false,
  waving = false,
}: HippoMascotProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Тело */}
      <ellipse cx="200" cy="250" rx="130" ry="110" fill="#8FAFC5" />

      {/* Живот */}
      <ellipse cx="200" cy="275" rx="90" ry="75" fill="#B6CCDC" />

      {/* Голова */}
      <ellipse cx="200" cy="160" rx="105" ry="95" fill="#8FAFC5" />

      {/* Мордочка */}
      <ellipse cx="200" cy="190" rx="70" ry="50" fill="#B6CCDC" />

      {/* Ноздри */}
      <ellipse cx="182" cy="185" rx="8" ry="6" fill="#6B8FA8" />
      <ellipse cx="218" cy="185" rx="8" ry="6" fill="#6B8FA8" />

      {/* Левый глаз */}
      <g className="animate-blink" style={{ transformOrigin: "160px 145px" }}>
        <ellipse cx="160" cy="145" rx="22" ry="24" fill="white" />
        <ellipse cx="160" cy="148" rx="12" ry="14" fill="#1A1A1A" />
        <circle cx="155" cy="143" r="5" fill="white" />
      </g>

      {/* Правый глаз */}
      <g className="animate-blink" style={{ transformOrigin: "240px 145px" }}>
        <ellipse cx="240" cy="145" rx="22" ry="24" fill="white" />
        <ellipse cx="240" cy="148" rx="12" ry="14" fill="#1A1A1A" />
        <circle cx="235" cy="143" r="5" fill="white" />
      </g>

      {/* Улыбка */}
      <path
        d="M175 205 Q200 225 225 205"
        stroke="#1A1A1A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Щёчки */}
      <ellipse cx="145" cy="195" rx="15" ry="10" fill="#E8A0A0" opacity="0.5" />
      <ellipse cx="255" cy="195" rx="15" ry="10" fill="#E8A0A0" opacity="0.5" />

      {/* Ушки */}
      <ellipse cx="115" cy="100" rx="30" ry="22" fill="#8FAFC5" />
      <ellipse cx="115" cy="100" rx="18" ry="13" fill="#B6CCDC" />
      <ellipse cx="285" cy="100" rx="30" ry="22" fill="#8FAFC5" />
      <ellipse cx="285" cy="100" rx="18" ry="13" fill="#B6CCDC" />

      {/* Ручки */}
      {waving ? (
        <>
          <motion.g
            animate={{ rotate: [0, -20, 0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            style={{ transformOrigin: "90px 230px" }}
          >
            <ellipse
              cx="80"
              cy="200"
              rx="22"
              ry="35"
              fill="#8FAFC5"
              transform="rotate(30 80 200)"
            />
          </motion.g>
          <ellipse
            cx="320"
            cy="250"
            rx="22"
            ry="30"
            fill="#8FAFC5"
            transform="rotate(-20 320 250)"
          />
        </>
      ) : (
        <>
          <ellipse
            cx="85"
            cy="260"
            rx="22"
            ry="30"
            fill="#8FAFC5"
            transform="rotate(20 85 260)"
          />
          <ellipse
            cx="315"
            cy="260"
            rx="22"
            ry="30"
            fill="#8FAFC5"
            transform="rotate(-20 315 260)"
          />
        </>
      )}

      {/* Ножки */}
      <ellipse cx="155" cy="345" rx="30" ry="18" fill="#7A9DB5" />
      <ellipse cx="245" cy="345" rx="30" ry="18" fill="#7A9DB5" />

      {/* Книга */}
      {withBook && (
        <g transform="translate(280, 210) rotate(-15)">
          <rect x="0" y="0" width="55" height="40" rx="3" fill="#E63B2E" />
          <rect x="5" y="5" width="45" height="30" rx="2" fill="#FFFDF7" />
          <text x="12" y="24" fontSize="9" fill="#1A1A1A" fontWeight="bold">
            ABC
          </text>
          <line
            x1="27.5"
            y1="5"
            x2="27.5"
            y2="35"
            stroke="#E8E0D0"
            strokeWidth="1"
          />
        </g>
      )}

      {/* Наушники */}
      {withHeadphones && (
        <g>
          <path
            d="M110 120 Q110 60 200 55 Q290 60 290 120"
            stroke="#E63B2E"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="92" y="110" width="25" height="35" rx="10" fill="#E63B2E" />
          <rect x="283" y="110" width="25" height="35" rx="10" fill="#E63B2E" />
        </g>
      )}
    </motion.svg>
  );
}