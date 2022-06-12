import { Handler } from "worktop";
import { reply } from "worktop/response";

export const geoJson: Handler = async (request, context) => {
  const fastly_region = fastly.env.get('FASTLY_REGION');
  const fastly_pop = fastly.env.get('FASTLY_POP');

  const headers = {
    'content-type': 'application/json',
    'X-Region': fastly_region,
    'X-Pop-Code': fastly_pop
  }

  const clientGeo = context?.client?.geo;

  return reply(200, JSON.stringify(clientGeo, null, 2), headers);
}
