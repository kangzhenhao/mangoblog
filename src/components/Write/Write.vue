<template>
  <div class="write-container">
    <div class="container">
      <el-card shadow="never">
        <el-row>
          <el-form :model="blog" :rules="blogRules" ref="blogRef">
            <el-row>
              <el-col :span="8">
                <el-form-item label="标题：" label-width="65px" prop="title">
                  <el-input size="small" v-model="blog.title" placeholder="请输入博客标题..."></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="14">
                <el-form-item label="描述：" label-width="65px" prop="describe">
                  <el-input size="small" v-model="blog.describe" placeholder="请输入博客简要描述..."></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item prop="content">
              <mavon-editor
                v-model="blog.content"
                style="min-height: 600px" />
            </el-form-item>
            <el-button type="info" size="small" @click="resetBlog">清空内容</el-button>
            <el-button type="primary" size="small" @click="sendBlog">发表博客</el-button>
          </el-form>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  components: {
    mavonEditor
  },
  data () {
    return {
      blog: {
        title: '',
        describe: '',
        content: ''
      },
      blogRules: {
        title: [
          { required: true, message: '请输入博客标题', trigger: 'blur' },
          { min: 2, max: 16, message: '博客标题长度在 2 到 16 个字符', trigger: 'blur' }
        ],
        describe: [
          { required: true, message: '请输入博客简要描述', trigger: 'blur' },
          { min: 2, max: 30, message: '博客简要描述长度在 2 到 30 个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入博客内容', trigger: 'blur' },
          { min: 6, message: '博客内容最少为 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetBlog () {
      this.$refs.blogRef.resetFields()
    },
    sendBlog () {
      this.$refs.blogRef.validate(valid => {
        if (valid) {
          this.$notify({
            title: '成功',
            message: '博客发表成功',
            type: 'success'
          })
          console.log(this.blog.content)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.write-container .el-card {
  margin-top: 20px;
}
</style>
