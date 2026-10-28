import { useState, useMemo } from 'react'
import './App.css'
import Header from "./components/Header.tsx";
import Newsletter from "./components/Newsletter.tsx";
import Footer from "./components/Footer.tsx";
import {products} from "./data/products.ts";
import CategoryFilter from "./components/CategoryFilter.tsx";
import ProductGrid from "./components/ProductGrid.tsx";
import type { Product} from "./types";
import { useCart } from "./hooks/cart";
import { useToast } from "./hooks/toast";
import ToastContainer from "./components/ToastContainer.tsx";

const categories = [...new Set(products.map((product) => product.category))];

function App() {
  // array of checked categories and function that updates it
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  // query and function that updates search query, initial value is empty
  const [query, setQuery] = useState("");
  // functions used from cart hook
  const { cartCount, addToCart } = useCart();
  // functions used from toast hook
  const { toasts, showToast } = useToast();

  // same filter from previous workshop, combines both search query and category filtering
  const filteredProducts = useMemo(() => {
      const userQuery = query.trim().toLowerCase();
      return products.filter((product) => {
          const categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(product.category);
          const queryMatch = userQuery === "" || product.name.toLowerCase().includes(userQuery);
          return categoryMatch && queryMatch;
      });
  }, [query, checkedCategories]);

  // used when adding to cart - adds item to cart, updates quantity and shows success toast
  function handleAdd(product: Product) {
      addToCart(product.id);
      showToast(`${product.name} added to cart`);
  }

  return (
    <>
    <Header query={query} onQueryChange={setQuery} cartCount={cartCount} />
        {/* main section used to 'link' category filter box and product grid */}
    <main className="mx-auto grid grid-cols-1 lg:grid-cols-[20rem_minmax(0,1fr)] gap-6 w-full lg:w-3/5 px-4 py-6 sm:px-6 lg:px-8 lg:items-start">
    <CategoryFilter categories={categories} products={products} selected={checkedCategories} onChange={setCheckedCategories} />
    <ProductGrid products={filteredProducts} onAdd={handleAdd} />
    </main>
    <Newsletter />
    <Footer />
        <ToastContainer toasts={toasts} />
    </>
  )
}

export default App
