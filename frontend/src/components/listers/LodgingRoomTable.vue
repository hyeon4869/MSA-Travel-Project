<template>
    <div>
        <v-data-table
                :headers="headers"
                :items="values"
                :items-per-page="5"
                class="elevation-1"
        ></v-data-table>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-fab-transition>
                            <v-btn
                                    color="primary"
                                    fab
                                    dark
                                    large
                                    style="position:absolute; bottom: 5%; right: 2%; z-index:99"
                                    @click="openDialog=true;"
                            >
                                <v-icon v-bind="attrs" v-on="on">mdi-plus</v-icon>
                            </v-btn>
                        </v-fab-transition>
                    </template>

                    <LodgingRoom :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" @add="append" v-if="tick"/>
                
                    <v-btn
                            style="postition:absolute; top:2%; right:2%"
                            @click="closeDialog()"
                            depressed 
                            icon 
                            absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>
            </div>
        </v-col>
    </div>
</template>

<script>
    const axios = require('axios').default;
    import LodgingRoom from './../LodgingRoom.vue';

    export default {
        name: 'LodgingRoomManager',
        components: {
            LodgingRoom,
        },
        props: {
            offline: Boolean,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            values: [],
            headers: 
                [
                    { text: "id", value: "id" },
                    { text: "contentid", value: "contentid" },
                    { text: "contenttypeid", value: "contenttypeid" },
                    { text: "roomcode", value: "roomcode" },
                    { text: "roomtitle", value: "roomtitle" },
                    { text: "roomsize", value: "roomsize" },
                    { text: "roomcount", value: "roomcount" },
                    { text: "roombasecount", value: "roombasecount" },
                    { text: "roommaxcount", value: "roommaxcount" },
                    { text: "roomoffseasonminfee1", value: "roomoffseasonminfee1" },
                    { text: "roomoffseasonminfee2", value: "roomoffseasonminfee2" },
                    { text: "roompeakSeasonMinfee1", value: "roompeakSeasonMinfee1" },
                    { text: "roompeakseasonminfee2", value: "roompeakseasonminfee2" },
                    { text: "roomintro", value: "roomintro" },
                    { text: "roombathfadility", value: "roombathfadility" },
                    { text: "roombath", value: "roombath" },
                    { text: "roomhometheater", value: "roomhometheater" },
                    { text: "roomaircondition", value: "roomaircondition" },
                    { text: "roomtv", value: "roomtv" },
                    { text: "roompc", value: "roompc" },
                    { text: "roomcable", value: "roomcable" },
                    { text: "roominternet", value: "roominternet" },
                    { text: "roomrefrigerator", value: "roomrefrigerator" },
                    { text: "roomtoiletries", value: "roomtoiletries" },
                    { text: "roomsofa", value: "roomsofa" },
                    { text: "roomcook", value: "roomcook" },
                    { text: "roomtable", value: "roomtable" },
                    { text: "roomhairdryer", value: "roomhairdryer" },
                    { text: "roomsize2", value: "roomsize2" },
                    { text: "roomImg1", value: "roomImg1" },
                    { text: "roomImg1Alt", value: "roomImg1Alt" },
                    { text: "roomImg2", value: "roomImg2" },
                    { text: "roomImg2Alt", value: "roomImg2Alt" },
                    { text: "roomImg3", value: "roomImg3" },
                    { text: "roomImg3Alt", value: "roomImg3Alt" },
                    { text: "roomImg4", value: "roomImg4" },
                    { text: "roomImg4Alt", value: "roomImg4Alt" },
                    { text: "originImgurl", value: "originImgurl" },
                    { text: "imgname", value: "imgname" },
                    { text: "smallimageurl", value: "smallimageurl" },
                    { text: "roomCapacity", value: "roomCapacity" },
                ],
            room : [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            if(this.offline){
                if(!this.values) this.values = [];
                return;
            }

            var temp = await axios.get(axios.fixUrl('/rooms'))
            temp.data._embedded.rooms.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])
            this.values = temp.data._embedded.rooms;

            this.newValue = {
                'contentid': 0,
                'contenttypeid': 0,
                'roomcode': 0,
                'roomtitle': '',
                'roomsize': '',
                'roomcount': '',
                'roombasecount': 0,
                'roommaxcount': 0,
                'roomoffseasonminfee1': 0,
                'roomoffseasonminfee2': 0,
                'roompeakSeasonMinfee1': 0,
                'roompeakseasonminfee2': 0,
                'roomintro': '',
                'roombathfadility': '',
                'roombath': '',
                'roomhometheater': '',
                'roomaircondition': '',
                'roomtv': '',
                'roompc': '',
                'roomcable': '',
                'roominternet': '',
                'roomrefrigerator': '',
                'roomtoiletries': '',
                'roomsofa': '',
                'roomcook': '',
                'roomtable': '',
                'roomhairdryer': '',
                'roomsize2': '',
                'roomImg1': '',
                'roomImg1Alt': '',
                'roomImg2': '',
                'roomImg2Alt': '',
                'roomImg3': '',
                'roomImg3Alt': '',
                'roomImg4': '',
                'roomImg4Alt': '',
                'originImgurl': '',
                'imgname': '',
                'smallimageurl': '',
                'roomCapacity': 0,
            }
        },
        methods: {
            closeDialog(){
                this.openDialog = false
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                
                this.$emit('input', this.values);

                this.$nextTick(function(){
                    this.tick=true
                })
            },
        }
    }
</script>

