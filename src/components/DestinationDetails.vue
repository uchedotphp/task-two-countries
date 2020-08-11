<template>
  <div>
    <p>
      Country Selected: {{ country }}
      <br />
      State Selected: {{ state }}
      <br />
      City Selected: {{ city }}
    </p>
  </div>
</template>

<script>
import eventBus from "@/resources/eventBus.js";
export default {
  name: "DestinationDetailsComponent",
  data() {
    return {
      country: "",
      state: "",
      city: ""
    };
  },
  created() {
    eventBus.$on("selected-country", value => {
      this.country = value;
    });
    eventBus.$on("selected-state", value => {
      this.state = value;
    });
    eventBus.$on("selected-city", value => {
      this.city = value;
    });
  }
};
</script>

<style lang="scss" scoped></style>
