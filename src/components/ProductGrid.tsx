import ProductCard from "./ProductCard";
import type { Product } from "../types";
import { ChevronDown, ChevronRight, ChevronLeft, Ellipsis } from "lucide-react";

type ProductGridProps = {
    products: Product[];
    onAdd: (product: Product) => void;
}

const ProductGrid = ({ products, onAdd }: ProductGridProps)=>  {
    if (products.length === 0) {
        return <p className="text-center text-slate-600">No products found.</p>;
    }

    return (
        <section className="min-w-0 border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-extrabold tracking-tight text-slate-900">Recommended for you</h2>

                <label className="inline-flex items-center gap-4 text-sm text-slate-600">
                    <span className="hidden sm:inline">Sort by:</span>
                    <div className="relative">
                        <select
                            defaultValue="newest" className="appearance-none bg-white rounded-[0.75rem] py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                            <option value="newest">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="best-selling">Best Selling</option>
                        </select>
                        <span
                            className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                        <ChevronDown/>
                    </span>
                    </div>
                </label>
            </div>
            <div className="mt-5 h-px bg-slate-100"></div>
            <div id="product-grid" className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onAdd={onAdd}/>
                ))}
            </div>
            <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
                <button type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                        aria-label="Previous page" title="Previous">
                    <ChevronLeft />
                </button>

                <button type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200"
                        aria-current="page">1
                </button>
                <button type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                    2
                </button>
                <button type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                    3
                </button>
                <span className="px-2 text-sm text-slate-400">
                    <Ellipsis />
                </span>
                <button type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50">
                    12
                </button>

                <button type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50"
                        aria-label="Next page" title="Next">
                    <ChevronRight />
                </button>
            </nav>
        </section>
    );
}

export default ProductGrid;