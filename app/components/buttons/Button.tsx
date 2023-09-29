import classNames from "classnames";
import type { ThemeType } from "~/types/components.type";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  theme?: ThemeType;
}

//* COMPONENT: Button
export default function Button({
  children,
  className,
  theme = "primary",
  ...rest
}: Props) {
  const clsNames = classNames("button", className, theme);

  // output
  return (
    <button className={clsNames} {...rest}>
      {children}
    </button>
  );
}
