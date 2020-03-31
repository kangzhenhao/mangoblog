<template>
  <div class="home_container">
    <el-container>
      <el-header>
        <div class="container navBar">
          <div class="logo">
            <a>Mango</a>
          </div>
          <el-menu class="hidden-xs-only" mode="horizontal" default-active="/home" router>
            <el-menu-item index="/home">Home</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
          </el-menu>
          <div class="logout hidden-xs-only">
            <el-button type="primary" size="small" icon="el-icon-edit">写博客</el-button>
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
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  background: #fff;
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
}

.el-main {
  padding: 0;
}
</style>
