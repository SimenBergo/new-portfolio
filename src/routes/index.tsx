import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import styles from '../styles/index.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const helloMessage = 'Welcome to my portfolio'
  
  
/*   fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => {
    const data = useStore(json);
  }); */

  return (
    <div class="main-content">
      <h2>{helloMessage}</h2>
      <Link class="mindblow" href="/flower">
        Blow my mind 🤯
      </Link>
      <div>
        {/* {data.map((item: any) => {

        })} */}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
