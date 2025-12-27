import "./ProductCard.css";

function ProductCard({ products, onEdit }) {
  return (
    <div className="card-grid">
      {products.map((p) => (
        <div key={p.id} className="product-card">
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <p>{p.category}</p>

          <button
            className="card-btn"
            onClick={() => onEdit(p)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductCard();