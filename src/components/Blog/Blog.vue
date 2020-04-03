<template>
  <div>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <el-row :gutter="20">
        <el-col :xs="24" :span="19">
          <el-card shadow="never">
            <ul class="blog-list">
              <li v-for="(item, index) in 10" :key="index">
                <h4 href="javascript:;" target="_blank" :underline="false">
                  Blog title {{++index}}
                </h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quaerat dolorum explicabo ad eaque libero sint? Reiciendis eum neque voluptates aut iste temporibus deleniti, non iusto, reprehenderit aliquam in. Accusamus.</p>
                <el-divider></el-divider>
              </li>
            </ul>
            <el-pagination
              small
              layout="prev, pager, next"
              :total="80">
            </el-pagination>
          </el-card>
        </el-col>
        <el-col class="hidden-xs-only" :span="5">
          <el-card shadow="never">
            <ul class="to">
              <li>
                <el-link class="github" href="https://github.com/kangzhenhao" target="_blank">Github</el-link>
              </li>
              <li>
                <el-link type="success" href="https://cn.vuejs.org/" target="_blank">Vue</el-link>
              </li>
              <li>
                <el-link type="success" href="https://vuex.vuejs.org/zh/guide/" target="_blank">Vuex</el-link>
              </li>
              <li>
                <el-link class="node" href="http://nodejs.cn/" target="_blank">Node</el-link>
              </li>
              <li>
                <el-link type="primary" href="https://react.docschina.org/" target="_blank">React</el-link>
              </li>
              <li>
                <el-link type="primary" href="https://element.eleme.cn/#/zh-CN" target="_blank">Element-UI</el-link>
              </li>
              <li>
                <el-link type="primary" href="https://mint-ui.github.io/#!/zh-cn" target="_blank">Mint-UI</el-link>
              </li>
              <li>
                <el-link href="https://www.layui.com/" target="_blank">LayUI</el-link>
              </li>
              <li>
                <el-link href="https://v3.bootcss.com/" target="_blank">Boostrap</el-link>
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-backtop>
      <i class="el-icon-caret-top"></i>
    </el-backtop>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.el-card {
  margin: 20px 0;
  .blog-list li {
    margin-bottom: 15px;
    padding-right: 5%;
    height: 80px;
    cursor: pointer;
    h4 {
      margin-top: 15px;
      font-weight: bolder;
    }
    p {
      margin: 10px 0;
      width: 98%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      color: #C5C5C5;
    }
  }
  li:last-child {
    margin-bottom: 0;
  }
  .to li {
    margin-bottom: 10px;
  }
  .el-pagination {
    margin: 15px 0 0 0;
  }
}

.github {
  color: #24292e !important;
}

.node {
  color: #43853d !important;
}
</style>
