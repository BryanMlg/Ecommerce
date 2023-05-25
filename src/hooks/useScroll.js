import { useEffect, useState } from "react";
export default function UseScroll (){
    const [numProductsToShow, setNumProductsToShow] = useState(12);
  useEffect(() => {
    function handleScroll() {
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setNumProductsToShow(numProductsToShow + 8);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [numProductsToShow]);
  return numProductsToShow;
}