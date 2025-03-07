'use client'
import { useEffect, useState } from "react";

/**
 * Calculates the hat counter values based on the given number of loops.
 *
 * @param {number} silmukat - The number of loops.
 * @param {string} [keyPrefix='loop'] - The prefix for the keys in the returned object.
 * @returns {Object.<string, number[]> | void} - An object with keys prefixed by `keyPrefix` and values as arrays of numbers, or void if loops is less than 16.
 */
function hatCounter(silmukat: number, keyPrefix = 'loop'): { [key: string]: number[] } | void {
  if (silmukat < 16) return;
  const vahennys = new Array;
  const silmukkaVali = silmukat / 8;

  for (let i = 0; i < 8; i++) {
    vahennys[i] =
      (i % 2 === 0)
        ? Math.floor(silmukkaVali)
        : Math.ceil(silmukkaVali);
  }
  const currentKey = `${keyPrefix}-${silmukat}`;
  return { [currentKey]: vahennys, ...hatCounter(silmukat - 8, keyPrefix) };

}

/**
 * Renders a JSX-element of hat counter values based on the given number of loops.
 *
 * @param {number} silmukat - The number of loops.
 * @returns {JSX.Element} - A JSX-element of hat counter values.
 */
export const HatRows: React.FC<{ silmukat: number }> = ({ silmukat }) => {
  const [currentLoops, setCurrentLoops] = useState<{ loop: string, index: number }>();
  const [loopsDone, setLoopsDone] = useState<{ loop: string, index: number }[]>([]);

  const result = hatCounter(silmukat) as { [key: string]: number[] };

  const handleClick = (loop: string, i: number) => {
    const clickedValue = { loop, index: i };
    setCurrentLoops(clickedValue);
    const isLoopInarray = loopsDone.some(item => item.loop === loop && item.index === i);
    if (isLoopInarray) {
      setLoopsDone(loopsDone.filter(item => item.loop !== loop || item.index !== i));
      return;
    }
    setLoopsDone([...loopsDone, clickedValue]);
  }

  const isActive = (loop: string, index: number) =>
    currentLoops !== undefined
      && currentLoops.loop === loop
      && currentLoops.index === index
      ? 'active'
      : ''

  const isDone = (loop: string, index: number) =>
    loopsDone.some(item => item.loop === loop && item.index === index)
      ? 'isDone'
      : ''

  return (
    Object.keys(result).map((loop, index) => {
      return (
        <div key={loop}>
          <p className="mb-2">{index + 1}. vähennyskierros, {loop.slice(5)} silmukkaa:</p >
          <div className="vahennys font-[family-name:var(--font-sometype-mono)] ml-3">
            {result[loop].map((silmukat, index) => (
              <span key={`${loop}-${index}`}>
                <span
                  className={`silmukka ${isActive(loop, index)} ${isDone(loop, index)} p-3`}
                  onClick={() => handleClick(loop, index)}
                >{silmukat}</span >
              </span>))}
          </div>
        </div >)
    })
  )
}