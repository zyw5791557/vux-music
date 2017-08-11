<template>
    <div class="listContent">
        <!-- <router-link :to="{ name: listData.pathName }" tag="div" class="titleContent">
             <div class="title">{{ listData.list.name }} > </div>
        </router-link>
        <div class="listMain">
            <ul class="listItems">
                <router-link v-for="(item, index) in listData.gridList" :to="{ name: 'PlayList', query: { id: item.id } }" class="item" tag="li">
                    <div class="box">
                        <img :src="item.pathImg" />
                        <span class="hot">{{ item.hot }}</span>
                    </div>
                    <div class="dec">
                        <p class="dec-1">{{ item.title }}</p>
                    </div>
                </router-link>
            </ul>
        </div> -->
        {{ data }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ["data"],
    methods: {
        
    },
    mounted() {
        this.data.then(res => {
            console.log(res);
        })
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/style/list.less";

</style>
