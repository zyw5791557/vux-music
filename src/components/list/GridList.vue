<template>
    <div class="listContent">
        <div class="gridList3" v-if="data3 ? true : false">
            <router-link :to="{ name: baseData.pathName }" tag="div" class="titleContent">
                <div class="title">{{ baseData.listName }} > </div>
            </router-link>
            <div class="listMain">
                <ul class="listItems">
                    <router-link v-for="(item, index) in baseData.list3" :to="{ name: baseData.itemPathName, query: { id: item.id } }" class="item" tag="li">
                        <div class="box">
                            <img :src="item.pathImg" />
                            <span class="hot">{{ item.hot }}</span>
                        </div>
                        <div class="dec">
                            <p class="dec-1" :class="{row1: item.author ? true : false}">{{ item.title }}</p>
                            <p class="dec-2">{{ item.author }}</p>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>

        <div class="gridList2" v-if="data2 ? true : false">
            <router-link :to="{ name: baseData.pathName }" tag="div" class="titleContent">
                <div class="title">{{ baseData.listName }} > </div>
            </router-link>
            <div class="listMain">
                <ul class="listItems2">
                    <router-link v-for="(item, index) in baseData.list2" :to="{ name: baseData.itemPathName, query: { id: item.id } }" class="item" tag="li">
                        <div class="box">
                            <img :src="item.pathImg" />
                            <span class="hot">{{ item.hot }}</span>
                        </div>
                        <div class="dec">
                            <p class="dec-1" :class="{row1: item.author ? true : false}">{{ item.title }}</p>
                            <p class="dec-2">{{ item.author }}</p>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>

        <div class="gridListN" v-if="dataN ? true : false">
            <router-link :to="{ name: baseData.pathName }" tag="div" class="titleContent">
                <div class="title">{{ baseData.listName }} > </div>
            </router-link>
            <div class="listMain">
                <ul class="listItemsN">
                    <router-link v-for="(item, index) in baseData.listN" :to="{ name: baseData.itemPathName, query: { id: item.id } }" class="item" tag="li">
                        <div class="box">
                            <img :src="item.pathImg" />
                        </div>
                        <div class="dec">
                            <p class="dec-1">{{ item.title }}</p>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseData: ''
        }
    },
    props: ["data3", "data2", "dataN"],
    methods: {

    },
    mounted() {
        
        if (this.data3 != undefined) {
            this.data3.then(res => {
                this.baseData = res.data;
            })
        }else if(this.data2 != undefined) {
            this.data2.then(res => {
                this.baseData = res.data;
            })
        }else if(this.dataN != undefined) {
            this.dataN.then(res => {
                this.baseData = res.data;
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/style/list.less";
</style>
