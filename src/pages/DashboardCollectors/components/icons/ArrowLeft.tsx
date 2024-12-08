type ArrowLeftProps = React.SVGProps<SVGSVGElement>

export function ArrowLeft(props: ArrowLeftProps) {
  return (
    <svg
      width="6"
      height="7"
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.70065 6.392L0.940648 3.668L3.70065 0.944H5.42865L2.65665 3.668L5.42865 6.392H3.70065Z"
        fill="#483737"
      />
    </svg>
  );
}
