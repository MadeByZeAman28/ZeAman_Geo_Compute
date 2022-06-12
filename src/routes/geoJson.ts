import { Handler } from "worktop";
import { reply } from "worktop/response";

export const geoJson: Handler = async (request, context) => {
  const clientGeo = context?.client?.geo;

  return reply(200, clientGeo);
}
