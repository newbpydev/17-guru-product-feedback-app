import Button from "../buttons/Button";
import Icon from "../ui/icons/Icon";

//* COMPONENT: FeedbackMainNav
export default function FeedbackMainNav() {
  // output
  return (
    <header className="feedback-main-header">
      <div className="feedback-main-header__sort">
        Sort by : <span>Most Upvotes</span>
        <Icon iconName="arrow-down" strokeColor="#fff" />
      </div>

      <Button className="feedback-main-header__button" theme="primary">
        <Icon iconName="plus" />
        Add Feedback
      </Button>
    </header>
  );
}
