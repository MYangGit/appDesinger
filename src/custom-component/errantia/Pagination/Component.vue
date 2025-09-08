<template>
    <div class="input-wrap">
        <el-pagination 
            background 
            layout="prev, pager, next" 
            v-model:current-page="currentPage1"
            :page-size="pageSize"
            :total="total"
            :disabled="propValue.disabled"
            :hide-on-single-page="propValue.hideOnSinglePage"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script setup>
import { computed } from "vue";
import { getComputedGet, getComputedSet, } from "@/utils/utils";
import { rootStore } from '@/stores/rootStore';

const props = defineProps({
    propValue: {
        type: Object,
        default: () => ({
            pageSize: 10,
            currentPage: 1,
            total: 100,
            disabled: false,
            hideOnSinglePage: false
        }),
    },
    element: {
        type: Object,
        default: () => { },
    },
});

const pageSize = computed({
    get() {
        return getComputedGet('pageSize', props.element.dataBinds, rootStore.dataConfig.stateSet, props.propValue)
    },
    set(val) {
        getComputedSet('pageSize', props.element.dataBinds, rootStore.dataConfig.stateSet, props.propValue, val)
    }
});
const currentPage = computed({
    get() {
        return getComputedGet('currentPage', props.element.dataBinds, rootStore.dataConfig.stateSet, props.propValue)
    },
    set(val) {
        getComputedSet('currentPage', props.element.dataBinds, rootStore.dataConfig.stateSet, props.propValue, val)
    }
});
const total = computed({
    get() {
        return getComputedGet('total', props.element.dataBinds, rootStore.dataConfig.stateSet, props.propValue)
    },
    set(val) {
        getComputedSet('total', props.element.dataBinds, rootStore.dataConfig.stateSet, props.propValue, val)
    }
});

function handleCurrentChange(page) {
    console.log('页数改变page', page);
}
</script>


<style lang="less" scoped>
</style>