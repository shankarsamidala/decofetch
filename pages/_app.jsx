/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "~/store/store";
import Layout from "../components/layout";
import LoginContextProvider from "../Context/LoginContext";
import "../styles/cart.scss";
import "../styles/globals.scss";

const WrappedApp = ({ Component, pageProps }) => {
  // ruqshfswfujryfczph@nvhrw.com

  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };
    window.scrollTo(0, 0);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(() => {
    TagManager.initialize({ gtmId: "G-0Y5N1GLPM1" });
  }, []);

  // console.log('window', window)

  return (
    <Provider store={store}>
      <LoginContextProvider>
        <PersistGate
          loading={
            <React.Fragment>
              <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-0Y5N1GLPM1`}
              />
              <Script strategy="lazyOnload">
                {`
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-0Y5N1GLPM1');
              `}
              </Script>
              <Script strategy="lazyOnload">
                {`
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window,document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                   fbq('init', '1169950880534302'); 
                  fbq('track', 'PageView');                  
              `}
              </Script>
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
              <noscript>
                <img
                  height="1"
                  width="1"
                  src="https://www.facebook.com/tr?id=1169950880534302&ev=PageView&noscript=1"
                />
              </noscript>
              <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content="DECOFETCH" />
                <meta name="description" content="DECOFETCH" />
                <meta name="author" content="Edalytix" />
                <meta name="apple-mobile-web-app-title" content="DECOFETCH" />
                <meta name="application-name" content="DECOFETCH" />
                <meta name="msapplication-TileColor" content="#cc9966" />
                <meta
                  name="msapplication-config"
                  content="images/icons/browserconfig.xml"
                />
                <meta
                  meta
                  name="viewport"
                  content="width=device-width, user-scalable=no"
                />
                <meta name="theme-color" content="#ffffff" />
                <meta name="google-site-verification" content="VVKIM4UOXVACJlqxSTXqrEUDkqYNusmPtD5UdYn6t-8" />
                <script
                  rel="preload"
                  src="https://www.paypal.com/sdk/js?client-id=Ab35VlP1kbkSbYXqanSsMMrmLacUFP1iDiDxM796zLNNBVHyoYEOenGh_Kc9sC-Kbx7bPvlUPD9LjVJu&disable-funding=card,credit,paylater&currency=GBP"
                />
                <title>DECOFETCH</title>
              </Head>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </React.Fragment>
          }
          persistor={store.__persistor}
        >
          <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=G-0Y5N1GLPM1`}
          />
          <Script strategy="lazyOnload">
            {`
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-0Y5N1GLPM1');
              `}
          </Script>
          <Script strategy="lazyOnload">
            {`
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window,document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                   fbq('init', '1169950880534302'); 
                  fbq('track', 'PageView');                  
              `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=1169950880534302&ev=PageView&noscript=1"
            />
          </noscript>
          <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="DECOFETCH" />
            <meta name="description" content="DECOFETCH" />
            <meta name="author" content="Edalytix" />
            <meta name="apple-mobile-web-app-title" content="DECOFETCH" />
            <meta name="application-name" content="DECOFETCH" />
            <meta name="msapplication-TileColor" content="#cc9966" />
            <meta
              name="msapplication-config"
              content="images/icons/browserconfig.xml"
            />
            <meta
              meta
              name="viewport"
              content="width=device-width, user-scalable=no"
            />
            <meta name="theme-color" content="#ffffff" />
            <script
              rel="preload"
              src="https://www.paypal.com/sdk/js?client-id=Ab35VlP1kbkSbYXqanSsMMrmLacUFP1iDiDxM796zLNNBVHyoYEOenGh_Kc9sC-Kbx7bPvlUPD9LjVJu&disable-funding=card,credit,paylater&currency=GBP"
            />
            <title>DECOFETCH</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </LoginContextProvider>
    </Provider>
  );
};

// WrappedApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };

export default WrappedApp;