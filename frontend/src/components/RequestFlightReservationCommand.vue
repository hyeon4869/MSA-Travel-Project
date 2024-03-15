<template>
    <v-card outlined>
        <v-card-title>
            RequestFlightReservation
        </v-card-title>

        <v-card-text>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="requestFlightReservation"
            >
                RequestFlightReservation
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'RequestFlightReservationCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
        },
        watch: {
        },
        methods: {
            requestFlightReservation() {
                this.$emit('requestFlightReservation', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

