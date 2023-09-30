import FeedbackCard from "~/components/cards/FeedbackCard";
import FeedbackMainNav from "~/components/navigation/FeedbackMainNav";
import FeedbackSideNav from "~/components/navigation/FeedbackSideNav";
import data from "~/data/data.json";

import { useLoaderData } from "@remix-run/react";

import type { Feedback, ProductRequest } from "~/types/data.type";

import type { LoaderFunction } from "@remix-run/node";
/* ---------------------------------- Meta ---------------------------------- */

/* --------------------------------- Loaders -------------------------------- */
export const loader: LoaderFunction = async () => {
  return (data as Feedback).productRequests;
};

/* --------------------------------- Actions -------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Feedback Page                               */
/* -------------------------------------------------------------------------- */
export default function FeedbackPage() {
  const suggestions = useLoaderData<ProductRequest[]>();

  // output
  return (
    <section className="feedback-page">
      <FeedbackSideNav />

      <FeedbackMainNav />

      <section className="feedback-page__suggestions">
        <FeedbackCard />
      </section>
    </section>
  );
}
