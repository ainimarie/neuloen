"use client"
import Image from "next/image";
import { HatRows } from "./components/HatCounter";
import { useState } from "react";
import pipo from "./pipo.png"

export default function Home() {
  const [loops, setLoops] = useState<number>(108);

  function handleSubmit(formData: FormData) {
    const loops = parseInt(formData.get('loops') as string);
    if (typeof loops === 'number' && loops >= 16) {
      setLoops(Number(formData.get('loops')));
    }
  }

  return (
    <div className="my-2 grid grid-cols-1 grid-rows-[20px_20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src={pipo} alt="Neuloen logo" width={96} height={96} />
      <div className="row-start-2"><h1 className="text-4xl font-bold font-[family-name:var(--font-playwrite-ca)]">Pipolaskuri</h1>
        <p className="ml-12">eli 8-tahoinen sädekavennus</p></div>
      <main className="flex flex-col gap-8 row-start-3 items-center sm:items-start">
        <div>
          Anna silmukoiden lukumäärä (16 tai enemmän):
          <form action={handleSubmit} className="flex items-center">
            <input type="number" name="loops" className="p-2 border border-gray-300 rounded-md" />
            <button type="submit" className="p-2 border border-gray-300 rounded-md ml-2">Laske</button>
          </form>
        </div>
        <HatRows silmukat={loops} />
      </main>
    </div>
  );
}
