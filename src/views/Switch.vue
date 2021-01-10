<template>
    <div>
        <div class="part">
            {{baseModel}}
            <wr-switch :config="baseConfig" v-model="baseModel" @change="handleChange"></wr-switch>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseModel: false,
            baseConfig: {
                key: 'base',
                name: 'base',
                inactiveColor: 'red',
                activeColor: 'green',
                activeText: '开',
                inactiveText: '关',
                disabled: true
            }
        }
    },
    methods: {
        handleChange(eve) {
            console.log(eve)
        }
    }
}
</script>

<style>

</style>