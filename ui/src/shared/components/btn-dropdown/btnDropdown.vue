<template src="./btnDropDown.html"></template>
<script lang="ts">
import { defineComponent } from 'vue'
import { FormButtons } from '@interfaces'

export default defineComponent({
    name: "BtnListComponent",
    props: {
        options: {
            type: Array<FormButtons>,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    },
    data: function () {
        return { isActionsVisible: true }
    },
    emits: ['clicked'],
    methods: {
        triggerEvent: function (buttonClicked: FormButtons) {
            this.$emit('clicked', buttonClicked)
            this.isActionsVisible = !this.isActionsVisible

        },
        hideActions() {
            this.isActionsVisible = !this.isActionsVisible
        }
    },

})
</script>