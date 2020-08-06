import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREASE_ITEM,
  DETIAL_INCREASE_ITEM,
  DETIAL_DECREASE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART,
  DETIAL_ITEM,
  ADDTOCART,
  ADD_WISHLIST_PRODUCT,
  INCREASE_WISHLIST_PRODUCT,
  DECREASE_WISHLIST_PRODCUT,
  WISHLIST_REMOVE_ITEM,
  ADD_MODAL_PRODUCT,
  MODAL_INCREASE_ITEM,
  MODAL_DECREASE_ITEM,
  REQUEST_BUTTON_CLICK
} from '../actions/types';

const initialState = {
  products: [],
  Detail_Products: [],
  // ModalProduct_Products: [],
  Wishlist_Products: [],
  productTotal: 0,
  total: 0,
  Detail_total: 0,
  Wishlist_total: 0,
  ModalProduct_total: 0,
  WishlistproductTotal: 0,
  ModalProducts: [],
  ModalProductTotal: 0,
  btnClick: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      let aNewProducts = [...state.products, action.product];
      let aNewTotal = 0;

      aNewProducts.forEach(product => {
        aNewTotal += product.quantity * product.products_price;
      });
      return {
        ...state,
        products: aNewProducts,
        total: aNewTotal
      };

    case REMOVE_ITEM:
      const rNewProducts = state.products.filter(
        p => p.id !== action.product.id
      );
      let rNewTotal = 0;
      rNewProducts.forEach(product => {
        rNewTotal += product.quantity * product.products_price;
      });
      console.log('reduces remove to cart');

      return {
        ...state,
        products: rNewProducts,
        total: rNewTotal
      };

    case INCREASE_ITEM:
      // for increse product price
      let seletedproduct = action.product;
      const prodPrice = seletedproduct.products_price;
      const prodQTY = seletedproduct.quantity + 1;

      let iNewProducts = state.products.map((product, index) => {
        if (action.index === index) {
          return Object.assign({}, product, { quantity: action.quantity });
        }
        return product;
      });
      let iNewTotal = 0;

      iNewProducts.forEach(product => {
        iNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        products: iNewProducts,
        total: iNewTotal,
        productTotal: prodPrice * prodQTY
      };

    case DECREASE_ITEM:
      let dNewProducts = state.products.map((product, index) => {
        if (action.index === index) {
          return Object.assign({}, product, { quantity: action.quantity });
        }
        return product;
      });
      let dNewTotal = 0;
      dNewProducts.forEach(product => {
        dNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        products: dNewProducts,
        total: dNewTotal
      };

    //////////////////////////////////////////
    //  for detail page of producs
    case DETIAL_ITEM:
      console.log('detail item fucntion called', action.product);
      return {
        ...state,
        //products: [],
        Detail_Products: [action.product]
      };

    case DETIAL_INCREASE_ITEM:
      // for increse product price
      let Detailseletedproduct = action.product;
      const DetailprodPrice = Detailseletedproduct.products_price;
      const DetailprodQTY = Detailseletedproduct.quantity + 1;

      let iDetailNewProducts = state.Detail_Products.map((product, index) => {
        if (action.index === index) {
          return Object.assign({}, product, { quantity: action.quantity });
        }
        return product;
      });
      let iDetailNewTotal = 0;

      iDetailNewProducts.forEach(product => {
        iDetailNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        Detail_Products: iDetailNewProducts,
        Detail_total: iDetailNewTotal,
        DetailproductTotal: DetailprodPrice * DetailprodQTY
      };

    case DETIAL_DECREASE_ITEM:
      let dDetailNewProducts = state.Detail_Products.map((product, index) => {
        if (action.index === index) {
          return Object.assign({}, product, { quantity: action.quantity });
        }
        return product;
      });
      let dDetailNewTotal = 0;
      dDetailNewProducts.forEach(product => {
        dDetailNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        // products: [],
        Detail_Products: dDetailNewProducts,
        Detail_total: dDetailNewTotal
      };

     case REQUEST_BUTTON_CLICK:
      return{
        ...state,
        btnClick: true
      }


    //////////////////////////////////////////
    //  for WishList page of producs
    case ADD_WISHLIST_PRODUCT:
      console.log('detail item fucntion called', action.product);
      return {
        ...state,
        Wishlist_Products: [...state.Wishlist_Products, action.product]
      };

    case INCREASE_WISHLIST_PRODUCT:
      // for increse product price
      let Wishlistseletedproduct = action.product;
      const WishlistprodPrice = Wishlistseletedproduct.products_price;
      const WishlistprodQTY = Wishlistseletedproduct.quantity + 1;

      let iWishlistNewProducts = state.Wishlist_Products.map(
        (product, index) => {
          if (action.index === index) {
            return Object.assign({}, product, { quantity: action.quantity });
          }
          return product;
        }
      );
      let iWishlistNewTotal = 0;

      iWishlistNewProducts.forEach(product => {
        iWishlistNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        Wishlist_Products: iWishlistNewProducts,
        Wishlist_total: iWishlistNewTotal,
        WishlistproductTotal: WishlistprodPrice * WishlistprodQTY
      };

    case DECREASE_WISHLIST_PRODCUT:
      let dWishlistNewProducts = state.Wishlist_Products.map(
        (product, index) => {
          if (action.index === index) {
            return Object.assign({}, product, { quantity: action.quantity });
          }
          return product;
        }
      );
      let dWishlistNewTotal = 0;
      dWishlistNewProducts.forEach(product => {
        dWishlistNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        //products: [],
        Wishlist_Products: dWishlistNewProducts,
        Wishlist_total: dWishlistNewTotal
      };

    case WISHLIST_REMOVE_ITEM:
      const rWishlistNewProducts = state.Wishlist_Products.filter(
        p => p.id !== action.product.id
      );
      let rWishlistNewTotal = 0;
      rWishlistNewProducts.forEach(product => {
        rWishlistNewTotal += product.quantity * product.products_price;
      });
      console.log('reduces remove to cart');

      return {
        ...state,
        Wishlist_Products: rWishlistNewProducts,
        Wishlist_total: rWishlistNewTotal
      };

    ////////////////////////////////////////////////

    //////////////////////////////////////////
    //  for modal of producs

    case ADD_MODAL_PRODUCT:
      return {
        ...state,
        ModalProducts: [action.product]
      };

    case MODAL_INCREASE_ITEM:
      // for increse product price
      let ModalProductseletedproduct = action.product;
      const ModalProductprodPrice = ModalProductseletedproduct.products_price;
      const ModalProductprodQTY = ModalProductseletedproduct.quantity + 1;

      let iModalProductNewProducts = state.ModalProducts.map(
        (product, index) => {
          if (action.index === index) {
            return Object.assign({}, product, { quantity: action.quantity });
          }
          return product;
        }
      );
      let iModalProductNewTotal = 0;

      iModalProductNewProducts.forEach(product => {
        iModalProductNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        ModalProducts: iModalProductNewProducts,
        ModalProduct_total: iModalProductNewTotal,
        ModalProductTotal: ModalProductprodPrice * ModalProductprodQTY
      };

    case MODAL_DECREASE_ITEM:
      let dModalProductNewProducts = state.ModalProducts.map(
        (product, index) => {
          if (action.index === index) {
            return Object.assign({}, product, { quantity: action.quantity });
          }
          return product;
        }
      );
      let dModalProductNewTotal = 0;
      dModalProductNewProducts.forEach(product => {
        dModalProductNewTotal += product.quantity * product.products_price;
      });

      return {
        ...state,
        // products: [],
        ModalProducts: dModalProductNewProducts,
        ModalProduct_total: dModalProductNewTotal
      };

    case CLEAR_CART:
      return {
        products: [],
        Detail_Products: [],
        // ModalProduct_Products: [],
        Wishlist_Products: [],
        productTotal: 0,
        total: 0,
        Detail_total: 0,
        Wishlist_total: 0,
        ModalProduct_total: 0,
        WishlistproductTotal: 0,
        ModalProducts: [],
        ModalProductTotal: 0
      };
    ////////////////////////////////////////

    case ADDTOCART:
      // save product to localstorage
      localStorage.setItem('cartItem', JSON.stringify(state.products));

    

    default:
      return state;
  }
}
