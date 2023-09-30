import Button from "../buttons/Button";
import Card from "./Card";

type Props = {};

//* COMPONENT: FeedbackCard
export default function FeedbackCard({}: Props) {
  // output
  return (
    <Card classNameCustom="feedback-card">
      <div className="feedback-card__details">
        <h3 className="feedback-card__title">Add Tags</h3>
        <p className="feedback-card__description">decription</p>
        <Button theme="ui">Enhancement</Button>
      </div>
    </Card>
  );
}
