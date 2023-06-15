import { useEffect, useState } from "react";
export default function UseScroll (Start){
    const [numProductsToShow, setNumProductsToShow] = useState(Start);
  useEffect(() => {
    function handleScroll() {
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setNumProductsToShow(numProductsToShow + Start);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [Start, numProductsToShow]);
  return numProductsToShow;
}