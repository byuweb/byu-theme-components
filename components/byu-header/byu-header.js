(function (template) {
    'use strict';

    class BYUHeader extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
        }

    }

    window.customElements.define('byu-header', BYUHeader);
    window.BYUHeader = BYUHeader;

})(`<style>
    /*Variables*/
.byu-header {
  font-family: "Vitesee Book";
  font-size: 18px; }
  .byu-header > div > * {
    margin-right: 16px; }
  .byu-header button {
    background-color: #767676;
    color: #ffffff;
    border: none;
    display: inline-block;
    cursor: pointer; }
    .byu-header button.nav-expand {
      background-color: transparent; }
      .byu-header button.nav-expand span.fa {
        font-size: 20px; }
  .byu-header .byu-header-primary {
    background-color: #002e5d;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    flex: 1;
    height: 55px; }
    .byu-header .byu-header-primary .byu-header-title, .byu-header .byu-header-primary #title::slotted(*) {
      white-space: nowrap;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      flex: 1;
      font-family: "Vitesse A", "Vitesse B", Georgia, serif !important;
      font-size: 22px; }
  .byu-header .byu-header-user button {
    background-color: transparent;
    position: relative; }
    .byu-header .byu-header-user button .icon {
      width: 20px;
      height: 20px;
      font-size: 20px;
      vertical-align: middle; }
    .byu-header .byu-header-user button .label {
      font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
      font-weight: 400;
      font-size: 13px;
      text-transform: uppercase; }
  .byu-header .byu-header-search #search-input {
    font-family: "Gotham A", "Gotham B", Helvetica, sans-serif;
    font-weight: 400;
    font-size: 13px;
    color: #002e5d; }
    .byu-header .byu-header-search #search-input::-webkit-input-placeholder {
      color: #c5c5c5;
      opacity: 1; }
    .byu-header .byu-header-search #search-input::-ms-input-placeholder {
      color: #c5c5c5;
      opacity: 1; }
    .byu-header .byu-header-search #search-input::-moz-placeholder {
      color: #c5c5c5;
      opacity: 1; }
  .byu-header .byu-logo {
    height: 48px;
    width: 92px; }

/* FULL SIZE */
@media (min-width: 1024px) {
  .byu-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center; }
    .byu-header.no-nav {
      height: 48px; }
    .byu-header .nav-expand {
      display: none; }
    .byu-header .byu-header-secondary {
      background-color: #002e5d;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 55px; }
      .byu-header .byu-header-secondary .byu-header-search {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center; }
        .byu-header .byu-header-secondary .byu-header-search input {
          border: 1px solid #002e5d;
          border-right: none;
          height: 20px;
          padding: 4px 6px;
          flex: 1;
          width: 217px;
          box-sizing: content-box; }
        .byu-header .byu-header-secondary .byu-header-search button {
          height: 28px;
          width: 30px;
          text-align: center; }
      .byu-header .byu-header-secondary .byu-header-menu-button {
        display: none; } }

/* TABLET SIZE */
@media (max-width: 1023px) {
  .byu-header .byu-header-secondary {
    background-color: #767676;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center; }
    .byu-header .byu-header-secondary > div {
      margin-right: 0;
      height: auto; }
    .byu-header .byu-header-secondary button {
      border-left: 1px solid #ffffff; }
      .byu-header .byu-header-secondary button > span {
        font-size: 17px;
        line-height: 12px; }
    .byu-header .byu-header-secondary .byu-header-user {
      display: none; }
    .byu-header .byu-header-secondary .byu-header-search {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      flex: 1; }
      .byu-header .byu-header-secondary .byu-header-search input {
        flex: 1;
        height: 35px;
        padding-left: 16px;
        box-sizing: border-box; }
      .byu-header .byu-header-secondary .byu-header-search button {
        border-left: none;
        width: 50px; }
    .byu-header .byu-header-secondary .byu-header-user .label {
      display: none; }
    .byu-header .byu-header-secondary .byu-header-user .icon {
      top: 50%;
      left: 50%;
      margin-top: -13px;
      margin-left: -13px; } }

/* PHONE SIZE */

</style>

<link rel="stylesheet" href="/template/bower_components/font-awesome/css/font-awesome.min.css">
<link type="text/css" rel="stylesheet" href="https://cloud.typography.com/75214/6517752/css/fonts.css" media="all" />

<div id="header" class="byu-header">

    <div class="byu-header-primary">
        <img class="byu-logo"" alt="byu.svg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMzkuNyA0MC4zIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMzkuNyA0MC4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xNi42LDE2LjFjMC0wLjQsMC00LjgsMC02LjdjMC0wLjUtMC4xLTAuOS0wLjEtMC45czAuNSwwLjEsMC45LDAuMWMwLjUsMCw1LDAsNSwwYzMuOCwwLDYuMSwwLjYsNi4xLDQuMQ0KCQljMCwyLjMtMS40LDQuMy01LjksNC4zYzAsMC00LjcsMC01LjIsMEMxNywxNywxNi42LDE3LDE2LjYsMTdTMTYuNiwxNi42LDE2LjYsMTYuMXogTTE2LjYsMzEuNGMwLTAuMSwwLTUuNiwwLTcuNw0KCQljMC0wLjUtMC4xLTAuOS0wLjEtMC45czAuNSwwLjEsMC45LDAuMWMwLjUsMCw0LjMsMCw0LjMsMGMzLjQsMCw3LjUsMCw3LjUsNC43YzAsMy41LTMsNC43LTcsNC43YzAsMC00LjcsMC00LjgsMA0KCQljLTAuNSwwLTAuOSwwLjEtMC45LDAuMVMxNi42LDMxLjksMTYuNiwzMS40eiBNNC40LDQuNWwwLDMyLjFjMCwxLDAuMSwxLjQtMC43LDEuOUMzLDM4LjksMi4zLDM5LDEuMSwzOS4yYzAsMCwwLDAsMCwwDQoJCWMtMC4xLDAtMC4xLDAuNSwwLDAuNWMwLjEsMCwyNiwwLDI2LDBjMTEsMCwxNS42LTQuMywxNS42LTExLjFjMC01LTIuMy04LjEtNy05LjJjLTAuMSwwLTAuMS0wLjEsMC0wLjFjMi45LTAuOSw1LjctMy4xLDUuNy04LjMNCgkJYzAtNy4xLTQuOC05LjUtMTUuMi05LjVoLTI1QzEsMS40LDEsMS44LDEuMSwxLjljMCwwLDAsMCwwLDBDMi4zLDIuMSwzLDIuMiwzLjcsMi42QzQuNSwzLjEsNC40LDMuNCw0LjQsNC41eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0xMzUuMyw0LjVjMC0xLTAuMS0xLjQsMC43LTEuOWMwLjctMC40LDEuNS0wLjUsMi43LTAuN2MwLDAsMCwwLDAsMGMwLjEsMCwwLjEtMC41LDAtMC41bC0xOS4yLDANCgkJYy0wLjEsMC0wLjEsMC40LDAsMC41YzAsMCwwLDAsMCwwYzEuMiwwLjIsMS44LDAuMywyLjUsMC43YzAuNywwLjUsMC43LDAuOCwwLjcsMS45djE5LjNjMCw0LjQtMi41LDcuOC03LjUsNy44DQoJCWMtNSwwLTcuNS0zLjQtNy41LTcuOGwwLTE5LjNjMC0xLTAuMS0xLjQsMC43LTEuOWMwLjctMC40LDEuMy0wLjYsMi41LTAuN2MwLDAsMCwwLDAsMGMwLjEsMCwwLjEtMC41LDAtMC41bC0xOC4xLDANCgkJYy0wLjEsMC0wLjEsMC41LDAsMC41YzAsMCwwLDAsMCwwYzAuNywwLDEuMSwwLjEsMS41LDAuNGMwLjYsMC41LDAuNywxLjEsMC43LDIuMmwwLDE5YzAsOS4xLDUsMTYuOSwyMC4yLDE2LjkNCgkJYzE1LjIsMCwyMC4yLTcuOCwyMC4yLTE2LjlWNC41eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03Ny4zLDM5LjdjMC4xLDAsMC4xLTAuNCwwLTAuNWMwLDAsMCwwLDAsMGMtMS4yLTAuMi0xLjktMC4zLTIuNy0wLjdjLTAuNy0wLjUtMC43LTAuOC0wLjctMS45VjI0LjQNCgkJTDg3LjIsNC43YzAuNy0xLjEsMS4yLTEuNiwxLjgtMi4xYzAuMS0wLjEsMC4zLTAuMiwwLjUtMC4zQzkwLDIsOTAuMiwxLjksOTAuOSwxLjljMCwwLDAsMCwwLDBjMC4xLDAsMC4yLTAuNSwwLTAuNWwtMTcuOSwwDQoJCWMtMC4xLDAtMC4xLDAuNSwwLDAuNWMwLDAsMCwwLDAsMGMwLjksMCwxLjksMCwxLjgsMS4zYy0wLjEsMS4yLTUuMyw4LjctNy4xLDExLjVjLTAuMywwLjQtMC41LDAuOC0wLjYsMS4zDQoJCWMtMC4xLTAuNS0wLjQtMS0wLjYtMS4zYy0yLjYtMy44LTYuOS0xMC03LjEtMTEuNWMtMC4xLTEuMywwLjktMS4zLDEuOC0xLjNjMCwwLDAsMCwwLDBjMC4xLDAsMC4yLTAuNSwwLTAuNWwtMTguOCwwDQoJCWMtMC4xLDAtMC4xLDAuNCwwLDAuNWMwLDAsMCwwLDAsMGMwLjgsMC4xLDEuMiwwLDIuMiwwLjVjMC4xLDAuMSwwLjQsMC4yLDAuNSwwLjNjMC42LDAuNSwxLDEsMS43LDJsMTMuMiwxOS42bDAsMTIuMw0KCQljMCwxLDAuMSwxLjQtMC43LDEuOWMtMC43LDAuNC0xLjUsMC41LTIuNywwLjdjMCwwLDAsMCwwLDBjLTAuMSwwLTAuMSwwLjUsMCwwLjVMNzcuMywzOS43eiIvPg0KPC9nPg0KPC9zdmc+DQo="
        />

        <div class="byu-header-title">
            <slot id="title" name="title"></slot>
        </div>
        <button type="button" class="nav-expand" aria-label="Open or close menu" onclick="this.parentElement.parentElement.querySelector('#navbarMenu').assignedNodes()[0].collapsed = !this.parentElement.parentElement.querySelector('#navbarMenu').assignedNodes()[0].collapsed">
            <span class="fa fa-bars"></span>
         </button>
    </div>

    <div id="secondary" class="byu-header-secondary">

        <div class="byu-header-user">
            <button type="button">
                <span class="icon"> 
                    <span class="fa fa-user-circle-o"></span>
                </span>
                <span class="label">Sign in</span>
           </button>
        </div>

        <div class="byu-header-search">
            <slot id="search" name="search"></slot>
        </div>

        <div id="menuTemplate" class="byu-header-menu-button">

        </div>

    </div>

    <slot id="navbarMenu" name="nav">

    </slot>

</div>`);