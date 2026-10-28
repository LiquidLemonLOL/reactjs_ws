import { ShoppingCart, Eye, Plus, Heart, Star } from 'lucide-react';
import type { Product } from "../types";

type ProductCardProps = {
    product: Product;
    onAdd: (product: Product) => void;
}

// formats price to set style and SEK
const formatPrice = (price: number) =>
    new Intl.NumberFormat('sv-SE', {style: 'currency', currency: 'SEK'}).format(price);

const ProductCard = ({ product, onAdd }: ProductCardProps) => {
    return (
        <article
            className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">

            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img src={product.image} alt={product.name}
                     className="aspect-4/5 w-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div
                    className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                            aria-label="Quick View">
                        <Eye/>
                    </button>
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                            aria-label="Add to cart">
                        <Plus/>
                    </button>
                </div>
                <span
                    className="absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border border-slate-800 bg-slate-950 text-slate-200 backdrop-blur-md">{product.badge}</span>
                <button type="button"
                        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                        aria-label="Add to favorites" title="Favorite">
                    <Heart/>
                </button>
            </div>

            <div className="mt-4 px-1 pb-2 space-y-1">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {product.category}</p>
                    <div className="flex items-center gap-1">
                        <Star size={10} color="gold" strokeWidth={4} />
                        <span className="text-[10px] font-bold text-slate-400">{product.rating}</span>
                    </div>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}</h3>
                <p className="text-[11px] font-medium text-slate-500">{product.availability}</p>
                <div className="flex items-center justify-between gap-3 pt-3">
                    <span className="text-lg font-black text-slate-900 tracking-tight">{formatPrice(product.price)}
                    </span>
                    <button type="button" onClick={() => onAdd(product)}
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                            aria-label="Add to cart">
                        <ShoppingCart size={14}/>
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ProductCard;
