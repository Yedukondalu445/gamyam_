import { useEffect, useState } from "react";
import "./ProductForm.css";

function ProductForm({ onSave, editProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: ""
  });

  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (editProduct) {
      setForm(editProduct);
    }
  }, [editProduct]);

  
  const validate = () => {
    let err = {};

    if (!form.name) err.name = "Name is required";
    if (!form.price) err.price = "Price is required";
    if (!form.category) err.category = "Category is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  
  const submit = () => {
    if (validate()) {
      onSave(form);

      if (editProduct) {
        alert("Successfully updated the data");
      }

    
      setForm({
        name: "",
        price: "",
        category: "",
        stock: "",
        description: ""
      });
    }
  };

  return (
    <div className="form-box">
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />
      {errors.price && <span className="error">{errors.price}</span>}

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      />
      {errors.category && <span className="error">{errors.category}</span>}

      <input
        type="number"
        placeholder="Stock"
        value={form.stock}
        onChange={e => setForm({ ...form, stock: e.target.value })}
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />

      <button onClick={submit}>
        {editProduct ? "Update" : "Add"}
      </button>
    </div>
  );
}
export default ProductForm();