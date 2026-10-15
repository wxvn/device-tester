import { useEffect, useRef, useState, } from "react";

const NAMES = ["left", "middle", "right", "back", "forward", "wheel up", "wheel down"];



function useMouse() {
  const [events, setEvents] = useState<string[]>([]);
  const [pressed, setPressed] = useState([false, false, false, false, false, false, false]);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);


  useEffect(() => {
    const add = (text: string) => {
      setEvents((prev) => [...prev, text].slice(-20));
    };

    const onButton = (e: MouseEvent) => {
      if (e.button === 3 || e.button === 4) e.preventDefault();

      setPressed((prev) =>
    prev.map((value, i) => (i === e.button ? e.type === "mousedown" : value))
  );

      add(`${e.type} ${NAMES[e.button] ?? e.button}`);
    };

    const onWheel = (e: WheelEvent) => {
      const index = e.deltaY < 0 ? 5 : 6;

      setPressed((prev) =>
        prev.map((value, i) => (i === 5 || i === 6 ? i === index : value))
      );

      add(NAMES[index]);

      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => {
        setPressed((prev) => prev.map((value, i) => (i === 5 || i === 6 ? false : value)));
      }, 200)
    };

    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    window.addEventListener("mousedown", onButton);
    window.addEventListener("mouseup", onButton);
    window.addEventListener("wheel", onWheel);
    window.addEventListener("contextmenu", onContextMenu);

    return () => {
      clearTimeout(wheelTimer.current);
      window.removeEventListener("mousedown", onButton);
      window.removeEventListener("mouseup", onButton);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  return {events, pressed};
}


export default useMouse;