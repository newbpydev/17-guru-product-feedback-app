import FeedbackMainNav from "~/components/navigation/FeedbackMainNav";
import FeedbackSideNav from "~/components/navigation/FeedbackSideNav";

/* -------------------------------------------------------------------------- */
/*                                Feedback Page                               */
/* -------------------------------------------------------------------------- */
export default function FeedbackPage() {
  // output
  return (
    <main className="feedback-page">
      <FeedbackSideNav />

      <FeedbackMainNav />
    </main>
  );
}
