import LjkForm from '../';
import LjkFormItem from '../../formItem'
import LjkButton from '../../button'
import LjkInput from '../../input'

export default {
    title: 'LjkForm',
    component: LjkForm
}

export const Login = () => ({
    components: {
        LjkForm,
        LjkFormItem,
        LjkButton,
        LjkInput,
    },
    template: `
        <ljk-form class="form" ref="form" :model="user" :rules="rules">
            <ljk-form-item label="姓名：" prop="username">
                <ljk-input v-model="user.username" placeholder="请输入用户名"></ljk-input>
            </ljk-form-item>
            <ljk-form-item label="密码：" prop="password">
                <ljk-input type="password" v-model="user.password" placeholder="请输入密码"></ljk-input>
            </ljk-form-item>
            <ljk-form-item>
                <ljk-button type="primary" @click="onClick">确定</ljk-button>
            </ljk-form-item>
        </ljk-form>
    `,
    data () {
        return {
          user: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              {
                required: true,
                message: '请输入用户名'
              }
            ],
            password: [
              {
                required: true,
                message: '请输入密码'
              },
              {
                min: 6,
                max: 12,
                message: '请输入6-12位密码'
              }
            ]
          }
        };
    },
    methods: {
        onClick () {
            console.log('test');
            this.$refs['form'].validate(validate => {
            if (validate) {
                console.log('success');
            } else {
                console.log('fail');
            }
            });
        }
    }
});