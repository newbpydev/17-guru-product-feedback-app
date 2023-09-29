import { Link } from "@remix-run/react";

import Card from "./Card";

type Props = {};

//* COMPONENT: FeedbackRoadmapCard
export default function FeedbackRoadmapCard({}: Props) {
  // output
  return (
    <Card classNameCustom="feedback-roadmap-card">
      <div className="feedback-roadmap-card__header">
        <h2 className="feedback-roadmap-card__title">Roadmap</h2>

        {/* TODO: CHANGE TO CUSTOM LINK? */}
        <Link to="/roadmap">View</Link>
      </div>

      <div className="feedback-roadmap-card__overview-list">
        <p className="feedback-roadmap-card__overview-item">
          <span className="dot">⚽</span>
          <span className="name">Planned</span>
          <span className="number">2</span>
        </p>
        <p className="feedback-roadmap-card__overview-item">
          <span className="dot">⚽</span>
          <span className="name">In-Progress</span>
          <span className="number">3</span>
        </p>
        <p className="feedback-roadmap-card__overview-item">
          <span className="dot">⚽</span>
          <span className="name">Live</span>
          <span className="number">1</span>
        </p>
      </div>
    </Card>
  );
}
