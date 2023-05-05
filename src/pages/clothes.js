import ProductList from "@containers/ProductList";

export default function clothes() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <h1>Categoría {1}</h1>
      <ProductList categoryId={1} />
    </>
  );
  }
  