"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const frases = [
    "Eu sei que às vezes eu sou meio lesado 😔",
    "Mas eu juro que eu tento ser melhor por você 💖",
    "Porque você é especial pra mim de um jeito bobo e lindo ✨",
    "E eu odeio te ver triste comigo 😢",
    "Então…",
    "Me perdoa? 🥺💕"
  ];

  const [index, setIndex] = useState(0);
  const [perdoou, setPerdoou] = useState(false);

  function proximo() {
    if (index < frases.length - 1) setIndex(index + 1);
  }

  // ---- SPAWN DE CORAÇÕES ----
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.innerText = "💗";
      heart.className =
        "absolute animate-fall text-pink-500 pointer-events-none select-none";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // ---- TELA FINAL ----
  if (perdoou) {
    return (
      <main className="bg-pink-100 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 animate-bounce">
          💞 Obrigado, Ayumi 💞
        </h1>
        <p className="text-xl max-w-md text-pink-700">
          Prometo tentar ser sempre alguém que te dá paz, carinho e risadas...  
          e nunca motivos pra ficar triste comigo. 🌸✨
        </p>
      </main>
    );
  }

  return (
    <main className="bg-pink-100 flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-4xl font-extrabold text-pink-700 mb-10 drop-shadow-sm">

        🌸 Desculpa, Ayumi 🌸
      </h1>

   <div className="max-w-md bg-white/90 backdrop-blur-md p-14 rounded-[45px] border-[3px] border-pink-300 container-fofo text-center mt-10">




       <p className="text-xl font-medium mb-6 text-pink-800 px-6 leading-relaxed">


          {frases[index]}
        </p>

        {index < frases.length - 1 && (
          <button
            onClick={proximo}
            className="px-6 py-3 rounded-full bg-pink-500 text-white font-bold hover:bg-pink-600 transition"
          >
            💗
          </button>
        )}

        {index === frases.length - 1 && (
          <button
            onClick={() => setPerdoou(true)}
            className="container-fofo1"
          >
            Sim, eu te perdoo 💞
          </button>
        )}
      </div>

      <footer className="mt-10 opacity-60 text-sm text-pink-700">
        Feito com carinho por um bobo apaixonado por você 🫶
      </footer>
    </main>
  );
}
