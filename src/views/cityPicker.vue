<template>
    <div>
        <div class="part">
            <wr-city-picker :config="wrCityPicker" v-model="basePicker" @change="handleChange"></wr-city-picker>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basePicker: {
                province: {
                    id: 120000
                }
            },
            wrCityPicker: {
                needDistrict: true,
                needCity: true,
                clearable: true
            }
        }
    },
    methods: {
        handleChange(val) {
            console.log(val)
        }
    }
}
</script>

<style>

</style>