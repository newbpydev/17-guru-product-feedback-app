import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  classNameCustom: string;
}

//* COMPONENT: Card
export default function Card({ children, classNameCustom, ...rest }: Props) {
  // const combinedClassNames = `card ${rest.className}`;

  // output
  return (
    <div className={classNames("card", classNameCustom)} {...rest}>
      {children}
    </div>
  );
}
