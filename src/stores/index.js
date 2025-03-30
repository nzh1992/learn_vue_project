import { defineStore } from "pinia";
import { computed, ref } from "vue";


function initState() {}

export const useAllDataStore = defineStore('allData', () => {
    const state = ref(initState())

    return { state }
})