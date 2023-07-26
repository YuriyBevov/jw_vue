<template>
    <button
        :class="{'active': isActive, 'color-light': colorLight}"
    >
        <IconPlus v-if="iconType === 'plus'"/>
        <IconListView v-if="iconType === 'listView'"/>
        <IconCardView v-if="iconType === 'cardView'"/>
        <IconTableView v-if="iconType === 'tableView'"/>

        <span>{{title}}</span>
    </button>
</template>

<script setup>
    import IconPlus from '../assets/icons/IconPlus.vue' 
    import IconListView from '../assets/icons/IconListView.vue' 
    import IconCardView from '../assets/icons/IconCardView.vue' 
    import IconTableView from '../assets/icons/IconTableView.vue'

    defineProps({
        title: String,
        iconType: String,
        colorLight: Boolean,
        isActive: Boolean,
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

        min-width: initial;
        min-height: 36px;
        
        padding: 5px 0;
        outline: 1px solid red;

        span {
            border-bottom: 1px solid var(--black);
        }

        svg {
            margin-right: 10px;

            fill: var(--success);
        }

        

        &.color-light {
            color: var(--gray-6);
            span {
                border-bottom-color: var(--gray-6);
            }

            svg {
                fill: var(--gray-6);
            }
        }

        &.active {
            border-color: transparent;
            color: var(--success);
        }
    }
</style>