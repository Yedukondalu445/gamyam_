import { useEffect, useState } from "react";
import "./SearchBar.css";


function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value, setSearch]);

  return (
    <input className="search-input"

      placeholder="Search product..."
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}
export default SearchBar();