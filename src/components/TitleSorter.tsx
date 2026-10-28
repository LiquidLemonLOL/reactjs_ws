
const TitleSorter = () => {
    return (
        <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>

                <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <span className="hidden sm:inline">Sort by:</span>
                    <div className="relative">
                        <select
                            className="appearance-none border border-slate-200 bg-white rounded-[0.75rem] py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                            <option selected>Newest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Best Selling</option>
                        </select>
                        <span
                            className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path
                            d="m6 9 6 6 6-6"/></svg>
                    </span>
                    </div>
                </label>
            </div>
            <div className="mt-5 h-px bg-slate-100"></div>
        </>
    );
}

export default TitleSorter;

