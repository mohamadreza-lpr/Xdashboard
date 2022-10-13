import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Notifications: [],
    },
    // getters: {},
    mutations: {
        PushNotification(state, notification) {
            state.Notifications.push({
                ...notification,
                id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
            });
        },
    },
    actions: {
        addNotification({ commit }, notification) {
            commit("PushNotification", notification);
        },
    },
    modules: {},
});
