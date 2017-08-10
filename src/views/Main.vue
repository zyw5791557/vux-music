<template>
    <div>
        <common-header isSearch="true"></common-header>
        <tab :line-width=2 active-color='#fc378c' v-model="index">
            <tab-item class="vux-center" :selected="MainSwiperIndex === item" v-for="(item, index) in MainSwiper" @on-item-click="MainSwiperIndex(index, item.pathName)" :key="index">{{item.name}}</tab-item>
        </tab>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import CommonHeader from '../components/CommonHeader'
const list = () => [
    { name: '个性推荐', pathName: 'StyleRecommend' },
    { name: '歌单', pathName: 'SongList' },
    { name: '主播电台', pathName: 'AnchorStation' },
    { name: '排行榜', pathName: 'RankingList' }
]
export default {
    components: {
        Tab,
        TabItem,
        CommonHeader
    },
    data() {
        return {
            index: 0,
            MainSwiper: list(),
        }
    },
    methods: {
        MainSwiperIndex(i, n) {
            this.$router.push({ name: n })
        }
    },
    mounted() {
        this.$router.push({ name: this.MainSwiper[0].pathName })
    }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/center.less';
.tab-swiper {
    background-color: #fff;
    height: 100px;
}

</style>
