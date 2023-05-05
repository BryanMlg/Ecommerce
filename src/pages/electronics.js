import ProductList from "@containers/ProductList";

export default function electronics() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <h1>Categoría {2}</h1>
      <ProductList categoryId={2} />
    </>
  );
  }
  