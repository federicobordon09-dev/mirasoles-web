type Props = {
  fill: string;
  bg: string;
  flip?: boolean;
  className?: string;
};

export default function SectionDivider({ fill, bg, flip = false, className }: Props) {
  return (
    <div
      className={`relative w-full leading-none pointer-events-none -mt-px ${className ?? ""}`}
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`block w-full h-[50px] md:h-[80px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,80 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
