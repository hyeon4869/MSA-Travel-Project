<template>
    <v-card style="width:450px; height:100%;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="primary-darker-1"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            Room # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            Room
        </v-card-title >        

        <v-card-text>
            <Number label="Contentid" v-model="value.contentid" :editMode="editMode" :inputUI="''"/>
            <Number label="Contenttypeid" v-model="value.contenttypeid" :editMode="editMode" :inputUI="''"/>
            <Number label="Roomcode" v-model="value.roomcode" :editMode="editMode" :inputUI="''"/>
            <String label="Roomtitle" v-model="value.roomtitle" :editMode="editMode" :inputUI="''"/>
            <String label="Roomsize" v-model="value.roomsize" :editMode="editMode" :inputUI="''"/>
            <String label="Roomcount" v-model="value.roomcount" :editMode="editMode" :inputUI="''"/>
            <Number label="Roombasecount" v-model="value.roombasecount" :editMode="editMode" :inputUI="''"/>
            <Number label="Roommaxcount" v-model="value.roommaxcount" :editMode="editMode" :inputUI="''"/>
            <Number label="Roomoffseasonminfee1" v-model="value.roomoffseasonminfee1" :editMode="editMode" :inputUI="''"/>
            <Number label="Roomoffseasonminfee2" v-model="value.roomoffseasonminfee2" :editMode="editMode" :inputUI="''"/>
            <Number label="RoompeakSeasonMinfee1" v-model="value.roompeakSeasonMinfee1" :editMode="editMode" :inputUI="''"/>
            <Number label="Roompeakseasonminfee2" v-model="value.roompeakseasonminfee2" :editMode="editMode" :inputUI="''"/>
            <String label="Roomintro" v-model="value.roomintro" :editMode="editMode" :inputUI="''"/>
            <String label="Roombathfadility" v-model="value.roombathfadility" :editMode="editMode" :inputUI="''"/>
            <String label="Roombath" v-model="value.roombath" :editMode="editMode" :inputUI="''"/>
            <String label="Roomhometheater" v-model="value.roomhometheater" :editMode="editMode" :inputUI="''"/>
            <String label="Roomaircondition" v-model="value.roomaircondition" :editMode="editMode" :inputUI="''"/>
            <String label="Roomtv" v-model="value.roomtv" :editMode="editMode" :inputUI="''"/>
            <String label="Roompc" v-model="value.roompc" :editMode="editMode" :inputUI="''"/>
            <String label="Roomcable" v-model="value.roomcable" :editMode="editMode" :inputUI="''"/>
            <String label="Roominternet" v-model="value.roominternet" :editMode="editMode" :inputUI="''"/>
            <String label="Roomrefrigerator" v-model="value.roomrefrigerator" :editMode="editMode" :inputUI="''"/>
            <String label="Roomtoiletries" v-model="value.roomtoiletries" :editMode="editMode" :inputUI="''"/>
            <String label="Roomsofa" v-model="value.roomsofa" :editMode="editMode" :inputUI="''"/>
            <String label="Roomcook" v-model="value.roomcook" :editMode="editMode" :inputUI="''"/>
            <String label="Roomtable" v-model="value.roomtable" :editMode="editMode" :inputUI="''"/>
            <String label="Roomhairdryer" v-model="value.roomhairdryer" :editMode="editMode" :inputUI="''"/>
            <String label="Roomsize2" v-model="value.roomsize2" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg1" v-model="value.roomImg1" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg1Alt" v-model="value.roomImg1Alt" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg2" v-model="value.roomImg2" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg2Alt" v-model="value.roomImg2Alt" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg3" v-model="value.roomImg3" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg3Alt" v-model="value.roomImg3Alt" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg4" v-model="value.roomImg4" :editMode="editMode" :inputUI="''"/>
            <String label="RoomImg4Alt" v-model="value.roomImg4Alt" :editMode="editMode" :inputUI="''"/>
            <String label="OriginImgurl" v-model="value.originImgurl" :editMode="editMode" :inputUI="''"/>
            <String label="Imgname" v-model="value.imgname" :editMode="editMode" :inputUI="''"/>
            <String label="Smallimageurl" v-model="value.smallimageurl" :editMode="editMode" :inputUI="''"/>
            <Number label="RoomCapacity" v-model="value.roomCapacity" :editMode="editMode" :inputUI="''"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="edit"
                v-if="!editMode"
            >
                수정
            </v-btn>
            <div v-else>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    SearchRoom
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
                >
                    삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
                >
                    취소
                </v-btn>
            </div>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>
        </v-card-actions>

        <v-snackbar
            v-model="snackbar.status"
            :top="true"
            :timeout="snackbar.timeout"
            color="error"
        >
            {{ snackbar.text }}
            <v-btn dark text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-card>

</template>

<script>
    const axios = require('axios').default;


    export default {
        name: 'LodgingRoom',
        components:{
        },
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
        },
        data: () => ({
            snackbar: {
                status: false,
                timeout: 5000,
                text: '',
            },
        }),
	async created() {
        },
        methods: {
            decode(value) {
                return decodeURIComponent(value);
            },
            selectFile(){
                if(this.editMode == false) {
                    return false;
                }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/rooms'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                    location.reload()

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
                
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
            },
            change(){
                this.$emit('input', this.value);
            },
        },
    }
</script>

