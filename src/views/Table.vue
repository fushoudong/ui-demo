<template>
    <div class="part">
        <wr-tab :table-data="tableObj" :table-header="tableHeader" :config="config" :autoPagination="true" @load="loadData">
        <template v-slot:operationSlot="scoped">
            <el-button>{{scoped.row.date}}</el-button>
        </template>
    </wr-tab>
    </div>
</template>

<script>
import {Config, TableHeader, TableObj} from '../config/wrTable'
export default {
    data() {
        return {
            config: Config,
            tableHeader: TableHeader,
            tableObj: TableObj
        }
    },
    methods: {
        loadData(event) {
            console.log('更改参数', event)
        }
    }
}
</script>

<style scoped>

</style>