<template>
  <div id="app">
    <SelectDestination />
    <DestinationDetails />
  </div>
</template>

<script>
import SelectDestination from "@/components/SelectDestination";
import DestinationDetails from "@/components/DestinationDetails";
export default {
  name: "app",
  components: {
    SelectDestination,
    DestinationDetails,
  },
};
</script>

<style>
/* Reset Styles */
* {
  margin: 0;
  padding: 0;
}

*::before,
*::after {
  box-sizing: border-box;
}

/* End of Reset */

#app {
  background-color: red;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
