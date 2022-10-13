<template>
    <div>
        <router-view></router-view>
        <toastNotification/>
    </div>
</template>
<script>
import toastNotification from "./components/Xtoast.vue"
export default {
    components: {
        toastNotification
    },
};
</script>
<style lang="scss"></style>
