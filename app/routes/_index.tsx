import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

// import { Link } from "@remix-run/react";

/* ---------------------------------- Meta ---------------------------------- */
export const meta: MetaFunction = () => {
  return [
    { title: "Product Feedback App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

/* --------------------------------- loader --------------------------------- */
export const loader: LoaderFunction = ({}) => {
  return redirect("/feedback");
};

/* -------------------------------------------------------------------------- */
/*                                  HomePage                                  */
/* -------------------------------------------------------------------------- */
// export default function Index() {
//   return (
//     <main>
//       <Link to={"/feedback"}>Go to Feedback</Link>
//     </main>
//   );
// }
