<template>
    <v-card title="Entrar / Registrar Conta" subtitle="Para entrar é necessário que a conta já tenha sido criada">
      <!-- Alternar entre Login e Register -->
      <v-tabs v-model="activeTab">
        <v-tab>Login</v-tab>
        <v-tab>Registrar</v-tab>
      </v-tabs>
    </v-card> <!-- v-if="activeTab === 1" -->
    <v-row>
        <v-col v-if="activeTab === 1"><v-sheet
            height="100%"
            class="mx-auto pa-6 rounded-lg elevation-2" 
            tile>
            <h1 class="text-h5 font-weight-bold mb-4">Criar Conta</h1>
            <v-form fast-fail @submit.prevent>
                <v-text-field
                v-model="Username"
                :rules="UsernameRules"
                label="Username"
                outlined
                dense
                ></v-text-field>

                <v-text-field
                v-model="Email"
                :rules="EmailRules"
                label="Email"
                outlined
                dense
                ></v-text-field>

                <v-text-field
                v-model="Password"
                :rules="PasswordRules"
                label="Password"
                type="password"
                outlined
                dense
                ></v-text-field>

                <v-text-field
                v-model="PasswordConf"
                :rules="PasswordConfRules"
                label="Confirm Password"
                type="password"
                outlined
                dense
                ></v-text-field>
                
                <v-btn class="mt-4 mb-10" type="submit" block color="primary">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-col>

    <v-col v-if="activeTab === 0">
        <v-sheet
      height="100%"
      class="mx-auto pa-6 rounded-lg elevation-2" 
      tile
    >
      <h1 class="text-h5 font-weight-bold mb-4">Entrar na Conta</h1>
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="Username"
          :rules="UsernameRules"
          label="Username"
          outlined
          dense
        ></v-text-field>

        <v-text-field
          v-model="Password"
          :rules="PasswordRules"
          label="Password"
          type="password"
          outlined
          dense
        ></v-text-field>
        
        <v-btn class="mt-4 mb-10" type="submit" block color="primary">Submit</v-btn>
      </v-form>
    </v-sheet>
    </v-col>
    </v-row>
  </template>
  
  <script>
    import login from './login.vue';
    import Register from './register.vue';
  
  export default {
    name: 'v-regis-login-page',
    components: [
      login,
      Register
    ],
    data() {
      return {
        activeTab: 0
      };
    }
  }
  </script>
  