<template>
  <el-container id="app">
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-main><router-view/></el-main>
    <el-footer>Pie de página</el-footer>
  </el-container>
</template>

<script>

import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader
  }
}
</script>

<style>

</style>
