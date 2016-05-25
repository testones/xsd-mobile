<template>
    <div class="bar bar-header-secondary">
        <search :search.sync ="keyword"></search>
    </div>
    <div class="content infinite-scroll infinite-scroll-bottom">
        <list  :keyword ="keywords"></list>
    </div>
</template>
<script>
    export default {
        components : {
            'search' : require("./search.vue"),
            'list' : require("./list.vue")
        },
        data : function(){
            return {
                keyword:''
            }
        },
        computed : {
            keywords : function(){
                return this.keyword
            }
        }
    }
</script>