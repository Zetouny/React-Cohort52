import products from "../assets/fake-data/all-products.js";

function Products({ filter }) {
  const filterProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  const productsList = filterProducts.map((product) => (
    <div className="product" key={product.id}>
      <img className="product-image" src={product.image} />
      <p className="product-title">{product.title}</p>
    </div>
  ));

  return <div id="products-list">{productsList}</div>;
}

export default Products;
