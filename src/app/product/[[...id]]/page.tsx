import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (id === undefined || id.length === 0) {
    return <div>Product List or Default View</div>;
  }

  if (Array.isArray(id)) {
    if (id.length === 1) {
      return <div>Product ID: {id[0]}</div>;
    } else if (id.length === 2) {
      const [productId, section] = id;
      return (
        <div>
          <h1>Product ID: {productId}</h1>
          <h2>Section: {section}</h2>
        </div>
      );
    }
  }

  return <div>Loading...</div>;
};

export default ProductDetail;
