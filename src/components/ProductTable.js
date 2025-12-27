import "./ProductTable.css";

function ProductTable({ products, onEdit }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>₹{p.price}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
            <td>
              <button  className="table-btn" onClick={() => onEdit(p)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ProductTable();