interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

//* COMPONENT: FeatureButton
export default function FeatureButton({ children, ...rest }: Props) {
  // output
  return (
    <button className="feature-button" {...rest}>
      {children}
    </button>
  );
}
