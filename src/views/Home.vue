<template>
  <div class="home_container">
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  background: #fff;
}
.el-main {
  padding: 0;
}
</style>
