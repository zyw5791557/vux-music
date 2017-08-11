<template>
    <div>
        <div class="content">
            <transition :name="transitionName">
                 <keep-alive> 
                    <router-view class="Router"></router-view>
                 </keep-alive> 
            </transition>
        </div>
        <tabbar class="tabbarTheme">
            <tabbar-item v-for="(item, index) in tabbarItems" :selected="index === 0" :link="{ name: item.pathName }" replace :badge="item.badge">
                <img slot="icon" :src="item.pathImg">
                <span slot="label">{{ item.name }}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
window.onresize = function () {
    location.reload();
    document.getElementsByTagName('body')[0].style.height = document.documentElement.clientHeight + 'px';
    document.getElementsByTagName('body')[0].style.width = document.documentElement.clientWidth + 'px';
}
const tabbarList = [
    { name: '发现音乐', pathName: 'StyleRecommend', pathImg: '/static/tabbarIcon/main.png', badge: null },
    { name: '我的音乐', pathName: 'Music', pathImg: '/static/tabbarIcon/music.png', badge: null },
    { name: '朋友', pathName: 'Friends', pathImg: '/static/tabbarIcon/friends.png', badge: null },
    { name: '账号', pathName: 'Account', pathImg: '/static/tabbarIcon/account.png', badge: '7' }
]
import { XHeader, Tabbar, TabbarItem, XInput } from 'vux'
export default {
    components: {
        Tabbar,
        TabbarItem,
        XHeader,
        XInput
    },
    data() {
        return {
            transitionName: 'slide-right',  // 默认动态路由变化为slide-right
            tabbarItems: tabbarList,
            tabbarPreIndex: 0,
        }
    },
    watch: {
        '$route'(to, from) {
            let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
            if (isBack) {
                this.transitionName = 'slide-right'
            } else {
                this.transitionName = 'slide-left'
            }
            this.$router.isBack = false
        }
    },
    methods: {

    },
    mounted() {
        this.$router.push({ name: 'StyleRecommend' })
    }
}
</script>

<style scoped lang="less">
@import "../assets/style/common.less";
.tabbarTheme {
    background-color: @TabbarTheme;
    opacity: .8;
} // transition 动画
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s;
    opacity: 0;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0;
}

.Router {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .5s ease;
}

.slide-left-enter,
.slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>
<style>

.content {
    position: relative;
    height: 100%;
}

.vux-header-right {
    top: 10px!important;
    right: 10px!important;
}

input::-webkit-input-placeholder {
    text-align: center;
}
</style>

