// Product
import Products from './../views/Products.vue';
import ProductAdd from './../views/ProductAdd.vue';
import ProductEdit from './../views/ProductEdit.vue';

const routes = [
  { path: '/product', component: Products },
  { path: '/product/add', component: ProductAdd },
  { path: '/product/:id/edit', component: ProductEdit },
];

export default routes;
