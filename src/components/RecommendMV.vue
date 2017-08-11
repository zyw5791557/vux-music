<template>
    <section>
        <common-header></common-header>
        推荐MV
        {{ query }}
    </section>
</template>

<script>
import CommonHeader from '../components/CommonHeader'
export default {
    components: {
        CommonHeader
    },
    data() {
        return {
            query: this.$route.query.id
        }
    },
    methods: {

    },
    mounted() {

    },
    // 缓存组件被激活
    activated() {
        this.query = this.$route.query.id
    }
}
</script>

<style lang="less" scoped>

</style>

