type Props = {
  className?: string;
  color?: string;
};

export default function SunMark({ className, color = "currentColor" }: Props) {
  const rays = Array.from({ length: 16 });
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={color}
    >
      <circle cx="100" cy="100" r="42" strokeWidth="3" />
      <circle cx="100" cy="100" r="30" strokeWidth="1.5" opacity="0.6" />
      {rays.map((_, i) => {
        const angle = (i * 360) / rays.length;
        return (
          <line
            key={i}
            x1="100"
            y1="52"
            x2="100"
            y2="24"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </svg>
  );
}
