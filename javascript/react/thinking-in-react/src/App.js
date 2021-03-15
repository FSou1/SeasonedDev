import { useState } from 'react';
import './index.css';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

function App() {
  const [filterText, setText] = useState('');
  const [inStock, setInStock] = useState(false);

  const products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ];

  function onFilterTextChange(text) {
    setText(text);
  }

  function onInStockChange(value) {
    setInStock(value);
  }

  return (
    <div className="container">
      <h1>Product List</h1>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={onFilterTextChange}
        onInStockChange={onInStockChange} />
      <ProductTable data={products}
        filterText={filterText}
        inStockOnly={inStock} />
      <h2>Buttons</h2>
      <button>Add product</button>
      <button>Cancel</button>
    </div>
  );
}

export default App;
