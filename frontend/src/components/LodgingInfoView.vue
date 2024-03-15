<template>

    <v-data-table
        :headers="headers"
        :items="lodgingInfo"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'LodgingInfoView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
                { text: "name", value: "name" },
                { text: "reservationId", value: "reservationId" },
                { text: "roomCode", value: "roomCode" },
                { text: "email", value: "email" },
                { text: "category", value: "category" },
                { text: "status", value: "status" },
                { text: "charge", value: "charge" },
                { text: "reservationDate", value: "reservationDate" },
                { text: "userId", value: "userId" },
            ],
            lodgingInfo : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/lodgingInfos'))

            temp.data._embedded.lodgingInfos.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.lodgingInfo = temp.data._embedded.lodgingInfos;
        },
        methods: {
        }
    }
</script>

