<template>
    <div>
    <h1>Room</h1>
        <v-row>
            <v-card
                class="mx-auto"
                style="height:300px; width:300px; margin-bottom:20px; text-align: center;"
                outlined
            >
                <v-list-item>
                    <v-list-item-avatar 
                        class="mx-auto"
                        size="80"
                        style="margin-top:80px;"
                    ><v-icon color="primary" x-large>mdi-plus</v-icon>
                    </v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn 
                        v-on="on"
                        class="mx-auto"
                        outlined
                        rounded
                        @click="openDialog=true;"
                        color="primary"
                        style="font-weight:500; font-size:20px; padding:15px; border:solid 2px; max-width:250px; overflow:hidden"
                    >
                        Room 등록
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
        <v-list two-line>
            <template>
                <v-list-item v-for="(data, n) in values" :key="n">
                    <v-list-item-avatar color="grey darken-1">
                        <v-img :src="data.photo ? data.photo:'https://cdn.vuetifyjs.com/images/cards/cooking.png'"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title style="margin-bottom:10px;">
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        </v-list-item-title>

                        <v-list-item-subtitle style="font-size:25px; font-weight:700;">
                            [ Id :  {{data.id }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Contentid :  {{data.contentid }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Contenttypeid :  {{data.contenttypeid }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomcode :  {{data.roomcode }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomtitle :  {{data.roomtitle }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomsize :  {{data.roomsize }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomcount :  {{data.roomcount }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roombasecount :  {{data.roombasecount }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roommaxcount :  {{data.roommaxcount }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomoffseasonminfee1 :  {{data.roomoffseasonminfee1 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomoffseasonminfee2 :  {{data.roomoffseasonminfee2 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoompeakSeasonMinfee1 :  {{data.roompeakSeasonMinfee1 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roompeakseasonminfee2 :  {{data.roompeakseasonminfee2 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomintro :  {{data.roomintro }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roombathfadility :  {{data.roombathfadility }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roombath :  {{data.roombath }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomhometheater :  {{data.roomhometheater }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomaircondition :  {{data.roomaircondition }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomtv :  {{data.roomtv }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roompc :  {{data.roompc }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomcable :  {{data.roomcable }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roominternet :  {{data.roominternet }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomrefrigerator :  {{data.roomrefrigerator }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomtoiletries :  {{data.roomtoiletries }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomsofa :  {{data.roomsofa }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomcook :  {{data.roomcook }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomtable :  {{data.roomtable }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomhairdryer :  {{data.roomhairdryer }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Roomsize2 :  {{data.roomsize2 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg1 :  {{data.roomImg1 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg1Alt :  {{data.roomImg1Alt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg2 :  {{data.roomImg2 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg2Alt :  {{data.roomImg2Alt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg3 :  {{data.roomImg3 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg3Alt :  {{data.roomImg3Alt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg4 :  {{data.roomImg4 }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomImg4Alt :  {{data.roomImg4Alt }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ OriginImgurl :  {{data.originImgurl }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Imgname :  {{data.imgname }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ Smallimageurl :  {{data.smallimageurl }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            [ RoomCapacity :  {{data.roomCapacity }} ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </v-list-item-subtitle>

                    </v-list-item-content>
                </v-list-item>

                <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
            </template>
        </v-list>

        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >

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
            }
        },
    };
</script>


<style>
    .video-card {
        width:300px; 
        margin-left:4.5%; 
        margin-top:50px; 
        margin-bottom:50px;
    }
</style>

