import { compose } from "worktop";
import { start } from "worktop/sw";
import { preflight } from "worktop/cors";

import { router } from "./router";

router.prepare = compose(
  function (_req, context) {
    context.start = Date.now();
    context.defer((res) => {
      const ms = Date.now() - context.start!;
      res.headers.set("x-response-time", `${ms} ms`);
    });
  },
  preflight({
    origin: ["https://wedaseha.pages.dev"],
    headers: [
      "Cache-Control",
      "Content-Type",
      "x-served-by",
      "date",
      "x-response-time",
    ],
    methods: ["GET", "HEAD", "OPTIONS"],
    maxage: 604800,
  })
);

start(router.run);
