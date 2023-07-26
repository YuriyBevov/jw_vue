<template>
    <button       
        :class="{
            'direction-rtl': iconPositionRight, 
            'outlined': outlined
        }"
    >
        <SaveIcon v-if="iconType === 'save'"/>

        {{title}}
    </button>
</template>

<script setup>
    import SaveIcon from '../assets/icons/IconSave.vue' 

    defineProps({
        title: String,
        iconType: String,
        iconPositionRight: Boolean, // Расположение иконки справа
        outlined: Boolean,
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

        border-radius: 3px;
        color: var(--white);
        background-color: var(--success);

        svg {
            fill: var(--white);
            margin-right: 8px;
        }

        &.direction-rtl {
            flex-direction: row-reverse;

            svg {
                margin: 0;
                margin-left: 8px;
            }
        }

        &.outlined {
            border-color: var(--success);
            background-color: transparent;
            color: var(--success);

            svg {
                fill: var(--success);
            }
        }
    }
</style>
