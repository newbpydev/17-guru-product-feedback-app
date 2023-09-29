import FeatureButton from "../buttons/FeatureButton";
import Card from "./Card";

type Props = {};

//* COMPONENT: FeedbackFilterCard
export default function FeedbackFilterCard({}: Props) {
  // output
  return (
    <Card classNameCustom="feedback-filter-card">
      <FeatureButton>All</FeatureButton>
      <FeatureButton>UI</FeatureButton>
      <FeatureButton>UX</FeatureButton>
      <FeatureButton>Enhancement</FeatureButton>
      <FeatureButton>Bug</FeatureButton>
      <FeatureButton>Feature</FeatureButton>
    </Card>
  );
}
