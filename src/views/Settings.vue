<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Ajustes</v-toolbar-title>
        </v-toolbar>
        <v-form style="margin: 15px;">
          <v-text-field
            v-model="nombreCompleto"
            :rules="nameRules"
            label="Nombre completo"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="passwordActual"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña actual"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="passwordNuevo"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Nueva contraseña"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="passwordConfirm"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirmar contraseña"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn
            color="primary"
            @click="Guardar"
          >Guardar
          </v-btn>
        </v-form> 
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
