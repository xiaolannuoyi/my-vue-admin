<template>
        <h1>
            <span>L</span><span>iu</span>
            <span>J</span><span>in</span>
            <span>Y</span><span>uan</span>
        </h1>
</template>

<script>
export default {

}
</script>

<style scoped>
h1{
    margin: 0;
    padding: 0;
    font-size: 60px;
    /* text-transform: uppercase; */
}
h1 span{
    display: inline-flex;
    color: #a1ff34;
}
/* even偶数 odd奇数 */
h1 span:nth-child(even){
    overflow: hidden;
    transition: ease-in-out 0.2s;
    color: #fff;
    letter-spacing: -1em;
}
h1:hover span:nth-child(even){
    letter-spacing: 0;
}
h1:hover span:nth-child(2){
    transition-delay: 0.2s;
}
h1:hover span:nth-child(4){
    transition-delay: 0.4s;
}
h1:hover span:nth-child(6){
    transition-delay: 0.6s;
}
</style>
