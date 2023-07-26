<template>
    <button>
        {{title}}
    </button>
</template>

<script setup>
    import SaveIcon from '../assets/icons/IconSave.vue' 

    defineProps({
        title: String,
    })
</script>

<style lang="scss" scoped>
    @import "../assets/styles/base.scss";
    @import "../assets/styles/mixins.scss";
    @import "../assets/styles/extends.scss";
    @import "../assets/styles/common.scss";

    button {
        @extend .flex-centered-content;
        @extend .button-reset;
        @extend .lw-main-btn;

        border: 1px solid var(--gray);
        border-radius: 3px;
        background: var(--linear, linear-gradient(180deg, #fefefe 0%, #f6f6f6 100%));
        color: var(--gray-7);
    }
</style>
