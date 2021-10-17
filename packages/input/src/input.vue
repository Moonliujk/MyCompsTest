<template>
<div>
    <input
        v-bind="$attrs"
        :type="type"
        :value="value"
        @input="onInput"
    >
</div>
</template>

<script>
export default {
    name: 'ljkInput',
    inheritAttrs: false,
    props: {
        value: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
    },
    methods: {
        onInput (e) {
            this.$emit('input', e.target.value);
            const findParent = (parent) => {
                while (parent) {
                    if (parent.$options.name === 'ljkFormItem') {
                        break;
                    } else {
                        parent = parent.$parent;
                    }
                }

                return parent;
            }
            const parent = findParent(this.$parent);
            if (parent) {
                parent.validate();
            }
        }
    }
}
</script>

<style>

</style>
