<template>
  <div class="write-container">
    <div class="container">
      <el-card shadow="never">
        <el-row>
          <el-col :span="11">
            <el-form :model="blog" :rules="blogRules" ref="blogRef">
              <el-form-item label="标题：" label-width="65px" prop="title">
                <el-input size="small" v-model="blog.title"></el-input>
              </el-form-item>
              <el-form-item label="描述：" label-width="65px" prop="describe">
                <el-input size="small" v-model="blog.describe"></el-input>
              </el-form-item>
              <el-form-item label="博客内容：" prop="content">
                <el-input
                  type="textarea"
                  :rows="26"
                  v-model="blog.content"
                  @input="convertText"
                  resize="none">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="info" size="small" @click="resetBlog">清空内容</el-button>
                <el-button type="primary" size="small" @click="sendBlog">发表博客</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="preview">
              <div v-if="blog.content" v-html="preview"></div>
              <div class="tips" v-else>博客预览区域...</div>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import showdown from 'showdown'
import './css/sspai.css'

export default {
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
      },
      components: {
        showdown
      },
      preview: '',
      converter: {}
    }
  },
  mounted () {
    this.converter = new showdown.Converter()
  },
  methods: {
    convertText () {
      this.preview = this.converter.makeHtml(this.blog.content)
    },
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
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
// @import url('./css/sspai.css');

.write-container .el-card {
  margin-top: 20px;
}

.preview {
  padding: 5px 15px;
  height: 726px;
  border: 1px solid #d7dae2;
  border-radius: 4px;
  overflow-y: auto;
  .tips {
    color: #CACACA;
  }
}

.write-container .el-form-item:nth-of-type(4) {
  text-align: right;
}

.el-notification__title {
  border: none;
  padding-left: 0;
}
</style>
