import { HTML } from './GeoHTML';

addEventListener('fetch', (event) => { 
  return event.respondWith(handleRequest(event));
});

async function handleRequest({ request, client }: FetchEvent) {
  if (!['HEAD', 'GET'].includes(request.method)) {
    return new Response('This method is not allowed', {
      status: 405,
    });
  }

  const fastly_region = fastly.env.get('FASTLY_REGION');
  const fastly_pop = fastly.env.get('FASTLY_POP');

  const url = new URL(request.url);

  if (url.pathname == '/') {
    const clientGeo = client.geo;

    const FilesDictionary = new Dictionary('files');
    const cssStyles = FilesDictionary.get('styles.css');

    let html_content = '';

    html_content += '<h2> Country: ' + clientGeo.country_name?.toUpperCase() + '</h2>';
    html_content += '<h2> City: ' + clientGeo.city?.toUpperCase() + '</h2>';
    html_content += '<h2> Continent: ' + clientGeo.continent?.toUpperCase() + '</h2>';
    html_content += '<h2> Latitude: ' + clientGeo.latitude + '</h2>';
    html_content += '<h2> Longitude: ' + clientGeo.longitude + '</h2>';
    html_content += '<h2> Region: ' + clientGeo.region + '</h2>';

    return new Response(HTML(html_content, cssStyles), {
      status: 200,
      headers: {
	'Content-Type': 'text/html; charset=utf-8',
	'X-Region': fastly_region,
	'X-Pop-Code': fastly_pop,
      },
    });
  }

  if (url.pathname == '/json') {
    const clientGeo = client.geo;
    const clientIP = client?.ip;

    return new Response(JSON.stringify({ ip: clientIP, geo: clientGeo }, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Region': fastly_region,
        'X-Pop-Code': fastly_pop,
      },
    });
  }


  return new Response('The page you requested could not be found', {
    status: 404,
  });
}
