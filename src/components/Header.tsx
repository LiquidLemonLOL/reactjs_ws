import { Package, ShoppingBag, User, Search } from 'lucide-react';

type HeaderProps = {
    query: string;
    cartCount: number;
    onQueryChange: (query: string) => void;
};

const Header = ( {query, cartCount, onQueryChange}: HeaderProps) => {
    return (
        <header className="w-full items-center justify-between sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto flex w-full items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex h-16 items-center justify-between">
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
              <Package />
            </span>
                        <span className="text-xl tracking-tighter uppercase font-black px-6">
                            LITE.SHOP
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100 px-6">
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">New Arrival</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Men</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Women</a>
                        <a className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-[2px] after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full"
                           href="#">Sale</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <div
                            className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                    <span className="relative flex h-2 w-2">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                    </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                        </div>

                        <div className="relative hidden sm:block">
                            <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-200/60"/>
                            <input id="search-input"
                                   type="text"
                                   value={query}
                                   onChange={(e) => onQueryChange(e.target.value)}
                                   placeholder="Search products..."
                                   className="h-10 w-48 rounded-xl bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none" />
                        </div>

                        <button type="button"
                                className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Cart" title="Cart">
                            <ShoppingBag />
                            {cartCount > 0 && (
                                <span id="cart-count"
                                className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center
                                justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                                {cartCount}
                            </span>
                            )}
                        </button>
                        <button type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Account" title="Account">
                            <User />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;