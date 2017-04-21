# PROPOSAL - `byu-search` API improvements

The current usage of `byu-search` is quirky, at best, both for styling
and basic usage. There are certainly many challenges to designing a great
API, due to some of the limitations of Shadow DOM, but I believe that
we can provide a simple, seamless API for our consumers.

# Changes to Styling

Styles for the search input would be added to the non-shadow DOM
stylesheet, with a selector like
`byu-search input.__byu-search-selected-input`.

All other inputs/buttons will be hidden with a selector like:

```
byu-search input:not(.__byu-search-selected-input), byu-search button
```

If the consumer uses these inputs or buttons (for example, in a fancy
autocomplete dropdown), they'll need to set them to display.

The `byu-search` component would then use various algorithms (detailed
below) to find the search input and apply the `__byu-search-selected-input`
class. Slot listeners will be added to detect dynamic updates to the
element's Light DOM.

The big improvement of this approach is that things will be styled
properly out-of-the-box, without consumer-written stylesheets.  It also
allows us to push out fixes to those styles without having to somehow
coordinate those changes with all of the consumers of `byu-search`.

## Default Behavior

```
<byu-search onsearch="myCallback">
<!-- your form here -->
</byu-search>
```

Finds the first descendant that is an input of type `search` or `text`:

```
this.querySelector('input[type="search"], input[type="text"]')
```

## Consumer-specified input

```
<byu-search search-input-selector="input.my-search-input" onsearch="myCallback">
    <div>
        <input type="search" class="my-search-input" />
    </div>
</byu-search>
```

Uses the value of `search-input-selector` to find and apply the class.
The selector will be scoped to the current search element.

# Changes to Search Submission Behavior

The main change is the addition of an attribute named `action` (to mimic
the contract of `<form>`.  The possible values (for now) are `submit-form`,
`click`, and `navigate` (all subject to change with feedback). This
attribute would work in concert with
an optional attribute, `action-target`, the usage of which varies
depending on the chosen action.

For `action=submit-form` and `action=click`, `action-target`
is a CSS-style selector which will be passed to
`element.querySelector` to get an element on which to apply the action.
The element specified by `action-target` MUST be a descendant of `byu-search`.

## Default Behavior (current behavior)

The current behavior will be the default behavior. If an `onsearch` handler
is set, it will ALWAYS be invoked, in addition to any actions that will
be taken as described below.

In addition, a `search` event will be dispatched to complement the
`onsearch` attribute. This brings `byu-search` in line with standard
elements, which allow you to listen to an event either by setting an
`onevent` attribute or by using `element.addEventListener('event', callback)`.

So, even without the options that are laid out below, a `search` event
will always be fired and resolved in a way that resembles a native
element event.

## `action="submit-form"`

This action will search for a form in the Light DOM, then invoke
`HTMLFormElement.submit` on the form.

`action-target` is an element selector and defaults to `form`.
If `action-target` does not resolve to a form, an error will be raised
when the search button is pressed.

In the following example, when the search button is clicked, the `submit`
method will be called on the second `form` element.

```
<byu-search action="submit-form" action-target="form.search-form">
    <div>
        <form class="why-is-this-here"></form>
        <form class="search-form">
            <input type="search" name="search-terms">
        </form>
    </div>
</byu-search>
```

Since consumers will probably never have two forms, `action-target` can
usually be omitted:

```
<byu-search action="submit-form">
    <div>
        <form>
            <input type="search" name="search-terms">
        </form>
    </div>
</byu-search>
```

## `action="click"`

This action will simulate a click event on a target in the Light DOM,
using `HTMLElement.click`.

`action-target` is an element selector which defaults to
`button, input[type="submit"], input[type="button"]`.
If `action-target` does not select an element, an error will be raised
when the search button is pressed.

Most of the time, there will be one input or button element that is a
descendant of the `byu-search` element. In this case, `action-target`
can be omitted:

```
<byu-search action="click">
   <div>
        <input type="search">
        <button>Submit Search</button>
   </div>
</byu-search>
```

If there are two or more button-like elements, `action-target` should be
specified.

In this example, the input with an ID of 'the-real-deal' will
be clicked:

```
<byu-search action="click" action-target="#the-real-deal">
   <div>
        <input type="search">
        <button>Submit Search</button>
        <input type="submit" id="the-real-deal" value="Another Button">
        <input type="button" value="Why so many buttons?">
   </div>
</byu-search>
```

`action-target` does not have to resolve to a button-like element. It
can resolve to any HTML element.

In this example, the div with the ID of 'my-funky-submit-div' will have
a click simulated:

```
<byu-search action="click" action-target="div#my-funky-submit-div">
    <div>
        <input type="search">
        <div id="my-funky-submit-div"></div>
    </div>
</byu-search>
```

## `action="navigate"`

This will navigate the user to the specified URL. For example, this could
be used to refer the user to Google to handle their search.

`action-target` is REQUIRED. If it is not specified, an error will be
raised when the search button is clicked.

`action-target` specifies the URL pattern to which the
user is to be sent. This string functions like an ES6 template string,
so the consumer can specify where the search param will be embedded using
the string `${search}`. The inserted search param will always be URL escaped.

In this example, if the user entered "cosmo the cougar" into the search box,
their browser would be redirected to
`https://www.google.com/search?q=cosmo+the+cougar`.

```
<byu-search action="navigate" action-target="https://www.google.com/search?q=${search}">
    <input type="search">
</byu-search>
```

In fact, in this case, the consumer should be able to omit the input
element:

```
<byu-search action="navigate" action-target="https://www.google.com/search?q=${search}"></byu-search>
```

# Future additions

We could eventually provide shortcuts to navigating the user to a search engine
with a site-scoped search.  So, something like this:

```
<byu-search action="search-engine" action-target="bing" search-site="mysite.byu.edu"></byu-search>
```
