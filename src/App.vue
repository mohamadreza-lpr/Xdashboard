<template>
     <div class="container-fluid" id="app">
          <div class="row">
               <nav class="col-md-3 border">
                    <sidebar-section />
               </nav>
               <div class="col-md-9">
                    <div class="row">
                         <header-section />
                    </div>
                    <div class="row">
                         <router-view />
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import HeaderSection from "./views/components/Header.vue";
import SidebarSection from "./views/components/Sidebar.vue";
export default {
     components: {
          HeaderSection,
          SidebarSection,
     },
};
</script>
<style lang="scss">
#nav {
     height: 100%;
}
</style>
