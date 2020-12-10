// Category
import Categories from './../views/Categories.vue';
import CategoryEdit from './../views/CategoryEdit.vue';


const routes = [
  { path: '/category', component: Categories },
  { path: '/category/:id/edit', component: CategoryEdit },
];

export default routes;
