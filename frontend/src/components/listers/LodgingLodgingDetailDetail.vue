<template>
    <v-card outlined>
        <v-card-title>
            LodgingDetail # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <Number label="Contentid" v-model="item.contentid" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Contenttypeid" v-model="item.contenttypeid" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Createdtime" v-model="item.createdtime" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Title" v-model="item.title" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Modifiedtime" v-model="item.modifiedtime" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Tel" v-model="item.tel" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Telname" v-model="item.telname" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Homepage" v-model="item.homepage" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Firstimage" v-model="item.firstimage" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Firstimage2" v-model="item.firstimage2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Areacode" v-model="item.areacode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Sigungucode" v-model="item.sigungucode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Addr1" v-model="item.addr1" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Addr2" v-model="item.addr2" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Mapx" v-model="item.mapx" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Mapy" v-model="item.mapy" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Overview" v-model="item.overview" :editMode="editMode" @change="change" />
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
        name: 'LodgingLodgingDetailDetail',
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
            var temp = await axios.get(axios.fixUrl('/lodgingDetails/' + params.id))
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
