<template>

    <v-data-table
        :headers="headers"
        :items="flightInfo"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'FlightInfoView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
                { text: "userId", value: "userId" },
                { text: "name", value: "name" },
                { text: "airLine", value: "airLine" },
                { text: "arrAirport", value: "arrAirport" },
                { text: "depAirport", value: "depAirport" },
                { text: "arrTime", value: "arrTime" },
                { text: "depTime", value: "depTime" },
                { text: "charge", value: "charge" },
                { text: "vihicleId", value: "vihicleId" },
                { text: "status", value: "status" },
            ],
            flightInfo : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/flightInfos'))

            temp.data._embedded.flightInfos.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.flightInfo = temp.data._embedded.flightInfos;
        },
        methods: {
        }
    }
</script>

