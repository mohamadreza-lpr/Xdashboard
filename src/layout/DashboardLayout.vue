<template>
    <div class="container-fluid">
        <div class="row rounded">
            <header-section></header-section>
        </div>
        <div class="row">
            <div class="col-md-2">
                <sidebar-section></sidebar-section>
            </div>
            <div class="col-md-10">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderSection from "../views/components/Header.vue";
import SidebarSection from "../views/components/Sidebar2.vue";
export default {
    components: {
        HeaderSection,
        SidebarSection,
    },
};
</script>
