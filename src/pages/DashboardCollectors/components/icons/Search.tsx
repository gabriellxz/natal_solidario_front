type SearchProps = React.SVGProps<SVGSVGElement>;

export function Search(props: SearchProps) {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.625 17.1646C13.491 17.1646 16.625 14.0305 16.625 10.1646C16.625 6.29856 13.491 3.16455 9.625 3.16455C5.75901 3.16455 2.625 6.29856 2.625 10.1646C2.625 14.0305 5.75901 17.1646 9.625 17.1646Z"
        stroke="#7E7E7E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3751 18.9146L14.5688 15.1084"
        stroke="#7E7E7E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
