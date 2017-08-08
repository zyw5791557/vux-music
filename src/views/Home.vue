<template>
    <div>
        <div class="content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <tabbar class="tabbarTheme">
            <tabbar-item selected link="/home/main"> 
                <img slot="icon" src="../assets/tabbarIcon/main.png">
                <span slot="label">发现音乐</span>
            </tabbar-item>
            <tabbar-item link="/home/music">
                <img slot="icon" src="../assets/tabbarIcon/music.png">
                <span slot="label">我的音乐</span>
            </tabbar-item>
            <tabbar-item link="/home/friends">
                <img slot="icon" src="../assets/tabbarIcon/friends.png">
                <span slot="label">朋友</span>
            </tabbar-item>
            <tabbar-item badge="7" link="/home/account">
                <img slot="icon" src="../assets/tabbarIcon/account.png">
                <span slot="label">账号</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
window.onresize = function() {
    location.reload();
    document.getElementsByTagName('body')[0].style.height = document.documentElement.clientHeight + 'px';
    document.getElementsByTagName('body')[0].style.width = document.documentElement.clientWidth + 'px';
}
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

        }
    },
    methods: {

    },
    mounted() {
        
    }
}
</script>

<style scoped lang="less">
@import "../assets/style/common.less";
    .tabbarTheme{
        background-color: @TabbarTheme;
        opacity: .8;
    }
    // transition 动画
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
        opacity: 0;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0;
    }
</style>
<style>
    body {
        overflow: hidden;
    }
     .header {
        height: 7vh;
    }
    .content {
        height: 93vh;
        overflow-y: scroll; 
    }
    .vux-header-right {
        top: 10px!important;
        right: 10px!important;
    }
    .musicHouse {
        background-image:  url('../assets/tabbarIcon/musicHouse.png');
        background-size: 27px 27px;
        display: inline-block;
        width: 27px;
        height: 27px;
        text-indent: 10000px;
        overflow: hidden;
    }
    input::-webkit-input-placeholder { text-align: center; }
</style>

