<template>
    <header class="bar bar-nav">
        <bar-nav :title = "''"></bar-nav>
    </header>
    <router-view></router-view>

</template>

<script>
    export default {
        components : {
            'bar-nav' : require("./common/header.vue")
        }
    };
</script>
