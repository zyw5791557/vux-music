<template>
    <section>
        {{ query }}
    </section>
</template>

<script>
export default {
    data() {
        return {
            query: this.$route.query.id
        }
    },
    methods: {

    },
    mounted() {
        
    },
    activated() {
        this.query = this.$route.query.id;
    }
}
</script>

<style lang="less" scoped>

</style>

