import Button from "./Button";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

//* COMPONENT: FeatureButton
export default function FeatureButton({ children, ...rest }: Props) {
  // output
  return (
    <Button className="feature-button" {...rest}>
      {children}
    </Button>
  );
}
