import icon from "~/assets/icons/favicon-32x32.png";
import rootStyles from "~/assets/styles/main.css";

import { cssBundleHref } from "@remix-run/css-bundle";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
/* ---------------------------------- Links --------------------------------- */
export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: rootStyles },
  { type: "image/png", rel: "icon", sizes: "32x32", href: icon },
];

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Frontend Mentor | Product feedback app</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Error Boundary                               */
/* -------------------------------------------------------------------------- */
export const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <h1>There was an error root level</h1>;
  }
};
