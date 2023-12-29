import React from "react";
import { ProductModel } from "../../models/responses/ProductModel";
import { Link } from "react-router-dom";
import ProductService from "../../services/productService";
import { HttpStatusCode } from "axios";

type Props = {
  product: ProductModel;
  onDelete: (id: number) => void;
  title?: string;
};

const ProductCard = (props: Props) => {
  const deleteProduct = async () => {
    try {
      let response = await ProductService.delete(props.product.id);
      if ((response.status = HttpStatusCode.Ok))
        props.onDelete(props.product.id);
    } catch (e) {
      alert("ürün silinemedi");
    }
  };

  return (
    <div>
      <div className="card">
        <img src={props.product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">{props.product.description}</p>
          <p>{props.product.price}₺</p>
          <Link
            to={"/product-detail/" + props.product.id}
            className="btn btn-primary"
          >
            Detaylar
          </Link>
          <button
            onClick={() => {
              deleteProduct();
            }}
            className="btn btn-danger"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
