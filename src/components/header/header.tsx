import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import logo from '/logo.svg'
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="content">
      <div class="logo">
      {/*<h1>
        Simen Bergo <span class="lightning">⚡️</span>
  </h1>*/}
      <img src={logo} alt='Logo' class='myLogo'/>
      </div>
      <div class="links">
      <div class="header-link">
      <Link  href="#projects">
      <p>Projects</p>
      </Link>
      </div>
      <div class="header-link">
      <Link class="header-link" href="#bio">
      <p>Bio</p>
      </Link>
      </div>
      <div class="header-link">
      <Link class="header-link" href="https://drive.google.com/file/d/1nn_N17sIzqVyg6mABYbUhA4nYML7dHl1/view?usp=sharing" target="_blank">
        <p>Resume</p>
      </Link>
      </div>
      </div>
      </div>
    </header>
  );
});
