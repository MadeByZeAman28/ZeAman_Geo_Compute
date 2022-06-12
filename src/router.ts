import { Router } from "worktop";
import type { Context } from "worktop";

import { IndexGet } from "./routes/index";
import { geoJson } from "./routes/geoJson";

interface ResponseContext extends Context {
  start?: number;
}

export const router = new Router<ResponseContext>();

router.add("GET", "/", IndexGet);
router.add("GET", "/geo_json", geoJson);
