<template>
    <div class="badge">
        {{value}}
    </div>
</template>

<script setup>
    defineProps({
        value: Number,
    })
</script>

<style lang="scss" scoped>
    @import "../assets/styles/base.scss";
    @import "../assets/styles/mixins.scss";
    @import "../assets/styles/extends.scss";
    @import "../assets/styles/common.scss";

    .badge {
        @extend .flex-centered-content;

        border-radius: 50%;

        font-size: 12px;
        line-height: 1;
        width: fit-content;
        min-height: 20px;

        padding: 6px 6px 5px;
        border-radius: 30px;
        background-color: var(--success);
        color: var(--white);
    }
</style>