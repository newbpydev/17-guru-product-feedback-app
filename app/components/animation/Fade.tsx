import { useRef } from "react";
import { Transition } from "react-transition-group";

type Props = {
  in: boolean;
  children: React.ReactNode;
};

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

//* COMPONENT: Fade
export default function Fade({ in: inProp, children }: Props) {
  const nodeRef = useRef(null);

  const transitionStyles: { [key: string]: React.CSSProperties } = {
    entering: { opacity: 1 },
    entered: { opacity: 1, zIndex: 0 },
    exiting: { opacity: 0 },
    exited: { opacity: 0, zIndex: -200 },
  };

  // output
  return (
    <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          {children}
        </div>
      )}
    </Transition>
  );
}

// export default Fade;
