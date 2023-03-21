import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/common/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta
          property="og:url"
          content="https://clicker-empire-game.pages.dev/"
        />
        <meta property="og:type" content="product" />
        <meta
          property="og:title"
          content="Recurtion プロジェクト Click Empire Game"
        />
        <meta
          property="og:description"
          content="Recurtionのお題のClick Empire GameというゲームをQwikCityを使って作成しました。"
        />
        <meta property="og:site_name" content="Click Empire Game" />
        <meta property="og:image" content="/thumbnail.png" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
