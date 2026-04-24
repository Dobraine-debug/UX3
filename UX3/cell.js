import {ref} from 'vue';

export default {
    props: {
        type: String
    },

    template: `<td><button v-bind:class = type>X</button></td>`
}