<template>
    <div>
        <div class="part">
            <span>雨纷纷</span>
            <wr-divider :config="verticalDivider"></wr-divider>
            旧故里  
            <wr-divider :config="verticalDivider"></wr-divider>
            草木深
        </div>
        <div class="part">
            <wr-divider :config="{contentPosition: 'left', text: 'left'}"></wr-divider>
            <wr-divider :config="{contentPosition: 'center', text: 'center'}"></wr-divider>
            <wr-divider :config="{contentPosition: 'right', text: 'right'}"></wr-divider>
            <wr-divider :config="{text: 'default'}"></wr-divider>
        </div>
        <div class="part">
            <wr-divider :config="{id: 'vertical',text: ''}"><i class="el-icon-mobile-phone"></i></wr-divider>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            verticalDivider: {
                id: 'vertical',
                text: '垂直',
                direction: 'vertical'
            }
        }
    },
}
</script>

<style>

</style>