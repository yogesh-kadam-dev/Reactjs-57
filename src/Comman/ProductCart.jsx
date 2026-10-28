import { Link } from "react-router-dom";

function ProductCart(props) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md">

      <Link to={`/product_det/${props.data.product_tbl_id}`}>
        <div className="relative flex h-70 items-center justify-center p-4">
          <img
            src={props.data.product_img}
            alt={props.data.product_name}
            className="h-full w-full object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/shirt.jpg";
            }}
          />
        </div>

        <div className="p-5">
          <h2 className="mt-1 text-lg text-gray-800">
            {props.data.product_name} 
          </h2>

          <div className="mt-3">
            <span className="text-xl font-bold text-black">
              ₹{props.data.price}
            </span>
          </div>
        </div>
      </Link>

      <div className="px-5 pb-5">
        <button
          type="button"
          className="w-full rounded-md bg-blue-700 py-2 text-sm text-white transition hover:bg-blue-800"
        >
          Buy Now
        </button>
      </div>

    </div>
  );
}

export default ProductCart;