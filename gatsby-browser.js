import './src/components/fonts.css';

//Intersection observer polyfill
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};