interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  iconName:
    | "close"
    | "hamburger"
    | "arrow-down"
    | "arrow-left"
    | "arrow-up"
    | "check"
    | "comments"
    | "edit-feedback"
    | "new-feedback"
    | "plus"
    | "circle";

  customHeight?: number;
  customWidth?: number;
  fill?: string;
}

//* COMPONENT: Icon
export default function Icon({
  iconName,
  customHeight,
  customWidth,
  fill,
  ...rest
}: Props) {
  let icon: React.ReactElement<SVGSVGElement>;

  switch (iconName) {
    case "close":
      icon = (
        <svg
          width={customWidth || "18"}
          height={customHeight || "17"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
            fill={fill || "#FFF"}
            fillRule="evenodd"
          />
        </svg>
      );
      break;

    case "hamburger":
      icon = (
        <svg
          width={customWidth || "20"}
          height={customHeight || "17"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={fill || "#FFF"} fillRule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      );
      break;

    case "arrow-down":
      icon = (
        <svg
          width={customWidth || "20"}
          height={customHeight || "17"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill={fill || "#FFF"} fillRule="evenodd">
            <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
          </g>
        </svg>
      );
      break;

    case "arrow-left":
      icon = (
        <svg
          width={customWidth || "7"}
          height={customHeight || "10"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L2 5l4-4"
            stroke="#4661E6"
            stroke-width="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      );
      break;

    case "arrow-up":
      icon = (
        <svg
          width={customWidth || "10"}
          height={customHeight || "7"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6l4-4 4 4"
            stroke="#4661E6"
            stroke-width="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      );
      break;

    case "check":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={customWidth || "13"}
          height={customHeight || "11"}
        >
          <path
            fill="none"
            stroke="#AD1FEA"
            stroke-width="2"
            d="M1 5.233L4.522 9 12 1"
          />
        </svg>
      );
      break;

    case "comments":
      icon = (
        <svg
          width={customWidth || "18"}
          height={customHeight || "16"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
            fill={fill || "#CDD2EE"}
            fillRule="nonzero"
          />
        </svg>
      );
      break;

    case "edit-feedback":
      icon = (
        <svg
          width={customWidth || "40"}
          height={customHeight || "40"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="103.9%"
              cy="-10.387%"
              fx="103.9%"
              fy="-10.387%"
              r="166.816%"
              id="a"
            >
              <stop stop-color="#E84D70" offset="0%" />
              <stop stop-color="#A337F6" offset="53.089%" />
              <stop stop-color="#28A7ED" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <circle fill="url(#a)" cx="20" cy="20" r="20" />
            <path
              d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
              fill={fill || "#FFF"}
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
      break;

    case "new-feedback":
      icon = (
        <svg
          width={customWidth || "56"}
          height={customHeight || "56"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="103.9%"
              cy="-10.387%"
              fx="103.9%"
              fy="-10.387%"
              r="166.816%"
              id="a"
            >
              <stop stop-color="#E84D70" offset="0%" />
              <stop stop-color="#A337F6" offset="53.089%" />
              <stop stop-color="#28A7ED" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <path
              fill={fill || "#FFF"}
              fillRule="nonzero"
              d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
            />
          </g>
        </svg>
      );
      break;

    case "circle":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={customWidth || "8"}
          height={customHeight || "8"}
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill={fill || "#AD1FEA"} />
        </svg>
      );
      break;

    default:
      icon = (
        <svg
          width={customWidth || "9"}
          height={customHeight || "9"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            transform="translate(-24 -20)"
            fill={fill || "#F2F4FE"}
            fillRule="evenodd"
            font-family="Jost-Bold, Jost"
            font-size="14"
            font-weight="bold"
          >
            <tspan x="24" y="27.5">
              +
            </tspan>
          </text>
        </svg>
      );
      break;
  }

  // output
  return <span {...rest}>{icon}</span>;
}
