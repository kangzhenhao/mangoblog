<template>
  <div class="login-container">
    <el-card shadow="never">
      <h2>Mango</h2>
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="80px">
        <el-form-item label="用户 :" prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user" ref="usernameInputRef"></el-input>
        </el-form-item>
        <el-form-item label="密码 :" prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-unlock" show-password></el-input>
        </el-form-item>
        <el-form-item>
        <el-checkbox v-model="loginForm.remember" @change="rememberPwd">记住密码</el-checkbox>
          <el-button type="info" size="small" round @click="resetForm">重置</el-button>
          <el-button type="primary" size="small" round @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        remember: false
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 12, message: '用户长度在 2 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    const getuser = JSON.parse(window.localStorage.getItem('mangoUser'))
    if (getuser) {
      this.loginForm = getuser
    }
  },
  mounted () {
    if (!this.loginForm.remember) {
      this.$refs.usernameInputRef.focus()
    }
  },
  methods: {
    login () {
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          this.$router.replace('/home')
        }
      })
    },
    rememberPwd () {
      if (this.loginForm.remember) {
        window.localStorage.setItem('mangoUser', JSON.stringify(this.loginForm))
      } else {
        window.localStorage.removeItem('mangoUser')
      }
    },
    resetForm () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: url("./image/login-bg.jpg");
  background-size:100% 100%;
  .el-card {
    width: 350px;
    padding-right: 23px;
    h2 {
      margin-left: 23px;
      margin-bottom: 35px;
      text-align: center;
      font-family: HoangYen11;
      user-select: none;
    }
    .el-form .el-form-item:nth-of-type(3) {
      position: relative;
      text-align: right;
      .el-checkbox {
        position: absolute;
        left: -50px;
      }
    }
  }
}
</style>
