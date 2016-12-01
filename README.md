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

- Different browsers have different implementations of web component standards and other web standards (such as ES6).
  - We transpile our code, which was written in ES6
    - There is a bootstrap to detect which version of the code is needed.
    - The two different scripts that may be loaded:
      - ES6
        - This is the code, as written and not transpiled.
      - ES5 and Polyfills (separate files, but triggered together)
        - Loaded to replace ES6, never both.
        - Provides the features of ES6 required for web components.
    - ES6 is easier to read and correct.
    - Native web components require ES6.
    - ES5 will be loaded (separate code) when ES6 or web components are unsuported.
      - ES5 uses more polyfills, and therefore is heavier, slower, and soon to be outdated.
  - IE 11 HTMLElement prototyping breaks our component technology. This has in part motivated the above.
  - Feature detection is better than user agent parsing.
  - 1. We could bootstrap in an "init" style, detecting all required features and including libraries, patches, polyfills, etc only as needed to "set the stage" for each component.
  - 2. We could bootstrap and feature detect within each web component using a wrapper (tooling provided within the build environment) common among all web components to do the feature detection required for that component.
    - The second option makes it easier to include the constructors every time, and could potentially reduce the number of web requests.
    - If we wrap each web component in the feature checking script, then we must always load ES5, which is slower (worse) and requires HTMLElement to be shimmed (overriden) which is _very bad_.
    - Option 1 can include the easy construction features...
    - We chose option 1
  - In the future the bootstrap feature can be enhanced to provide conditional loading of components (including ones we haven't thought of yet)...
- In development of the web components we will decide how much customization is and isn't provided for (by using shadow DOM more or less restrictively) to aid personality and individual design within each campus site. 
  - Main differentiator here is when they want behavior and styling, or when they want behavior and minimal styling.

