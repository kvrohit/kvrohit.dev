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
    <div class="relative flex flex-col">
      <div
        class="absolute flex h-full w-full items-center justify-center opacity-80 transition-transform"
        style={{
          transform: `scale(${scale()})`,
        }}
      >
        <span class="inline-block rounded-lg bg-black p-2 text-sm text-white">
          Copied!
        </span>
      </div>
      <div
        onclick={copyToClipboard}
        class="h-24 w-24 cursor-pointer"
        style={{ "background-color": bg, color: bg }}
      >
        {bg}
      </div>
      <div
        class="py-2 text-center text-sm uppercase"
        style={{ color: "#c9c7cd", "background-color": "#27272a" }}
      >
        {bg}
      </div>
    </div>
  );
}
