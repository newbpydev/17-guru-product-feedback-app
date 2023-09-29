import { Link } from "@remix-run/react";

import LinkButton from "../buttons/LinkButton";
import Icon from "../ui/icons/Icon";
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
        <LinkButton to="/roadmap">View</LinkButton>
      </div>

      <div className="feedback-roadmap-card__overview-list">
        <p className="feedback-roadmap-card__overview-item">
          <span className="dot">
            <Icon iconName="circle" fill="#F49F85" />
          </span>
          <span className="name">Planned</span>
          <span className="number">2</span>
        </p>
        <p className="feedback-roadmap-card__overview-item">
          <span className="dot">
            <Icon iconName="circle" />
          </span>
          <span className="name">In-Progress</span>
          <span className="number">3</span>
        </p>
        <p className="feedback-roadmap-card__overview-item">
          <span className="dot">
            <Icon iconName="circle" fill="#62BCFA" />
          </span>
          <span className="name">Live</span>
          <span className="number">1</span>
        </p>
      </div>
    </Card>
  );
}
