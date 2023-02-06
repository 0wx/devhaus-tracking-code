import gtag from './gtag';

export default function initiateGA4() {
  const scriptTag = document.querySelector('#devhaus-tracking-code') as HTMLScriptElement;
  //check if scriptTag has "enable-ga4" attribute
  if (scriptTag.hasAttribute('ga4')) {
    //if so, create a gtag script tag
    try {
      const ga4MeasurementId = scriptTag.getAttribute('ga4');
      const ga4Debug = scriptTag.getAttribute('ga4-debug-mode');
      const gtagScript = document.createElement('script');
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
      document.head.appendChild(gtagScript);
      //create a gtag function
      window.dataLayer = window.dataLayer || [];

      gtag('js', new Date());
      if (!ga4Debug) {
        gtag('config', ga4MeasurementId);
      } else {
        gtag('config', ga4MeasurementId, {
          send_page_view: true,
          debug_mode: true,
        });
      }
      //console.log('GA4 is enabled!');
    } catch (error) {
      // console.log('GA4 is not enabled!');
    }
  }
}
