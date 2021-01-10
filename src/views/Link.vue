<template>
    <div>
        <div class="part">
            <h2>基础的文字链接用法。</h2>
            <wr-link :config="{type: 'default'}">默认链接</wr-link>
            <wr-link :config="{type: 'primary'}">主要链接</wr-link>
            <wr-link :config="{type: 'success'}">成功链接</wr-link>
            <wr-link :config="{type: 'warning'}">警告链接</wr-link>
            <wr-link :config="{type: 'danger'}">危险链接</wr-link>
            <wr-link :config="{type: 'info'}">信息链接</wr-link>
        </div>
        <div class="part">
            <h2>文字链接不可用状态。</h2>
            <wr-link :config="{type: 'default', disabled: true}">默认链接</wr-link>
            <wr-link :config="{type: 'primary', disabled: true}">主要链接</wr-link>
            <wr-link :config="{type: 'success', disabled: true}">成功链接</wr-link>
            <wr-link :config="{type: 'warning', disabled: true}">警告链接</wr-link>
            <wr-link :config="{type: 'danger', disabled: true}">危险链接</wr-link>
            <wr-link :config="{type: 'info', disabled: true}">信息链接</wr-link>
        </div>
        <div class="part">
            <h2>下划线</h2>
            <wr-link :config="{type: 'primary', underline: false}">无下划线</wr-link>
            <wr-link :config="{type: 'primary', underline: true}">有下划线</wr-link>
        </div>
        <div class="part">
            <h2>决定新页面是在当前页面打开还是新打开一个页面</h2>
            <wr-link :config="{type: 'primary', href: 'https://www.baidu.com', target: '_self'}">当前页面</wr-link>
            <wr-link :config="{type: 'primary', href: 'https://www.baidu.com', target: '_blank'}">空白页面</wr-link>
        </div>
        <div class="part">
            <h2>带图标的文字链接可增强辨识度。</h2>
            <wr-link :config="{icon: 'el-icon-search'}">图标<i class="el-icon-view"></i></wr-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>