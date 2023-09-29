import classNames from "classnames";

import { Link } from "@remix-run/react";

import Icon from "../ui/icons/Icon";

import type { IconType } from "~/types/components.type";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  styleType?: "default" | "dark-mode";
  icon?: IconType;
}

//* COMPONENT: LinkButton
export default function LinkButton({
  children,
  className,
  to,
  styleType = "default",
  icon,
  ...rest
}: Props) {
  const clsNames = classNames("link-button", className, styleType);

  // output
  return (
    <Link to={to} className={clsNames} {...rest}>
      {icon && <Icon iconName={icon} />} {children}
    </Link>
  );
}
