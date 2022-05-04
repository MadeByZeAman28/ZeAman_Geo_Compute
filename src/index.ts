import { HTML } from './GeoHTML';

addEventListener('fetch', (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event: FetchEvent) {
	const req = event.request;

	if (!['HEAD', 'GET'].includes(req.method)) {
		return new Response('This method is not allowed', {
			status: 405,
		});
	}

	const fastly_region = fastly.env.get('FASTLY_REGION');
	const fastly_pop = fastly.env.get('FASTLY_POP');

	const url = new URL(req.url);

	if (url.pathname == '/') {
		const clientGeo = event.client.geo;
		let html_content = '';

		html_content += '<h2> Country: ' + clientGeo.country_name?.toUpperCase() + '</h2>';
		html_content += '<h2> City: ' + clientGeo.city?.toUpperCase() + '</h2>';
		html_content += '<h2> Continent: ' + clientGeo.continent?.toUpperCase() + '</h2>';
		html_content += '<h2> Latitude: ' + clientGeo.latitude + '</h2>';
		html_content += '<h2> Longitude: ' + clientGeo.longitude + '</h2>';
		html_content += '<h2> Region: ' + clientGeo.region + '</h2>';

		return new Response(HTML(html_content), {
			status: 200,
			headers: {
				'Content-Type': 'text/html; charset=utf-8',
				'X-Region': fastly_region,
				'X-Pop-Code': fastly_pop,
			},
		});
	}

	if (url.pathname == '/styles.css') {
		const FilesDictionary = new Dictionary('files');
		const cssStyles = FilesDictionary.get('styles.css');

		return new Response(cssStyles, {
			status: 200,
			headers: {
				'Content-Type': 'text/css; charset=utf-8',
				'X-Region': fastly_region,
				'X-Pop-Code': fastly_pop,
			},
		});
	}

	if (url.pathname == '/json') {
		const clientGeo = event.client.geo;

		return new Response(JSON.stringify(clientGeo, null, 2), {
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
