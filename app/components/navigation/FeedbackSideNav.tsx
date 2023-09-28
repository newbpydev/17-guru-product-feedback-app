import { useState } from "react";

import FeedbackBoardCard from "../cards/FeedbackBoardCard";
import FeedbackFilterCard from "../cards/FeedbackFilterCard";
import FeedbackRoadmapCard from "../cards/FeedbackRoadmapCard";

type Props = {};

//* COMPONENT: FeedbackSideNav
export default function FeedbackSideNav({}: Props) {
  const [isOpened, setIsOpened] = useState(false);

  // output
  return (
    <aside className="feedback-side-nav">
      <FeedbackBoardCard />

      <div className="feedback-side-nav__filter-map-wrapper">
        <FeedbackFilterCard />

        <FeedbackRoadmapCard />
      </div>
    </aside>
  );
}
