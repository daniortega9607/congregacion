<template>
  <v-app>
    <main-drawer />
    <main-navbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import MainNavbar from "@/components/MainNavbar";
import MainDrawer from "@/components/MainDrawer";

export default {
  name: 'App',
  components: { MainDrawer, MainNavbar },
  data () {
    return {
    }
  }
}
</script>
