/*** BYU MeruData Cookie Consent Banner and Cookie AutoBlocking ***/
;(function () {
  const byuMerudataID = "c5d6912a-d8fc-4138-8d1d-6daeb3056f57"
  const merudataUrl = "https://ccm.merudata.app/assets/"
  const host = window.location.hostname

  if (!host.includes("localhost") && !host.includes("-dev")) {
    // Load the config file
    let scriptConfig = document.createElement("script")
    scriptConfig.src = merudataUrl + byuMerudataID + "/ccmconfig.js"
    scriptConfig.onload = function () {
      // Load the script file
      let script = document.createElement("script")
      script.src = merudataUrl + byuMerudataID + "/d_ccm.min.js"
      document.head.appendChild(script)

      // Load the stylesheet file
      let stylesheet = document.createElement("link")
      stylesheet.rel = "stylesheet"
      stylesheet.href = merudataUrl + byuMerudataID + "/ccm.min.css"
      stylesheet.media = "print"
      stylesheet.onload = function() {
        this.media = 'all'
      }
      document.head.appendChild(stylesheet)
    }
    document.head.appendChild(scriptConfig);
  }
})()
