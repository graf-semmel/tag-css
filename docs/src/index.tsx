/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter } from "@solidjs/router";
import { lazy } from "solid-js";
import Layout from "./Layout";

const routes = [
  {
    component: (props: any) => <Layout>{props.children}</Layout>,
    children: [
      {
        path: "/",
        component: lazy(() => import("./App.tsx")),
      },
      {
        path: "/layout",
        component: lazy(() => import("./pages/layout/Layout.tsx")),
      },
      {
        path: "/interactive",
        component: lazy(() => import("./pages/Interactive.tsx")),
      },
      {
        path: "/typo",
        component: lazy(() => import("./pages/typo/Typo.tsx")),
      },
    ],
  },
];

render(
  () => <HashRouter>{routes}</HashRouter>,
  document.getElementById("root")!
);
