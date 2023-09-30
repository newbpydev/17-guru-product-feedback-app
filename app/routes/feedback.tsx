import data from "~/data/data.json";

import { Outlet, useLoaderData } from "@remix-run/react";

import type { Feedback, ProductRequest } from "~/types/data.type";

import type { LoaderFunction } from "@remix-run/node";
/* --------------------------------- Loaders -------------------------------- */
// export const loader: LoaderFunction = async () => {
//   return (data as Feedback).productRequests;
// };

/* -------------------------------------------------------------------------- */
/*                            PAGE: FeedbackLayout                            */
/* -------------------------------------------------------------------------- */
export default function FeedbackLayout() {
  // const suggestions = useLoaderData<ProductRequest>();
  // console.log(suggestions);

  // output
  return (
    <main className="feedback-layout">
      <Outlet />
    </main>
  );
}
