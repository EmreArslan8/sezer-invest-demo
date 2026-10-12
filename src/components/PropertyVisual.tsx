// Gerçek ilan fotoğrafları gelene kadar kullanılan, ilana özel renklendirilmiş illüstrasyon.
export default function PropertyVisual({
  hue,
  category,
  className = "",
}: {
  hue: number;
  category: string;
  className?: string;
}) {
  const sky = `hsl(${hue} 45% 88%)`;
  const back = `hsl(${hue} 30% 62%)`;
  const front = `hsl(${hue} 35% 38%)`;
  const tall = category === "Ofis" || category === "Rezidans";

  return (
    <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width="400" height="260" fill={sky} />
      <circle cx="320" cy="60" r="28" fill="#fff" opacity="0.6" />
      <rect x="20" y="110" width="70" height="150" fill={back} />
      <rect x="250" y="90" width="60" height="170" fill={back} />
      <rect x="320" y="130" width="70" height="130" fill={back} />
      <rect x="110" y={tall ? 30 : 80} width="120" height={tall ? 230 : 180} fill={front} rx="2" />
      {Array.from({ length: tall ? 9 : 6 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={122 + col * 27}
            y={(tall ? 44 : 94) + row * 23}
            width="16"
            height="13"
            fill="#fff"
            opacity={(row + col) % 3 === 0 ? 0.85 : 0.45}
          />
        )),
      )}
      <rect x="0" y="250" width="400" height="10" fill={`hsl(${hue} 25% 30%)`} />
    </svg>
  );
}
