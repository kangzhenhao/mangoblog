<template>
  <div>
    <div class="container navBar">
      <div class="logo">
        <a>Mango</a>
      </div>
      <el-menu class="hidden-xs-only" mode="horizontal" default-active="/home" router>
        <el-menu-item index="/home">主页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-menu>
      <div class="logout hidden-xs-only">
        <el-button type="primary" size="small" icon="el-icon-edit" @click="toWrite">写博客</el-button>
      </div>
      <el-dropdown class="hidden-sm-and-up" size="mini" trigger="click">
        <el-button type="primary">
          <i class="el-icon-s-operation"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Home</el-dropdown-item>
          <el-dropdown-item>About</el-dropdown-item>
          <el-dropdown-item>写博客</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toWrite () {
      this.$router.push('/write')
    }
  }
}
</script>

<style lang="less" scoped>
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo a {
  display: inline-block;
  // margin-right: 30px;
  font-size: 2rem;
  font-weight: bolder;
  font-family: HoangYen11;
  color: #409EFF;
  border-bottom: none;
  user-select: none;
}
</style>
