/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <base href='' /> */}
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Futura:400,500,600,700,800,900"
          />
          <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
          {/* <link
            rel="stylesheet"
            type="text/css"
            href="css/fonts-molla.min.css"
          /> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="vendor/line-awesome/css/line-awesome.min.css"
          />
          {/* BoxIcon */}
          <link
            href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
            rel="stylesheet"
          />
          {/* font awesome */}
          <script
            src="https://kit.fontawesome.com/f70f4c2534.js"
            crossOrigin="anonymous"
          ></script>
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=1169950880534302&ev=PageView&noscript=1"
            />
          </noscript>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0Y5N1GLPM1"
          ></script>
          <Script strategy="lazyOnload">
            {`
                 window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0Y5N1GLPM1');
              `}
          </Script>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','G-NL91V4M2JT');`,
            }}
          ></Script>
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3345243,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
             r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
          ></Script>
          <Script type="application/ld+json">
            {`
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Decofetch",
                "url": "https://www.decofetch.com/",
                "logo": "https://www.decofetch.com/",
                "sameAs": [
                "https://www.facebook.com/people/Decofetch/100083573260604/",
                "https://twitter.com/decofetch",
                "https://www.instagram.com/decofetch/",
                "https://www.youtube.com/channel/UCWBZ9G0gz9CPINSbl3OnWng",
                "https://www.linkedin.com/company/decofetch",
                "https://www.pinterest.co.uk/decofetch/"
                ],
                 `}
          </Script>
          <meta name="google-site-verification" content="VVKIM4UOXVACJlqxSTXqrEUDkqYNusmPtD5UdYn6t-8" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-NL91V4M2JT"
                 height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <Main />
          <script src="js/footer.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}