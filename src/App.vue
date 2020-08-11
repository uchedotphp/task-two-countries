<template>
  <div id="app">
    <el-header style="text-align: right;">
      <img height="60" src="./assets/wejapa.png" alt />
    </el-header>
    <el-row :gutter="20" type="flex" class="row-bg">
      <el-col :span="6">
        <div class="grid-content">
          <SelectDestination />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <DestinationDetails />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SelectDestination from "@/components/SelectDestination";
import DestinationDetails from "@/components/DestinationDetails";
export default {
  name: "app",
  components: {
    SelectDestination,
    DestinationDetails
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: url("./assets/world-map.jpg") no-repeat;
  background-size: cover;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px auto;
}

.el-row {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-light {
  background: #e5e9f2;
  padding: 50px 0;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
}
</style>
