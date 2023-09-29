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

      <section className="feedback-page__suggestions">card</section>
    </main>
  );
}
