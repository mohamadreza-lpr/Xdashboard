<template>
    <div class="row d-flex">
        <b-card class="col-md-12" id="sideBar">
            <b-sidebar class="sidebar" width="240px" bg-variant="dark" visible no-header no-close-on-route-change>
                <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                    <strong class="mr-auto">Vue JS Dashboard</strong>
                    <b-img :src="vueLogo" fluid thumbnail class="Logo"></b-img>
                </div>
                <hr />
                <b-nav-item active lass="d-flex felx-column align-items-center">
                    <router-link id="link" class="text-light" to="/">
                        <b-icon class="mr-4" style="width: 20px; height: 20px" icon="house-door" variant="light" animation="fade"></b-icon>
                        <span class="ml-4 mb-1">Home Page</span>
                    </router-link>
                </b-nav-item>
                <b-nav-item active class="d-flex felx-column align-items-center">
                    <router-link id="link" class="text-light" to="/about">
                        <b-icon class="mr-4" style="width: 20px; height: 20px" icon="chat-left-text" variant="light" animation="fade"></b-icon>
                        <span class="ml-4 mb-1">About Page</span>
                    </router-link>
                </b-nav-item>
                <b-nav-item active class="d-flex felx-column align-items-center">
                    <router-link id="link" class="text-light" to="/charts">
                        <b-icon class="mr-4" style="width: 20px; height: 20px" icon="clipboard-data" variant="light" animation="fade"></b-icon>
                        <span class="mb-1">Charts Page</span>
                    </router-link>
                </b-nav-item>
            </b-sidebar>
        </b-card>
    </div>
</template>

<script>
import { BButton, BSidebar, VBToggle, BCardText } from "bootstrap-vue";
export default {
    components: {
        BButton,
        BSidebar,
        BCardText,
    },
    computed: {
        vueLogo() {
            return require("../../assets/logo.png");
        },
    },
};
</script>

<style scoped>
#sidebar {
    flex-grow: 1;
    width: 100px;
    /* height: 600px; */
    overflow-y: auto;
}
.Logo {
    width: 50px;
    background-color: rgba(240, 248, 255, 0);
    border: none;
}
#link:hover {
    text-decoration: none;
}
</style>
