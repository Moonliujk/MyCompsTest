<template>
  <div>
      <label v-if="label">{{label || ''}}</label>
      <div>
          <slot></slot>
          <p v-if="errmsg">{{errmsg}}</p>
      </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';

export default {
    name: 'ljkFormItem',
    props: ['label', 'prop'],
    inject: ['form'],
    data () {
        return {
            errmsg: ''
        };
    },
    methods: {
        validate () {
            if (!this.prop) return;

            const value = this.form.model[this.prop];
            const rule = this.form.rules[this.prop];

            const descriptor = {
                [this.prop]: rule
            };
            const validator = new AsyncValidator(descriptor);

            return validator.validate({[this.prop]: value}, errors => {
                if (errors) {
                    this.errmsg = errors[0].message || '';
                } else {
                    this.errmsg = '';
                }
            });
        }
    }
}
</script>

<style>

</style>