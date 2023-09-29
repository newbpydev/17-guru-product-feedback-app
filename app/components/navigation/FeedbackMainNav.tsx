import Button from "../buttons/Button";
import Icon from "../ui/icons/Icon";

//* COMPONENT: FeedbackMainNav
export default function FeedbackMainNav() {
  // output
  return (
    <header className="feedback-main-header">
      <Button theme="ui-dark" className="feedback-main-header__sort-button">
        Sort by : <span>Most Upvotes</span>
        <Icon iconName="arrow-down" strokeColor="#fff" />
      </Button>

      <Button className="feedback-main-header__button" theme="primary">
        <Icon iconName="plus" />
        Add Feedback
      </Button>
    </header>
  );
}
