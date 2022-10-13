<template>
    <div class="notification-card">
        <toast-message v-for="notif in Notifications" :key="notif.id" :notifications="notif" />
    </div>
</template>
<script>
import toastMessage from "./Xtoast-Message.vue";
import { mapState } from "vuex";
export default {
    components: {
        toastMessage,
    },

    computed: mapState(["Notifications"]),
    mounted(){
        console.log(this.Notifications);
    }
};
</script>
<style>
.notification-card {
    width: 320px;
    position: fixed;
    top: 70px;
    right: 20px;
    border-radius: 5px;
}
</style>
