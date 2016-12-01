# 2017-components
Web Components implementing the 2017 theme.

# Development Standards

- Node.js LTS build/development environment (base "hardcore" development requirement)
 - This is a development requirement, not a server requirement
 - Webservers are required to serve files and/or streams and/or data on the internet (or intranet intended for consumption)
- Component development documentation will be aggregated and included from a central repo/source at build... craziness!
  - Eg; JS Doc (todo: get familiar enough to "learn fro the best books wisdom")
  - Additional standards go here (todo: later meeting about specifics here)
- Demos will be presented and documented according to the Polymer Demo Helpers thing. This is not bundled with the final product, so Polymer can be used here...?
- "Hardcore" development is done using Bower for versioning and contribution. (todo: bower location and requirements)
- Components will be developed using raw Web Components (no Polymer)
- Components will be developed in Javascript ES6
- Components' sass to display items laid out on the page (layout items such as navigation menu "buttons") will expose their ___layout___ dimensions (or other sizing metrics) as sass variables for use in other page elements
  - Some will be available for change, others only for use
  - We will provide a specific repository for styling
  - Some specific style values are set at compile time, therefore may be unchangeable, refer to component documentation to know for sure.
- The difference between sass and scss files is that we use scss
- Component file structure will be: directory containing all files needed for that component (directory name is name of component), intended to be aggregated into trunk at build.
  - script.js
  - template.html
  - style.scss (specifics merged with the universal styling repository)
- Component directories will be individual (no core)
- ES6 will be transpiled to ES5 using ...
  - Closure (clean/less code, theoretically faster _smaller_)
  - Babel (features, but wrapped _iffy_, duplicates helper functions)
  - Typescript (involves a whole lot more, entire language _javascript_, 2.1 has async and wait built-in)
  - Others added as/if needed
- Build tool: Gulp
  - Modules
    - todo: Research inc!
    - Web Component Injector (todo: name change) a module which allows you to "watch changes" and build into template (variable)
- Distribution will be in three (or more?) flavors: core, basic, and professional-grade!
  - Scripts need to wrap element definitions for feature definitions (to fill in the blanks for less-advanced browsers vis-a-vis Polyfills). Testing must be done using Shady-DOM _and_ Shadow DOM.
