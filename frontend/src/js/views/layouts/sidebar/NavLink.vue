<template>
    <div>
        <a v-if="menuItem.hasChld" class="list-group-item list-group-item-action" :href="menuItem.href" data-toggle="collapse" aria-expanded="false" >
            <div class="d-flex w-100 justify-content-start align-items-center">
                <i :class="'icon-' + menuItem.id" class="icon"></i>
                <span class="menu-collapsed">{{ menuItem.label }}</span>
                <i v-if="menuItem.hasChld" class="icon-submenu icon ml-auto"></i>
            </div>
        </a>
        <router-link v-else class="list-group-item list-group-item-action" class-active="active" :to="menuItem.href" data-toggle="collapse" aria-expanded="false" >
            <div class="d-flex w-100 justify-content-start align-items-center">
                <i :class="'icon-' + menuItem.id" class="icon"></i>
                <span class="menu-collapsed">{{ menuItem.label }}</span>
                <i v-if="menuItem.hasChld" class="icon-submenu icon ml-auto"></i>
            </div>
        </router-link>
        <!-- Submenu -->
        <div v-if="menuItem.hasChld" :id="menuItem.id" class="collapse sidebar-submenu">
            <router-link v-for="item in menuItem.childs" class="list-group-item list-group-item-action" :to="item.href" :key="item.id">
                <span class="menu-collapsed">{{item.label}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
      name : 'nav-link',
      props: {
          menuItem: Object,
      },
    }
</script>
