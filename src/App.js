import { useEffect, useState } from "react";
import { productsData } from "./data/products";
import ProductTable from "./components/ProductTable";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Toast from "./components/Toast";

const ITEMS_PER_PAGE = 7;

function App() {
  const [products, setProducts] = useState(productsData);
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [editProduct, setEditProduct] = useState(null);


  const [toast, setToast] = useState({
    message: "",
    type: "info",
  });

  useEffect(() => {
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
    setCurrentPage(1);
  }, [search, products]);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  
  const showToast = (message, type = "info") => {
    setToast({ message, type });
  };

  const handleSave = (product) => {
    if (editProduct) {
      setProducts(
        products.map((p) => (p.id === product.id ? product : p))
      );
      showToast("Product updated successfully", "success");
    } else {
      setProducts([...products, { ...product, id: Date.now() }]);
      showToast("Product added successfully", "success");
    }
    setEditProduct(null);
  };

  return (
    <div className="container">
      <h2>Product Management</h2>

      <SearchBar setSearch={setSearch} />

      <ProductForm onSave={handleSave} editProduct={editProduct} showToast={showToast}/>

  
      <button
        className={`toggle-btn ${view === "card" ? "active" : ""}`}
        onClick={() => setView(view === "table" ? "card" : "table")}
      >
        {view === "table" ? "Card View" : "Table View"}
      </button>

      {view === "table" ? (
        <ProductTable products={paginated} onEdit={setEditProduct} />
      ) : (
        <ProductCard products={paginated} onEdit={setEditProduct} />
      )}

      <Pagination
        total={filtered.length}
        perPage={ITEMS_PER_PAGE}
        current={currentPage}
        setCurrent={setCurrentPage}
      />

    
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />
    </div>
  );
}

export default App;
