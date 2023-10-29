import GemGames from "./gemgames";

export default function Loading(props: Record<string, string>) {
  const className = props.className ? ` ${props.className}` : "";
  return (
    <div className={`loading${className}`}>
      <GemGames />
    </div>
  );
}
