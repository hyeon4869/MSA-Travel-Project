<template>

    <v-card outlined>
        <v-card-title>
            FlightInfo # {{$route.params.id }}
        </v-card-title>

        <v-card-text>
            <div>
                <Number label="UserId" v-model="item.userId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Name" v-model="item.name" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AirLine" v-model="item.airLine" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ArrAirport" v-model="item.arrAirport" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="DepAirport" v-model="item.depAirport" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="ArrTime" v-model="item.arrTime" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="DepTime" v-model="item.depTime" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Charge" v-model="item.charge" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="VihicleId" v-model="item.vihicleId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Status" v-model="item.status" :editMode="editMode" @change="change" />
            </div>
        </v-card-text>
    </v-card>

</template>

<script>
  const axios = require('axios').default;

  export default {
    name: 'FlightInfoViewDetail',
    props: {
      value: Object,
    },
    data: () => ({
        item : [],
    }),
    async created() {
      var params = this.$route.params;
      var temp = await axios.get(axios.fixUrl('/flightInfos/' + params.id))

      this.item = temp.data;

    },
    methods: {
    }
  }
</script>

