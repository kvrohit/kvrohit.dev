import { createSignal } from "solid-js";

export default function ColorBox({ bg }) {
  const [scale, setScale] = createSignal(0);

  const copyToClipboard = (evt) => {
    const color = evt.target.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
      setScale(1);
      setTimeout(() => {
        setScale(0);
      }, 500);
    }
  };

  return (
    <div class="flex border-2 rounded" style={{ "border-color": bg }}>
      <div class="h-10 min-w-[40px]" style={{ "background-color": bg, color: bg }}>
      </div>
      <div class="h-10 w-full flex items-center justify-center">
        <div class="font-mono text-[1.2em]">{bg}</div>
      </div>
    </div>
  )
}
