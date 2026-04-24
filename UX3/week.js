import {ref} from 'vue';

export default {
    setup(){
        const days = ref(["Mån", "Tis", "Ons", "Tor", "Fre"]);
        const dates = ref(["1/1", "2/1", "3/1", "4/1", "5/1"]);
        return {days, dates}
        
    },
    props: {
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