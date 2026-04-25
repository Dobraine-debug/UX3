import {ref} from 'vue';

export default {
    setup(){
        const days = ref(["Mån", "Tis", "Ons", "Tor", "Fre"]);
        return {days}
        
    },
    props: {
        dates: Array,
        type: String,

    },

    template: `<table v-bind:class = type>
                <tr>
                    <td v-for = "day of days">{{day}}</td>
                </tr>
                <tr>
                    <td v-for = "date of dates">{{date}}</td>
                </tr></table>`
}