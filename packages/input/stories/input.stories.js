import LjkInput from '../';

export default {
    title: 'LjkInput',
    component: LjkInput
}

export const Text = () => ({
    components: {LjkInput},
    template: '<ljk-Input v-model="value"></ljk-Input>',
    data () {
        return {
            value: '文本'
        }
    }
});

export const Password = () => ({
    components: {LjkInput},
    template: '<ljk-Input type="password" v-model="value"></ljk-Input>',
    data () {
        return {
            value: '密码'
        }
    }
});