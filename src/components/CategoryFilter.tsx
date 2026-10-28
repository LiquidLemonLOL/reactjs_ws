import type { Product } from "../types";

type CategoryFilterProps = {
    categories: string[];
    products: Product[];
    selected: string[];
    onChange: (categories: string[]) => void;
};

const CategoryFilter = ({ categories, products, selected, onChange }: CategoryFilterProps) => {

    /* Same toggle as previous workshop + TS spread operator , when toggles change (checkbox clicked) -
    check if category selected, adds if not, removes if it is. filter keeps any category not named the
     specified category, [...selected, category] joins category to selected array
     */
    const toggle = (category: string) =>
        onChange(selected.includes(category) ? selected.filter((selectedCategory) => selectedCategory !== category) : [...selected, category]
        );

    // reusable class for checkboxes
    const checkBoxClass = "category-filter h-[1.125rem] w-[1.125rem] rounded-[0.375rem] border border-slate-200 accent-blue-600 cursor-pointer"

    return (
        <aside className="lg:sticky lg:top-20 self-start">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                <section aria-labelledby="filters-categories" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 id="filters-categories" className="text-sm font-bold text-slate-900">Categories</h2>
                        <button
                            type="button"
                            aria-label="Filters"
                            className="lg:hidden text-slate-400 hover:text-blue-600 transition-colors">
                        </button>
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            {/* reused checkbox class, shows all categories by resetting any filters, show all
                             categories on change */}
                            <input type="checkbox"
                                   value="all"
                                   className={checkBoxClass}
                                   checked={selected.length === 0}
                                   onChange={() => onChange([])}
                            />
                            <span className="flex-1 text-sm text-slate-700">
                                All Products{" "}
                            <span className="text-slate-400 font-normal">{products.length}</span></span>
                        </label>

                        {categories.map((category) => (
                            <label key={category} className="flex items-center gap-3 cursor-pointer select-none">
                                {/* checked is true if selected categories include specified category, calls
                                 filtering upon change */}
                                <input type="checkbox"
                                       className={checkBoxClass}
                                       checked={selected.includes(category)}
                                       onChange={() => toggle(category)}
                                />
                                <span className="flex-1 text-sm text-slate-700 font-medium">
                                    {category}{" "}
                                    <span className="text-slate-400 font-normal">
                                        ({products.filter((product) => product.category === category).length})
                                    </span>
                                </span>
                            </label>
                        ))}
                    </div>
                </section>
                <div className="my-5 h-px bg-slate-100"></div>

                <section aria-labelledby="filters-price" className="space-y-3">
                    <h2 id="filters-price" className="text-sm font-bold text-slate-900">Price Range</h2>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>0 kr</span>
                        <span>1800 kr</span>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="1800"
                        value="900"
                        className="w-full accent-blue-500"
                        aria-label="Price range"
                    />
                </section>

                <div className="my-5 h-px bg-slate-100"></div>

                <section aria-labelledby="filters-availability" className="space-y-4">
                    <h2 id="filters-availability" className="text-sm font-bold text-slate-900">Availability</h2>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox"
                                   className={checkBoxClass}/>
                            <span className="flex-1 text-sm text-slate-700">In Stock</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input type="checkbox"
                                   className={checkBoxClass}/>
                            <span className="flex-1 text-sm text-slate-700">On Sale</span>
                        </label>
                    </div>
                </section>

                <section className="mt-6">
                    <div
                        className="rounded-[1.25rem] bg-gradient-to-br from-blue-600 to-amber-500 text-white overflow-hidden relative before:content-[''] before:absolute before:-top-[20%] before:-right-[10%] before:w-[200px] before:h-[200px] before:bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)] before:rounded-full p-6">
                        <h3 className="text-lg font-bold text-white">Summer Sale</h3>
                        <p className="mt-2 text-sm leading-relaxed opacity-90 text-white">
                            Get up to 50% off on all summer collections. Limited time offer!
                        </p>
                        <button type="button"
                                className="inline-flex items-center justify-center gap-2 rounded-[0.75rem] px-5 py-2.5 font-semibold bg-white text-blue-600 transition-all duration-200 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-px mt-6 w-full shadow-lg border-none">
                            Shop Now
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    );
}

export default CategoryFilter;