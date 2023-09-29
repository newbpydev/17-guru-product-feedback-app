import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

//* COMPONENT: Button
export default function Button({ children, className, ...rest }: Props) {
  const clsNames = classNames("button", className);

  // output
  return (
    <button className={clsNames} {...rest}>
      {children}
    </button>
  );
}
