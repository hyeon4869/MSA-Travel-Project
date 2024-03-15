<template>
    <v-card outlined>
        <v-card-title>
            Room # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <Number label="Contentid" v-model="item.contentid" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Contenttypeid" v-model="item.contenttypeid" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Roomcode" v-model="item.roomcode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomtitle" v-model="item.roomtitle" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomsize" v-model="item.roomsize" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomcount" v-model="item.roomcount" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Roombasecount" v-model="item.roombasecount" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Roommaxcount" v-model="item.roommaxcount" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Roomoffseasonminfee1" v-model="item.roomoffseasonminfee1" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Roomoffseasonminfee2" v-model="item.roomoffseasonminfee2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="RoompeakSeasonMinfee1" v-model="item.roompeakSeasonMinfee1" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Roompeakseasonminfee2" v-model="item.roompeakseasonminfee2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomintro" v-model="item.roomintro" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roombathfadility" v-model="item.roombathfadility" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roombath" v-model="item.roombath" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomhometheater" v-model="item.roomhometheater" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomaircondition" v-model="item.roomaircondition" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomtv" v-model="item.roomtv" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roompc" v-model="item.roompc" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomcable" v-model="item.roomcable" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roominternet" v-model="item.roominternet" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomrefrigerator" v-model="item.roomrefrigerator" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomtoiletries" v-model="item.roomtoiletries" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomsofa" v-model="item.roomsofa" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomcook" v-model="item.roomcook" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomtable" v-model="item.roomtable" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomhairdryer" v-model="item.roomhairdryer" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Roomsize2" v-model="item.roomsize2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg1" v-model="item.roomImg1" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg1Alt" v-model="item.roomImg1Alt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg2" v-model="item.roomImg2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg2Alt" v-model="item.roomImg2Alt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg3" v-model="item.roomImg3" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg3Alt" v-model="item.roomImg3Alt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg4" v-model="item.roomImg4" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RoomImg4Alt" v-model="item.roomImg4Alt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="OriginImgurl" v-model="item.originImgurl" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Imgname" v-model="item.imgname" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Smallimageurl" v-model="item.smallimageurl" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="RoomCapacity" v-model="item.roomCapacity" :editMode="editMode" @change="change" />
            </div>
        </v-card-text>

        <v-card-actions>
            <v-btn text color="deep-purple lighten-2" large @click="goList">List</v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode"
            >
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'LodgingRoomDetail',
        components:{},
        props: {
        },
        data: () => ({
            item: null,
            editMode: false,
        }),
        async created() {
            var me = this;
            var params = this.$route.params;
            var temp = await axios.get(axios.fixUrl('/rooms/' + params.id))
            if(temp.data) {
                me.item = temp.data
            }
        },
        methods: {
            goList() {
                var path = window.location.href.slice(window.location.href.indexOf("/#/"), window.location.href.lastIndexOf("/#"));
                path = path.replace("/#/", "/");
                this.$router.push(path);
            },
            edit() {
                this.editMode = true;
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.item._links.self.href))
                    }

                    this.editMode = false;

                    this.$emit('input', this.item);
                    this.$emit('delete', this.item);

                } catch(e) {
                    console.log(e)
                }
            },
        },
    };
</script>
