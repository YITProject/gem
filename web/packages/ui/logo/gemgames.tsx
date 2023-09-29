

interface GemGamesProps {
  height?: number | string;
  weight?: number | string;
  color?: "light" | "dark" | "auto";
  fill?: "string";
  style?: React.CSSProperties;
}
export default function GemGames(props?: GemGamesProps) {
  let height: number | string | undefined = 48;
  let weight: number | string | undefined = 48;
  if (props?.height || props?.weight) {
    weight = props.weight;
    height = props.height;
  }
  const color = props?.color ? ` ${props.color}` : "";
  const fill = props?.fill;

  return <svg className={`gemgames-logo${color}`} height={height} style={props?.style} viewBox="0 0 741.5 752.83" width={weight} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        {`
        .gemgames-logo.light path,:root.dark .gemgames-logo.auto path {
          fill: #ffffff;
        }
        .gemgames-logo.dark path,:root.light .gemgames-logo.auto path {
          fill: #000000;
        }
        `}
      </style>
      <linearGradient gradientUnits="userSpaceOnUse" id="Upper" x1="0" x2="691.67" y1="144.19" y2="144.19">
        <stop offset="0" stopColor="#cc1e76" />
        <stop offset="1" stopColor="#f2743d" />
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="Downer" x1="163.61" x2="664.04" y1="715.76" y2="215.34">
        <stop offset="0" stopColor="#2e4d98" />
        <stop offset=".19" stopColor="#295498" />
        <stop offset=".47" stopColor="#1e6a98" />
        <stop offset=".82" stopColor="#0b8c98" />
        <stop offset="1" stopColor="#00a299" />
      </linearGradient>
    </defs>
    <g >
      <path d="M0,288.37C0,255.55,67.91,11.38,343.66,.4c284.9-11.34,364.09,220.09,364.09,220.09,0,0-180.6,.62-215.32,.62-8.43-8.93-35.38-54.07-136.51-54.07-117.45,0-179.77,121.33-179.77,121.33H0Z" fill={fill || "url(#Upper)"} />
      <path d="M366.69,284.83s317.06-.51,366.85,0c19.91,58.21,33.8,468-366.85,468C50.3,752.83,0,469.43,0,469.43H178.21s65.87,120.2,188.47,118.72,186.34-101.79,186.34-126.3c-22.13-.26-186.34-.34-186.34-.34v-176.68Z" fill={fill || "url(#Downer)"} />
    </g>
  </svg>;
}