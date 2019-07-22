# BYU Core Components
This repository contains the "core" Web Components implementing the BYU theme.

Specifically, it contains the following components:
* byu-header
* byu-menu
* byu-search
* byu-user-info
* byu-footer
* byu-footer-column
* byu-social-media-links
* byu-footer-action-button

In order for a BYU website to be considered compliant with current branding standards it must make use of at least the byu-header and byu-footer components. Additionally, the byu-menu, byu-search, and byu-user-info should be used for the site's primary navigation, search, and login display, if any. The byu-footer-column and byu-footer-action-button are used to add content to the footer if desired. The byu-social-media-links component contains the approved icons for all the major social media platforms and is strongly recommended. Use of unapproved or modified social media icons may violate those platforms' copyright and is not allowed.

## Important links
[brand.byu.edu](http://brand.byu.edu) contains a full description of the BYU website branding guidelines

[web.byu.edu](http://web.byu.edu) is the central hub for communication, events, and news relating to the BYU Web Community. It includes a calendar with upcoming events (including WebFests and user group meetings), the proceedings and latest decisions of the Web Advisory Board, and info on the various working groups creating community resources. It also has info on how to join the BYU Web Slack channels.

## Getting Started:
To begin using the components you can visit [the components demo site](http://2017-components-demo.cdn.byu.edu/) for more documentation and code samples. If you're using Drupal or Wordpress, the community has created templates that you can download and install. However, one of the primary goals and benefits of using a web components implementation is that you don't need to use a specific CMS (or any CMS at all) to utilize the components.

## CDN Integration
This repository is integrated with the BYU Web Content Delivery Network (cdn) at cdn.byu.edu. This means that every update to the master branch of the repository will be pushed immediately to the cdn, allowing websites across campus to receive the latest updates immediately. More documentation can be found on the [CDN Project Page](https://github.com/byuweb/web-cdn).  

## Release Process and Timelines
A new version of these components will be released monthly unless there are no new issues to address. These monthly releases will be either bug-fix releases or minor releases that introduce new features. In addition, if a major bug is discovered we may make an unscheduled release to address it. Releases will use [semver standards](http://semver.org/). Minor and bug-fix releases will maintain backwards compatibility, while major releases could potentially include breaking changes. If a major release is proposed and accepted we will ensure that the BYU web community is given ample time to prepare for any breaking changes and migrate their code accordingly. 

## How to contribute:
This project is open to the community and we welcome contributions. You can start by [forking this repo](https://help.github.com/articles/fork-a-repo/) and submitting a pull request, though we strongly recommend you also join the slack channel at [byu-web.slack.com](http://byu-web.slack.com) so you can be part of the discussion.

### Our coding standards
Our goal is to implement flexible, well-structured web components according to the latest brand guidelines. Every pull request must be peer-reviewed by one of the project administrators before it can be merged with the master branch. As of this writing we require that any components work properly in at least the 2 latest versions of the following browsers:

* Chrome
* Firefox
* Safari (Desktop and iOS versions)
* Microsoft Edge

In addition, every component must be responsive, providing a first-class experience to phone and tablet users.

## Favicon
All BYU Websites are encouraged to use the official favicon. This is likely to be located on brand.byu.edu in the future, but it is available now in github: [https://github.com/byuweb/byu-assets/blob/master/favicon.png](https://github.com/byuweb/byu-assets/blob/master/favicon.png).

## Using Github
There's plenty of documentation online about how to work with GitHub and the Git source control system, and there are excellent Git plugins available for most IDEs. If you've never worked with Github before, GitHub has provided some good documentation at [guides.github.com](http://guides.github.com). You can also join the [slack channel](http://byu-web.slack.com) and connect with other developers from the project.