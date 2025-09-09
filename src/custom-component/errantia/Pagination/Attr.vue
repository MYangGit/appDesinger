<template>
    <div class="attr-list">
        <CommonAttr>
            <el-form-item label="自定义点击参数">
                <el-input  v-model="curComponent.propValue.activateText"  size="small" />
            </el-form-item>
            <el-form-item label="pageSize">
                <el-input-number v-model="curComponent.propValue.pageSize" size="small" :min="1" />
            </el-form-item>
            <el-form-item label="currentPage">
                <el-input-number v-model="curComponent.propValue.currentPage" size="small" :min="1" />
            </el-form-item>
            <el-form-item label="total">
                <el-input-number v-model="curComponent.propValue.total" size="small" :min="0" />
            </el-form-item>
            <el-form-item label="disabled">
                <el-switch v-model="curComponent.propValue.disabled" />
            </el-form-item>
            <el-form-item label="hideOnSinglePage">
                <el-switch v-model="curComponent.propValue.hideOnSinglePage" /> 
            </el-form-item>
        </CommonAttr>
    </div>
</template> 

<script>
import CommonAttr from '@/custom-component/common/CommonAttr.vue'
import { rootStore } from '@/stores/rootStore';

export default {
    components: { CommonAttr },
    computed: {
        curComponent() {
            return rootStore.dataCenter.curComponent
        },
    },
}
</script>
