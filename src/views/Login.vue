<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue">
                <v-toolbar-title>{{app.name}}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" autocomplete="off">
                  <v-text-field
                    v-model="user.email"
                    :rules="validations.email"
                    prepend-icon="person"
                    id="email"
                    name="login"
                    label="Correo Electrónico"
                    type="email"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="user.password"
                    :rules="validations.password"
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Contraseña"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="login" :disabled="!valid">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

const validations = {
  email: [
    v => !!v || "Debe ingresar un e-mail",
    v => /.+@.+/.test(v) || "Debe ingresar un e-mail válido"
  ],
  password: [v => !!v || "Debe ingresar una contraseña"]
};

export default {
  data() {
    return {
      user: { email: "", password: "" },
      valid: false,
      app: { name: "Felipe Ángeles" },
      validations
    };
  },
  methods: {
    login() {
      if (this.valid) {
        this.$router.push("/");
      }
    }
  }
};
</script>
