<template>
    <div>
        <div class="part">
            <h2>输入框最基本的用法。</h2>
            <span>这里显示修改的值：{{ baseModel }}</span>
            <wr-input
                :config="baseConf"
                @focus="baseInput"
                v-model="baseModel"
            ></wr-input>
            <wr-input class="input" :config="preConf" v-model="preModel"></wr-input>
            <wr-input class="input" :config="suffixConf" v-model="suffModel"></wr-input>
        </div>
        <div class="part">
            <wr-input class="input" :config="slotConf" v-model="slotModel">
                <el-button slot="prepend" icon="el-icon-date"></el-button>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </wr-input>
        </div>
        <div class="part">
            <wr-input class="input" :config="{size: 'mini'}" v-model="slotModel"></wr-input>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseModel: "",
                preModel: '',
                suffModel: '',
                slotModel: '11',
                baseConf: {
                    disabled: false,
                    showPassword: true,
                    clearable: true,
                    key: "id",
                    value: "",
                    placeholder: "请输入基础数据",
                },
                preConf: {
                    key: 'pre',
                    value: '',
                    placeholder: '请输入内容',
                    prefixIcon: 'el-icon-search'
                },
                suffixConf: {
                    key: 'suffix',
                    value: '',
                    placeholder: '请选择日期',
                    suffixIcon: 'el-icon-date'
                },
                slotConf: {
                    key: 'id',
                    value: '',
                    placeholder: '请输入基础数据',
                    isPrepend: true,
                    isAppend: true
                },
            };
        },
        methods: {
            baseInput(val) {
                console.log(val)
            }
        }
    };
</script>

<style>
</style>