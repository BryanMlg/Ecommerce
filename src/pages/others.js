import ProductList from "@containers/ProductList";

export default function shoes() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <h1>Categoría {5}</h1>
      <ProductList categoryId={5} />
    </>
  );
  }
  