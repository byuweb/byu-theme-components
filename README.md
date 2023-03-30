# BYU Theme Components

This repository contains the "core" Web Components implementing the BYU theme.

Specifically, it contains the following components:

* byu-header
* byu-breadcrumbs
* byu-menu
* byu-search
* byu-user-info
* byu-footer
* byu-footer-column
* byu-social-media-links
* byu-footer-action-button

In order for a BYU website to be considered compliant with current branding standards it must make use of at least the
byu-header and byu-footer components. Additionally, the byu-menu, byu-search, and byu-user-info should be used for the
site's primary navigation, search, and login display, if any. The byu-footer-column and byu-footer-action-button are
used to add content to the footer if desired. The byu-social-media-links component contains the approved icons for all
the major social media platforms and is strongly recommended. Use of unapproved or modified social media icons may
violate those platforms' copyright and is not allowed.

## Important links

- [brand.byu.edu](http://brand.byu.edu) contains a full description of the BYU website branding guidelines.
- [webcomponents.byu.edu](https://webcomponents.byu.edu) is all of the public documentation for the web components.

## Getting Started

To begin using the components you can visit [the components demo site](http://webcomponents.byu.edu/) for more
documentation and code samples. If you're using Drupal or Wordpress, the community has created templates that you can
download and install. However, one of the primary goals and benefits of using a web components implementation is that
you don't need to use a specific CMS (or any CMS at all) to utilize the components.

## CDN Integration

This repository is integrated with the BYU Web Content Delivery Network (cdn) at cdn.byu.edu. This means that every
update to the master branch of the repository will be pushed immediately to the cdn, allowing websites across campus to
receive the latest updates immediately. More documentation can be found on the
[CDN Project Page](https://github.com/byuweb/web-cdn).

## Ownership and Releases

These web components are open-source and contributions are welcome. Officially, they are maintained by the OIT BYU Apps
Custom team. Work for that team is prioritized by product owners and will be fixed as time becomes available. If it is
urgent, feel free to reach out in the #byu-apps-custom-comms channel in the BYU-OIT Slack workspace. If you do not have
access to that workspace, ask your CSR to send a message for you. The team would also be happy to teach you how to fix
the issue so that you can be a code contributor to this project.

Releases will use [semver standards](http://semver.org/). Minor and bug-fix releases will maintain backwards
compatibility, while major releases could potentially include breaking changes. If a major release is proposed and
accepted we will ensure that the BYU web community is given ample time to prepare for any breaking changes and migrate
their code accordingly.

## How to Contribute

This project is open to the community, and we welcome contributions. You can start by
[forking this repo](https://help.github.com/articles/fork-a-repo/) and submitting a pull request, though we strongly
recommend you also join
the [teams channel](https://teams.microsoft.com/l/team/19%3aWBpiyNpEmTgVau8DYp1-lBjsdi-gdlx11g4u4O08duU1%40thread.tacv2/conversations?groupId=8c8885de-11cc-4bd8-a06a-e64804d1725c&tenantId=c6fc6e9b-51fb-48a8-b779-9ee564b40413),
so you can be part of the discussion.

### Our Coding Standards

Our goal is to implement flexible, well-structured web components according to the latest brand guidelines. Every pull
request must be peer-reviewed by one of the project administrators before it can be merged with the master branch. As
of this writing we require that any components work properly in at least the 2 latest versions of the following
browsers:

* Chrome
* Firefox
* Safari (Desktop and iOS versions)
* Microsoft Edge

In addition, every component must be responsive, providing a first-class experience to phone and tablet users.

## Favicon

All BYU Websites are encouraged to use the official favicon. This is likely to be located on brand.byu.edu in the
future, but it is available now in github:
[https://github.com/byuweb/byu-assets/blob/master/favicon.png](https://github.com/byuweb/byu-assets/blob/master/favicon.png).
