import { useState } from "react";

import FeedbackBoardCard from "../cards/FeedbackBoardCard";
import FeedbackFilterCard from "../cards/FeedbackFilterCard";
import FeedbackRoadmapCard from "../cards/FeedbackRoadmapCard";
import Icon from "../ui/icons/Icon";

type Props = {};

//* COMPONENT: FeedbackSideNav
export default function FeedbackSideNav({}: Props) {
  const [isOpened, setIsOpened] = useState(true);

  // output
  return (
    <aside className="feedback-side-nav">
      <div className="feedback-side-nav__board-group">
        <FeedbackBoardCard />

        {isOpened ? (
          <Icon
            iconName="close"
            className="feedback-side-nav__icon"
            onClick={() => setIsOpened((prev) => !prev)}
          />
        ) : (
          <Icon
            iconName="hamburger"
            className="feedback-side-nav__icon"
            onClick={() => setIsOpened((prev) => !prev)}
          />
        )}
      </div>

      {isOpened && (
        <div className="feedback-side-nav__menu-wrapper">
          <div className="feedback-side-nav__filter-map-wrapper">
            <FeedbackFilterCard />

            <FeedbackRoadmapCard />
          </div>
        </div>
      )}
    </aside>
  );
}
