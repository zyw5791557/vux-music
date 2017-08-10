<template>
    <x-header class="header" :left-options="{preventGoBack: true}" @on-click-back="goBack">
        <x-input v-if="isSearch" class="search" label-width="4em" placeholder="搜索音乐、歌词、电台"></x-input>
        <router-link :to="{ name: 'MusicPlayer' }" tag="a" class="musicHouse" slot="right">
            音乐间
        </router-link>
    </x-header>
</template>

<script>
import { XHeader, XInput } from 'vux'
export default {
    components: {
        XHeader,
        XInput
    },
    data() {
        return {

        }
    },
    methods: {
        goBack() {
            this.$router.goBack();
        }
    },
    props: ['isSearch']
}
</script>

<style lang="less" scoped>
.search {
    padding: 0!important;
    font-size: 14px;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
}
.musicHouse {
    background-image: url('/static/tabbarIcon/musicHouse.png');
    background-size: 27px 27px;
    display: inline-block;
    width: 27px;
    height: 27px;
    text-indent: 10000px;
    overflow: hidden;
}
</style>