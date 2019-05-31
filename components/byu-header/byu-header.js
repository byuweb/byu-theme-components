import { LitElement, html, customElement, property } from 'lit-element';
import style from './byu-header.scss';

@customElement('byu-header')
export class BYUHeader extends LitElement {

  @property()
  foo = 'header property';

  static styles = style;
  render(){
    return html`
   <header role="banner" class="byu-header">
        <div class="byu-site-banner">

            <a class="byu-link" href="https://byu.edu">
                <span class="visually-hidden">BYU</span>
            </a>

            <div class="byu-titles">

                <h1 class="byu-site-title">
                    <a href="/">Life Sciences</a>
                </h1>

                <button class="byu-menu-button" aria-expanded="false">Menu</button>

            </div>

            <div class="byu-action-id-search">

                <form class="byu-search" action="/">
                    <label class="byu-search-label" for="site-search">Search</label>
                    <input type="search" id="byu-site-search" name="q" aria-label="Site search" placeholder="Search">
                    <button class="byu-search-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <style>.st{stroke-width:10;fill:none;stroke:currentColor;stroke-linecap:round;}</style>
                            <circle class="st" cx="45.5" cy="45.5" r="24.5"/><path class="st" d="M63 63l16 16"/>
                        </svg>
                    </button>
                </form>

            </div>
        </div>

        <nav class="byu-site-navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/programs">Majors &amp; Programs</a></li>
                <li><a href="/students">Students</a></li>
                <li><a href="/alumni">Alumni</a></li>
                <li><a href="/giving">Giving</a></li>
            </ul>
        </nav>

    </header>

    `;
  }
}
