<template>
    <div>
        <div class="rounded-lg shadow col-md-12" id="sidebar">
            <div class="row justify-content-center">
                <b-img :src="vueLogo" fluid thumbnail class="mt-2 Logo"></b-img>
            </div>
            <div class="row justify-content-center text-light py-2">
                <p class="font-weight-bold">Vue JS Dashboard</p>
            </div>
            <hr />
            <b-nav-item active class="d-flex felx-column align-items-center">
                <router-link id="link" class="text-light" to="/">
                    <b-icon class="mr-2" style="width: 20px; height: 20px" icon="house-door" variant="light" animation="fade"></b-icon>
                    <span class="mb-1">Home Page</span>
                </router-link>
            </b-nav-item>
            <b-nav-item active class="d-flex felx-column align-items-center">
                <router-link id="link" class="text-light" to="/about">
                    <b-icon class="mr-2" style="width: 20px; height: 20px" icon="chat-left-text" variant="light" animation="fade"></b-icon>
                    <span class="mb-1">About Page</span>
                </router-link>
            </b-nav-item>
            <b-nav-item active class="d-flex felx-column align-items-center">
                <router-link id="link" class="text-light" to="/charts">
                    <b-icon class="mr-2" style="width: 20px; height: 20px" icon="clipboard-data" variant="light" animation="fade"></b-icon>
                    <span class="mb-1">Charts Page</span>
                </router-link>
            </b-nav-item>
        </div>
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
    position: sticky;
    height: 80vh;
    background-color: rgb(39, 51, 60);
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
