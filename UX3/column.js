import {ref} from 'vue';
import cell from './cell.js';
import row from './row.js'


export default {
    setup(){
        const rows = ref([["absent", "booked_full", "booked_half","booked_full", "booked_half"], 
            ["booked_full", "prel_booked_full", "prel_booked_half", "booked_full", "booked_half"], 
            ["booked_full", "prel_booked_full", "prel_booked_half", "booked_full", "booked_half"],
        ["absent", "booked_full", "booked_half","booked_full", "booked_half"],
    ["absent", "booked_full", "booked_half","booked_full", "booked_half"]]);
        const names = ref(["Test testsson", "David Skansholm", "Josefina Runnquist", "Karl Karlqvist", "Egon Pettersson"]);
        return {rows, names};
    },
    components: {
        row
    },
    template: `<table v-for = "row of rows" class = "columnTable">
    <row v-bind:cells = row></row></table>`
}