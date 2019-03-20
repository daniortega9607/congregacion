<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Ajustes</v-toolbar-title>
        </v-toolbar>
        <ButtonAdd />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ButtonAdd from "../components/ButtonAdd";
export default {
  components: { ButtonAdd }
}
</script>
