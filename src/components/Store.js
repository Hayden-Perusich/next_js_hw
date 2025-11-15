import React, { useEffect, useState } from 'react';
import SearchBar from './styles/SearchBar/SearchBar';
import './styles/Store.css';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch('https://fakestoreapi.com/products', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data || []);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message || 'Failed to fetch');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const normalized = (s) => (s || '').toString().toLowerCase();
  const filtered = products.filter((p) => normalized(p.title).includes(normalized(searchTerm)));

  return (
    <div className="store-wrapper">
      <h1>Store</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} placeholder="Search product titles..." />

      {loading && <div className="store-status">Loading products...</div>}
      {error && <div className="store-status error">Error: {error}</div>}

      {!loading && !error && (
        <div className="table-container">
          {filtered.length === 0 ? (
            <div className="no-results">No products match "{searchTerm}"</div>
          ) : (
            <table className="products-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id}>
                    <td className="img-cell">
                      <img src={p.image} alt={p.title} />
                    </td>
                    <td>{p.title}</td>
                    <td>{p.category}</td>
                    <td>${p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Store;
