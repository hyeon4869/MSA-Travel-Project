<template>
    <div>
        <v-list two-line v-if="list.length > 0">
            <v-list-item-group 
                    v-model="selected" 
                    color="primary"
                    @change="select"
            >
                <v-list-item v-for="(item, idx) in list" :key="idx">
                    <template v-slot:default="{ active }">
                        <v-list-item-avatar color="primary-darker-1">
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <v-list-item-title>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Contentid :  {{item.contentid }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Contenttypeid :  {{item.contenttypeid }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomcode :  {{item.roomcode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomtitle :  {{item.roomtitle }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomsize :  {{item.roomsize }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomcount :  {{item.roomcount }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roombasecount :  {{item.roombasecount }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roommaxcount :  {{item.roommaxcount }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomoffseasonminfee1 :  {{item.roomoffseasonminfee1 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomoffseasonminfee2 :  {{item.roomoffseasonminfee2 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoompeakSeasonMinfee1 :  {{item.roompeakSeasonMinfee1 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roompeakseasonminfee2 :  {{item.roompeakseasonminfee2 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomintro :  {{item.roomintro }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roombathfadility :  {{item.roombathfadility }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roombath :  {{item.roombath }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomhometheater :  {{item.roomhometheater }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomaircondition :  {{item.roomaircondition }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomtv :  {{item.roomtv }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roompc :  {{item.roompc }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomcable :  {{item.roomcable }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roominternet :  {{item.roominternet }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomrefrigerator :  {{item.roomrefrigerator }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomtoiletries :  {{item.roomtoiletries }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomsofa :  {{item.roomsofa }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomcook :  {{item.roomcook }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomtable :  {{item.roomtable }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomhairdryer :  {{item.roomhairdryer }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Roomsize2 :  {{item.roomsize2 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg1 :  {{item.roomImg1 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg1Alt :  {{item.roomImg1Alt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg2 :  {{item.roomImg2 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg2Alt :  {{item.roomImg2Alt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg3 :  {{item.roomImg3 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg3Alt :  {{item.roomImg3Alt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg4 :  {{item.roomImg4 }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomImg4Alt :  {{item.roomImg4Alt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OriginImgurl :  {{item.originImgurl }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Imgname :  {{item.imgname }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Smallimageurl :  {{item.smallimageurl }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RoomCapacity :  {{item.roomCapacity }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox :input-value="active" color="primary-darker-1"></v-checkbox>
                        </v-list-item-action>
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'LodgingRoomPicker',
        props: {
            value: [String, Object, Array, Number, Boolean],
        },
        data: () => ({
            list: [],
            selected: null,
        }),
        async created() {
            var me = this;
            var temp = await axios.get(axios.fixUrl('/rooms'))
            if(temp.data) {
                me.list = temp.data._embedded.rooms;
            }

            if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {
                var id = Object.values(me.value)[0];
                var tmpValue = await axios.get(axios.fixUrl('/rooms/' + id))
                if(tmpValue.data) {
                    var val = tmpValue.data
                    me.list.forEach(function(item, idx) {
                        if(item.name == val.name) {
                            me.selected = idx
                        }
                    })
                }
            }
        },
        methods: {
            select(val) {
                var obj = {}
                if(val != undefined) {
                    var arr = this.list[val]._links.self.href.split('/');
                    obj['id'] = arr[4]; 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    this.$emit('selected', obj);
                }
            },
        },
    };
</script>

