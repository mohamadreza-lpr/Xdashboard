import Vue from "vue";
import Xcard from "@/components/Xcard.vue";
import Xbutton from "@/components/Xbutton.vue";

const XGlobalComponents = {
     install(Vue) {
          Vue.component("x-card", Xcard);
          Vue.component("x-button", Xbutton);
     },
};

export default XGlobalComponents;
