import { useFetchProduct } from "../custom hooks/useFetchProduct";

const ProductDetails = () => {
  const { products, loading, error } = useFetchProduct();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div >
          {products.map((product) => (
              <div key={product.id} >
                <img src={product.thumbnail} alt='' />
              </div>
          ))}
      </div>
  );
};

export default ProductDetails;
