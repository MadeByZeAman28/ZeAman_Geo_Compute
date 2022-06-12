import { Handler } from "worktop";
import { reply } from "worktop/response";
import { HTML } from '../GeoHTML';

export const IndexGet: Handler = async (request, context) => {
  const headers = {
    "content-type": "text/html"
  }

  const clientGeo = context?.client?.geo;

  const FilesDictionary = new Dictionary('files');
  const cssStyles = FilesDictionary.get('styles.css');

  let html_content = '';

  html_content += '<h2> Country: ' + clientGeo.country_name?.toUpperCase() + '</h2>';
  html_content += '<h2> City: ' + clientGeo.city?.toUpperCase() + '</h2>';
  html_content += '<h2> Continent: ' + clientGeo.continent?.toUpperCase() + '</h2>';
  html_content += '<h2> Latitude: ' + clientGeo.latitude + '</h2>';
  html_content += '<h2> Longitude: ' + clientGeo.longitude + '</h2>';
  html_content += '<h2> Region: ' + clientGeo.region + '</h2>';

  return reply(200, HTML(html_content, cssStyles), headers);
}
