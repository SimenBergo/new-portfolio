import { component$, Slot, seStylesScoped$ } from '@builder.io/qwik';
import { SocialIcon } from 'react-social-icons';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <div className='footer-content' >
      <p>My links: </p>
      <div id="links">
      <SocialIcon url="https://github.com/SimenBergo" target="_blank" rel="noreferrer" fgColor="#BB3434" bgColor="#000000"/>
      <SocialIcon url="https://www.linkedin.com/in/simen-toker%C3%B8d-bergo-301491227/" target="_blank" rel="noreferrer" fgColor="#BB3434" bgColor="#000000"/>
      <SocialIcon url="mailto:bergo.simen@gmail.com" network="email" target="_blank" rel="noreferrer" fgColor="#BB3434" bgColor="#000000"/>
      </div>
      </div>
      </footer>
    </>
  );
});
