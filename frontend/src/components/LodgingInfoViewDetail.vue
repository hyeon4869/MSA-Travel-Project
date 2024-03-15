<template>

    <v-card outlined>
        <v-card-title>
            LodgingInfo # {{$route.params.id }}
        </v-card-title>

        <v-card-text>
            <div>
                <String label="Name" v-model="item.name" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ReservationId" v-model="item.reservationId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="RoomCode" v-model="item.roomCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Email" v-model="item.email" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Category" v-model="item.category" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Status" v-model="item.status" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Charge" v-model="item.charge" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ReservationDate" v-model="item.reservationDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="UserId" v-model="item.userId" :editMode="editMode" @change="change" />
            </div>
        </v-card-text>
    </v-card>

</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'LodgingInfoViewDetail',
    props: {
      value: Object,
    },
    data: () => ({
        item : [],
    }),
    async created() {
      var params = this.$route.params;
      var temp = await axios.get(axios.fixUrl('/lodgingInfos/' + params.id))

      this.item = temp.data;

    },
    methods: {
    }
  }
</script>

