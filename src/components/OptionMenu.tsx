export default function OptionMenu({
  text,
  navegateTo,
  color,
}: {
  text: string;
  navegateTo: string;
  color: string;
}) {
  return (
    <div className="max-w-96 w-full">
      <a href={`${navegateTo}`}>
        <div
          className={`${color} h-14 flex items-center justify-center rounded-lg mx-6`}
        >
          <h2>{text}</h2>
        </div>
      </a>
    </div>
  );
}
