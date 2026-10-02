# byu-theme-components CHANGELOG
## 2.4.7

-

## 2.4.6

- Remove transparent text and styling related to making text transparent.

## 2.4.5

- added aria-label tags so that the hidden text for the icons will have relevant text for screen readers

## 2.4.4

- removed some extra css that was un-needed and actually introduced new contrast errors

## 2.4.2

- Small accessibility additions: a few background color adjustments and one new aria-label

## 2.4.1

- Removed out-of-date footer info

## 2.4.0

- feat: Updated to new BYU fonts
- feat: swapped out Cookie Consent from MeruData to TrustArc

## 2.2.2
- feat: Update footer with official BYU logos to match Brightspot #528
- fix: include dist changes for byu logo update #529

## 2.2.1

- Update dependabot.yml
- docs: update official communication channel
- docs: add additional cookie header info
- fix: update deps
- fix: add cookie preferences link
- docs: rebuilt docs
- fix: automatically add merudata privacy scripts
- docs: clarify ownership
- fix: update packages to remove most security vulnerabilities
- ci: update action versions
- docs: remove merudata from usage example
- build: remove duplicate dep
- Merge pull request #520 from byuweb/feat/privacy 



## 2.2.0

- Update to bring components inline with Brightspot changes during Q4 of 2020.

## 2.1.4

- Change the focus of a footer link from an outline to an underline.

## 2.1.3

 - Update social media icon display.

## 2.1.2 

- Fix footer overflow (#477).

## 2.1.1

- Fix issue with `.active` class on slotted items in the `byu-menu`. (#476)

## 2.1.0

The design was enhanced to better match the styles of websites hosted in Brightspot. 

## 2.0.0

In addition to a new design to match the design of sites hosted with BYU websites, the have been some minor tweaks to the theme components API. According to the [Semantic Versioning specification](https://semver.org/), these changes constitute a new major release. We have documented the breaking changes below so you know what you'll need to tweak to get the components working on your site. If you aren't using these changed feature listed belows, then no changes need to be made to use v2 of the BYU theme components.

**IE 11 is no longer supported by the web community.**

### `byu-header`

- Previously deprecated supertitles have been removed.
- The `max-width` attribute has been removed.
- The `full-width` attribute has been removed.
- The `constrain-top-bar` attribute has been removed.
- The `home-url` attribute has been removed.

### `byu-menu`

- The `transparent` class has been removed.
- Regardless of the number of menu items, they will always be left aligned.
- The more menu has been removed.

### `byu-search`

- Removed the deprecated `onsearch` attribute.

### `byu-footer`

- The `max-width` attribute has been removed.
