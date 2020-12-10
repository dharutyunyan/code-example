import VueRouter from 'vue-router';

const routes = [
];
const router = new VueRouter({
  routes,
  linkActiveClass: "active-sidebar",
  linkExactActiveClass: "exact-active",
});

export default router;

//localStorage.removeItem('token');
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicviews = ['/login', '/register'];
  const authRequired = !publicviews.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});
