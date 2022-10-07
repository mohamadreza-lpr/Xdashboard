<template>
    <button :class="[ type, size ]" @click="callback($event)">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    props: {
        buttonText: String,
        type: String,
        size: String,
    },
    methods: {
        callback: function (e) {
            this.$emit("click", e);
        },
    },
};
</script>
<style scoped>
.primary {
    background-color: rgb(0, 121, 115);
    color: aliceblue;
    border: none;
    border-radius: 6px;
}
.primary:hover {
    background-color: aliceblue;
    color: rgb(0, 121, 115);
    border: 1px solid rgb(0, 121, 115);
}
.success {
    background-color: rgb(0, 121, 34);
    color: aliceblue;
    border: none;
    border-radius: 6px;
}
.success:hover {
    background-color: aliceblue;
    color: rgb(0, 121, 0);
    border: 1px solid rgb(0, 121, 0);
}
.info {
    background-color: rgb(18, 19, 18);
    box-shadow: 0px 5px 5px rgb(255, 0, 0);
    color: aliceblue;
    border: none;
    border-radius: 6px;
}
.info:hover {
    background-color: aliceblue;
    box-shadow: 0px 5px 5px rgb(0, 0, 0);
    color: rgb(18, 19, 18);
    border: 1px solid rgb(73, 73, 73);
}
.danger {
    background-color: rgb(185, 5, 5);
    box-shadow: 0px 5px 5px rgb(36, 36, 36);
    color: aliceblue;
    border: none;
    border-radius: 6px;
}
.danger:hover {
    background-color: aliceblue;
    box-shadow: 0px 5px 5px rgb(0, 0, 0);
    color: rgb(18, 19, 18);
    border: 1px solid rgb(73, 73, 73);
}
.warning {
    background-color: rgb(255, 0, 111);
    box-shadow: 0px 2px 2px rgb(36, 36, 36);
    color: aliceblue;
    border: none;
    border-radius: 6px;
}
.warning:hover {
    background-color: aliceblue;
    box-shadow: 0px 5px 5px rgb(255, 0, 111);
    color: rgb(18, 19, 18);
    border: 1px solid rgb(73, 73, 73);
}
.sm {
    width: 50px;
    height: 30px;
}
.md{
    width: 100px;
    height: 40px;
}
.lg{
    width: 150px;
    height: 50px;
}
</style>
