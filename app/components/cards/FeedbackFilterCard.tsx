import FeatureButton from "../buttons/FeatureButton";

type Props = {};

//* COMPONENT: FeedbackFilterCard
export default function FeedbackFilterCard({}: Props) {
  // output
  return (
    <div className="feedback-filter-card">
      <FeatureButton>All</FeatureButton>
      <FeatureButton>UI</FeatureButton>
      <FeatureButton>UX</FeatureButton>
      <FeatureButton>Enhancement</FeatureButton>
      <FeatureButton>Bug</FeatureButton>
      <FeatureButton>Feature</FeatureButton>
    </div>
  );
}
