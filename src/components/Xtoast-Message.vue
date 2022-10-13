<template>
    <div :class="typeClass" class="alert alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        {{ notifications.message }}
    </div>
</template>
<script>
export default {
    props: ["notifications"],
    computed:{
        typeClass(){
            return  `alert-${this.notifications.type}`
        }
    }
};
</script>
