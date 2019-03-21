<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Ajustes</v-toolbar-title>
        </v-toolbar>
        <v-form style="margin: 15px;">
          <h1>
            Hola {{currentName}} aqui puedes modificar tus datos:
          </h1>
          <v-text-field
            v-model="user.nombre"
            :rules="nameRules"
            label="Nombre completo"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="currentPassword"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña actual"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
          v-model="newPassword"
            :append-icon="show2 ? 'visibility' : 'visibility_off'"
            :type="show2 ? 'text' : 'password'"
            name="input-10-1"
            label="Nueva contraseña"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-text-field
            v-model="passwordConfirm"
            :append-icon="show3 ? 'visibility' : 'visibility_off'"
            :type="show3 ? 'text' : 'password'"
            name="input-10-1"
            label="Confirmar contraseña"
            hint="Al menos 8 caracteres"
            counter
            @click:append="show3 = !show3"
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
export default {
  data() {
    return {
      user: { nombre: "Gerardo Vega", email: "vega@gmail.com", password: "MeLoVoyACoger!"},
      show1: false,
      show2: false,
      show3: false,
      currentName: "",
      currentEmail: "",
      currentPassword: "",
      newPassword: "",
      passwordConfirm: "",
    };
  },
  created(){
    this.currentName = this.user.nombre;
  },
  methods: {
    Comprobar(){
      if(this.currentPassword.length == 0){
        alert("Ingrese la contraseña anterior");
      }
      else if(this.newPassword.length < 8){
        alert("La contraseña debe tener al menos 8 caracteres");
      }
      else if(this.user.password != this.currentPassword){
        alert("La contraseña actual es incorrecta");
      }
      else if(this.newPassword != this.passwordConfirm){
        alert("Las contraseñas no coinciden");
      }
      else{
        alert("Datos modificados con éxito");
      }
    },
    Guardar(){
      this.Comprobar();
    }
  }
}
</script>
