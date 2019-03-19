<template>
  <v-app>
    <main-drawer />
    <main-navbar />
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
