<template>
    <ul>
        <li><a href="javascript:;">HTML5</a></li>
        <li><a href="javascript:;">JavaScript</a></li>
        <li><a href="javascript:;">VUE</a></li>
        <li><a href="javascript:;">NodeJS</a></li>
    </ul>
</template>

<script>
export default {
    name:'sort',
}
</script>

<style scoped>
    ul{
        width:100%;
        height:800px;
        list-style: none;
        box-sizing: border-box;
    }
    ul li{
        float:left;
        width: 48%;
        height:50%;
    }
    ul li a{
        display: block;
        width: 100%;
        height:100%;
        background:lightblue;
        text-align: center;
        font:800 30px/400px "";
        color: #000;
        border:4px dotted #eee;
        box-sizing: border-box;
        text-decoration: none;
    }
</style>


