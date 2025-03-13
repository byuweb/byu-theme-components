/*** BYU TrustArc Cookie Consent Banner and Cookie AutoBlocking ***/
;(function () {
  const host = window.location.hostname;

  if (!host.includes("localhost") && !host.includes("-dev")) {
    // Add TrustArc scripts dynamically
    const scriptPcookie = document.createElement("script");
    scriptPcookie.type = "text/javascript";
    scriptPcookie.src = "https://consent.trustarc.com/v2/notice/3p3tmg?pcookie";
    scriptPcookie.async = true;
    document.head.appendChild(scriptPcookie);

    const scriptCore = document.createElement("script");
    scriptCore.type = "text/javascript";
    scriptCore.src = "https://consent.trustarc.com/v2/autoblockasset/core.min.js?cmId=3p3tmg";
    document.head.appendChild(scriptCore);

    const scriptAutoblock = document.createElement("script");
    scriptAutoblock.type = "text/javascript";
    scriptAutoblock.src = "https://consent.trustarc.com/v2/autoblock?cmId=3p3tmg";
    document.head.appendChild

    // Ensure the consent banner placeholder is in the DOM
    let consentBanner = document.getElementById("consent-banner");
    if (!consentBanner) {
      consentBanner = document.createElement("div");
      consentBanner.id = "consent-banner";
      document.body.appendChild(consentBanner);
    }
  }
})()
