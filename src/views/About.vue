<template>
    <div>
        <x-button type="info" buttonText="Toast Notif" size="lg" @click="triggerToast" />
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    components: {},
    data() {
        return {};
    },
    methods: {
        ...mapActions(["addNotification"]),
        triggerToast() {
            this.addNotification({
                type: "danger",
                message: "Helllooooo",
            });
        },
    },
};
</script>
