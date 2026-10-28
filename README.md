# Workshop 1 – ReactJS (Components & Props)

* which components you created
* the purpose of each component
* which props are passed between components
* why you used props
* how the components work together

## Components:

* ### Footer, Header, Newsletter

Simple components added from the index and previous workshop to clean up the setup in App.tsx, Header displays CartCount
which is tracked in App.tsx along with tracking possible search queries and changes to its target value whenever any
change is made. All other components are changed to use lucide react icons wherever needed and uses reused classes to
reduce instances of the same code.

* ### CategoryFilter, ProductCard, ProductGrid, ToastContainer

Product grid gets passed the ProductCards and houses them along with pagination and title + sorting parts, and these
all within the same component to once clean somewhat clean up the setup since they operate on the same products.
Props of product are passed to all but ToastContainer and used to more easily loop along the different products,
product itself has had badge and rating included to reduce hardcoded values within return statements in the components.
Toasts and cart items are included in types.ts and while they are not widely used, several extensions to the functionality
of the page would be including them, be it actively viewing a cart apart from seeing its count, toast history,
logging etc. 

ProductCard is housed within the ProductGrid while the Category is linked to the grid position-wise within App.tsx to
keep its position and size relative to each other.

TODO, slightly optional: 
* still extended functionality from previous workshop, which would in tandem reduce reused classes + more shared props
* Small CSS tweaks
* Research how App.tsx usually look, how much functionality or tracking is used or if these are also housed elsewhere


