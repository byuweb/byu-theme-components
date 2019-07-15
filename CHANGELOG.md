# byu-theme-components CHANGELOG

## Breaking changes between 1.x.x and 2.x.x

In addition to a new design to match the design of sites hosted with BYU websites, the have been some minor tweaks to the theme components API. According to the [Semantic Versioning specification](https://semver.org/), these changes constitute a new major release. We have documented the breaking changes below so you know what you'll need to tweak to get the components working on your site. If you aren't using these changed feature listed belows, then no changes need to be made to use v2 of the BYU theme components.

### `byu-header`

- The `subtitle` class is no longer supported. To create a subtitle, place an element in the `subtitle` slot.
- Previously deprecated supertitles have been removed.
- The `max-width` attribute has been removed.
- The `full-width` attribute has been removed.
- The `constrain-top-bar` attribute has been removed.

### `byu-menu`

- The `transparent` class has been removed.
- Regardless of the number of menu items, they will always be left aligned.
- The more menu has been removed.

### `byu-search`

- The `search-input-selector` attribute is now camelCase as opposed to ke-bab case. To define a custom search input selector, use the `searchInputSelector` attribute.
- The `action-target` attribute is now camelCase as opposed to ke-bab case. To define an action target, use the `actionTarget` attribute.
- Removed the deprecated `onsearch` attribute.
