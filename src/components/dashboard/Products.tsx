// src/pages/Products.tsx
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Laptop', price: 49.99, stock: 10, category: 'Electronics' },
    { id: 2, name: 'Desktop', price: 29.99, stock: 5, category: 'Electronics' },
    { id: 3, name: 'Smart TV', price: 99.99, stock: 8, category: 'Electronics' },
  ]);

  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    stock: 0,
    category: '',
  });

  const handleAddProduct = () => {
  if (!newProduct.name || newProduct.price <= 0) return;

  // Auto-increment ID
  const nextId =
    products.length > 0
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;

  const productToAdd: Product = { ...newProduct, id: nextId };
  setProducts([...products, productToAdd]);
  setNewProduct({ name: '', price: 0, stock: 0, category: '' });
};


  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleUpdateProduct = (id: number, updatedProduct: Partial<Product>) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* Add New Product */}
      <div className="mb-6 p-4 bg-gray-50 rounded shadow">
        <h2 className="font-semibold mb-2">Add New Product</h2>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Name"
            className="border px-2 py-1 rounded"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            className="border px-2 py-1 rounded"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
            }
          />
          <input
            type="number"
            placeholder="Stock"
            className="border px-2 py-1 rounded"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="Category"
            className="border px-2 py-1 rounded"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          />
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price ($)</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{product.id}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">${product.price.toFixed(2)}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3 space-x-2">
                  <button
                    className="px-3 py-1 text-sm bg-yellow-400 text-white rounded hover:bg-yellow-500"
                    onClick={() =>
                      handleUpdateProduct(product.id, {
                        name: product.name + ' Updated',
                      })
                    }
                  >
                    Update
                  </button>
                  <button
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="p-3 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
