export function HTML(innerHTML: string, CssStyles: string) {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="ZeAmanuel Compute@Edge" />
        <meta name="theme-color" content="#446b9e" />
        <title>ZeAmanuel Compute@Edge</title>
        <link rel="icon" href="https://developer.fastly.com/favicon-32x32.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zeaman.edgecompute.app" />
        <meta property="og:title" content="ZeAmanuel Compute@Edge" />
        <meta property="og:description" content="ZeAmanuel Compute@Edge Geolocation Explorer" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/zeaman-contents/image/upload/v1652384379/logos/compute_edge_512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@amanuel_tigistu" />
        <meta name="twitter:creator" content="@amanuel_tigistu" />
        <meta property="og:url" content="https://zeaman.edgecompute.app" />
        <meta property="og:title" content="ZeAmanuel Compute@Edge" />
        <meta property="og:description" content="ZeAmanuel Compute@Edge Geolocation API" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/zeaman-contents/image/upload/v1652384379/logos/compute_edge_512.png"
        />
        <style>
          ${CssStyles}
        </style>
      </head>
      <body>
        <article>
          <h1 class="mb-4 md:mb-6">Geolocation Explorer</h1>
          <p>
            You now have access to your GeoLocation data from where you are
            visiting these website.
          </p>
          <div class="mt-3">
            ${innerHTML}
          </div>
        </article>
        <section class="footer">
          <hr />
          <p class="mr-3">
            This project was lovingly built with  
            <a
              href="https://www.fastly.com/products/edge-compute/serverless"
              target="_blank"
            >
              Fastly Compute@Edge
            </a>  
            by  
            <a href="https://github.com/MadeByZeAman28" target="_blank">
              ZeAmanuel
            </a>  
            and can be found on  
            <a
              href="https://github.com/MadeByZeAman28/ZeAman_Geo_Compute"
              target="_blank"
            >
                GitHub
            </a>
            .
          </p>
        </section>

        <!-- <style id="delayed"></style>
        <script type="module">
          window.addEventListener("load", () => {
            const delayed = document.getElementById("delayed");

            delayed.innerHTML = '@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");';
          });
        </script> -->
      </body>
    </html>
  `;
}
