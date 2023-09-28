import { Link } from "@remix-run/react";

type Props = {};

//* COMPONENT: FeedbackRoadmapCard
export default function FeedbackRoadmapCard({}: Props) {
  // output
  return (
    <article className="feedback-roadmap-card">
      <header className="feedback-roadmap-card__header">
        <h2 className="feedback-roadmap-card__title">Roadmap</h2>

        {/* TODO: CHANGE TO CUSTOM LINK? */}
        <Link to="/roadmap">View</Link>
      </header>

      <main className="feedback-roadmap-card__overview-list">
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
      </main>
    </article>
  );
}
