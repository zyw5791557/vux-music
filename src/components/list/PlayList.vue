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
        
    }
}
</script>

<style lang="less" scoped>

</style>

