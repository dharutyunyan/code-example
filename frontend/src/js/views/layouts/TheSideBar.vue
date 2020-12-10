<template>
    <div id="sidebar-container" class="sidebar-expanded d-md-block collapse show-md">
        <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
          <!-- Bootstrap List Group -->
          <a class="d-md-none m-2" type="button" data-toggle="collapse" data-target="#sidebar-container"
          aria-controls="sidebar-container" aria-expanded="false" aria-label="Toggle navigation">
              <span class="dark-blue-text">
                  <img src="src/img/icons/close.svg" />
              </span>
          </a>
          <ul class="list-group ams-menu">
              <!-- Separator with title -->
              <!-- Logo -->
                <li class="list-group-item logo-separator d-flex justify-content-center">
                    <router-link class="navbar-brand" to="">DIGITAL MENU</router-link>
                </li>
              <!-- /END Separator -->
              <!-- Menu with submenu -->
              <sidebar-nav-link v-for="item in menuItems" :menuItem="item" :key="item.id"></sidebar-nav-link>

          </ul><!-- List Group END-->
      </div>
</template>

<script>
    import sideBarNavLink from './sidebar/NavLink.vue';
    export default {
      name : 'sidebar',
      components: {
          'sidebar-nav-link': sideBarNavLink,
      },
      data: function() {
        return {
            menuItems: [
                {
                    label: "Home",
                    hasChld: false,
                    href: '/',
                    isActive:true,
                    id: 'home'
                },
                {
                    label: "Menu",
                    hasChld: true,
                    href: '#menu',
                    isActive:false,
                    id: 'menu',
                    childs: [
                        {
                            label: "Categories",
                            href: '/category',
                            id: 'product-categories',
                        },
                        {
                            label: "Products",
                            href: '/product',
                            id: 'account-payment-methods-add',
                        },
                    ]
                },
                {
                    label: "Account",
                    hasChld: true,
                    href: '#account',
                    isActive:false,
                    id: 'account',
                    childs: [
                        {
                            label: "Payment Methods",
                            href: '/account/payment-methods',
                            id: 'account-payment-methods',
                        },
                        {
                            label: "Add Payment Method",
                            href: '/account/payment-methods/add',
                            id: 'account-payment-methods-add',
                        },
                    ]
                },
            ]
        }
      },
      computed: {

      },
      mounted() {

      },
    }
</script>
