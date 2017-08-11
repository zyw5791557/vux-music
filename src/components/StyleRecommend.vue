<template>
    <div class="styleRecommend">
        <swiper :aspect-ratio="300/800" loop auto :list="styleRecommend_list" :index="styleRecommend_index" @on-index-change="onIndexChange"></swiper>
        <tab custom-bar-width="0px" defaultColor="#000" class="styleRecommendItems">
            <tab-item v-for="(item, index) in styleRecommendItems" @on-item-click="onItemClick(item)" class="tabItems">
                <div class="iconItems">
                       <img class="icon" :src="item.path"/>   
                </div>
                <p>{{ item.name }}</p>
            </tab-item>
        </tab>
        <grid-list :data3="recommendListData"></grid-list>
        <grid-list :dataN="exclusiveListData"></grid-list>
        <grid-list :data3="latestListData"></grid-list>
        <grid-list :data2="recommendMVData"></grid-list>
    </div>
</template>

<script>
import { Swiper, Tab, TabItem } from 'vux'
import GridList from '../components/list/GridList'
const baseList = [{
    url: 'javascript:',
    img: '/static/banner/1.jpg',
    title: '我是第一张图'
}, {
    url: 'javascript:',
    img: '/static/banner/2.jpg',
    title: '我是第二张图'
}, {
    url: 'javascript:',
    img: '/static/banner/3.jpg',
    title: '我是第三张图'
}, {
    url: 'javascript:',
    img: '/static/banner/4.jpg',
    title: '我是第四张图'
}, {
    url: 'javascript:',
    img: '/static/banner/5.jpg',
    title: '我是第五张图'
}, {
    url: 'javascript:',
    img: '/static/banner/6.jpg',
    title: '我是第六张图'
}, {
    url: 'javascript:',
    img: '/static/banner/7.jpg',
    title: '我是第七张图'
}, {
    url: 'javascript:',
    img: '/static/banner/8.jpg',
    title: '我是第八张图'
}]
const urlList = baseList.map((item, index) => ({
    url: 'http://music.163.com/m/',
    img: item.img,
    title: `(可点击)${item.title}`
}))

const styleRecommendItemsList = [
    {
        name: '私人FM',
        path: '/static/styleRecommend/fm.png',
        pathName: 'FM'
    },
    {
        name: '每日歌曲推荐',
        path: '/static/styleRecommend/dayRecommend.png',
        pathName: 'DayRecommend'
    },
    {
        name: '云音乐热歌榜',
        path: '/static/styleRecommend/hotRanking.png',
        pathName: 'HotRanking'
    }
]
export default {
    components: {
        Swiper,
        Tab,
        TabItem,
        GridList
    },
    data() {
        return {
            styleRecommend_list: urlList,
            styleRecommend_index: 0,
            styleRecommendItems: styleRecommendItemsList,
            // recommendList: ''
        }
    },
    computed: {
        recommendListData() {
             return this.$http('/api/gridList')
        },
        exclusiveListData() {
            return this.$http('/api/exclusiveList')
        },
        latestListData() {
            return this.$http('/api/latestList')
        },
        recommendMVData() {
            return this.$http('/api/recommendMV')
        }
    },
    methods: {
        onIndexChange(index) {
            this.styleRecommend_index = index;
        },
        onItemClick(i) {
            this.$router.push({name: i.pathName});
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="less" scoped>
.styleRecommend {
    overflow-y: auto!important; 
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 150px;
    .styleRecommendItems {
        height: auto;
        .tabItems {
            line-height: 20px;
        }
        .iconItems {
            text-align: center;
            display: inline-block;
            width: 32px;
            height: 32px;
            padding-top: 13px;
            .icon {
                width: 32px;
                height: 32px;
            }
        }
        p {
            height: 30px;
            line-height: 30px;
        }
    }
}

</style>
