export function MathcotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 256"
      width="64"
      height="64"
      aria-label="Mathcot icon"
      role="img"
      {...props}
    >
      <rect
        x="0"
        y="0"
        width="256"
        height="256"
        rx="48"
        fill="currentColor"
      />

      <path
        d="
          M 64 178
          V 78
          C 64 71, 72 70, 76 76
          L 128 140
          L 180 76
          C 184 70, 192 71, 192 78
          V 178
          H 170
          V 124
          L 128 170
          L 86 124
          V 178
          Z
        "
        fill="#ffffff"
      />
    </svg>
  );
}
