import { defineStore } from "pinia";
import { computed, ref } from "vue";


function initState() {
    return {
        isCollapse: false,
    };
}

export const useAllDataStore = defineStore('allData', () => {
    const state = ref(initState())

    return { state }
})