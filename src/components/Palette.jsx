export default function Palette(props) {
  return (
    <div class="my-8 inline-block shadow-lg">
      <div class="flex overflow-hidden rounded-md">
        {props.children}
      </div>
    </div>
  );
}
