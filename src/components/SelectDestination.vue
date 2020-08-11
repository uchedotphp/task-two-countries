<template>
  <div>
    <div class="selectDestination">
      <el-select
        v-model="selectedCountry"
        @change="pickedCountry(selectedCountry)"
        filterable
        placeholder="Select a Country"
      >
        <el-option
          v-for="country in countries"
          :key="country.id"
          :label="country.name"
          :value="country.id"
        ></el-option>
      </el-select>

      <el-select
        @change="pickedState(selectedState)"
        v-model="selectedState"
        placeholder="Select a State"
      >
        <el-option
          v-for="state in states"
          :key="state.id"
          :label="state.name"
          :value="state.id"
        ></el-option>
      </el-select>

      <el-select
        @change="pickedCity(selectedCity)"
        v-model="selectedCity"
        placeholder="Select a City"
      >
        <el-option
          v-for="city in cities"
          :key="city.id"
          :label="city.name"
          :value="city.id"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nprogress from "nprogress";
import eventBus from "@/resources/eventBus.js";
export default {
  name: "SelectDestinationComponent",
  created() {
    axios.interceptors.request.use((config) => {
      Nprogress.start();
      return config;
    });

    axios.interceptors.response.use((response) => {
      Nprogress.done();
      return response;
    });

    axios
      .get(
        "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
      )
      .then((response) => {
        this.countries = response.data;
      })
      .catch((error) => {
        debugger;
        error;
      });
  },
  data() {
    return {
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      countries: [],
      states: [],
      cities: [],
    };
  },
  methods: {
    pickedCountry(selectedCountry) {
      const country = this.countries.find((e) => e.id == selectedCountry);
      this.states = country.states;
      eventBus.$emit("selected-country", country.name);
    },

    pickedState(selectedState) {
      const state = this.states.find((e) => e.id == selectedState);
      this.cities = state.cities;
      eventBus.$emit("selected-state", state.name);
    },
    pickedCity(selectedCity) {
      const city = this.cities.find((e) => e.id == selectedCity);
      eventBus.$emit("selected-city", city.name);
    },
  },
};
</script>

<style scoped>
.el-select {
  padding: 10px 0;
  display: block;
}
</style>
