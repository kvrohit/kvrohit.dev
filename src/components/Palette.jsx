export default function Palette(props) {
  return (
    <div class="divide-y divide-zinc-800 space-y-4">
      <h3 class="uppercase tracking-wider text-sm">{props.title}</h3>
      <div class="pt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
        {props.children}
      </div>
    </div>
  );
}
