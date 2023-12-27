import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard.tsx/ProductCard";
import ProductService from "../../services/ProductService";
import { ProductModel } from "../../models/responses/ProductModel";

type Props = {};

export const Homepage = (props: Props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    ProductService.getAll().then((response: any) => {
      setProducts(response.data.products);
    });
  };

  const onProductDelete = (id: number) => {
    setProducts(products.filter((i) => i.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
            <ProductCard onDelete={onProductDelete} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};