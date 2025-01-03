<template>
  <v-container>
    <!-- Primeiro Card -->
    <v-card
      class="mx-auto mb-16"
      prepend-icon="mdi-account"
      width="400"
    >
      <template v-slot:title>
        <span class="margin-lefter font-weight-black">Manage Account</span>
      </template>

      <template v-slot:subtitle>
        <span class="margin-lefter">Heisdoffer487</span>
      </template>
      <v-card-text class="bg-surface-light pt-4">
        Aqui você pode ajustar as informações da sua conta, explorar seus tópicos e gerenciá-los com facilidade — apague ou atualize-os do seu jeito.
      </v-card-text>
    </v-card>

    <!-- Linha para alinhar o Formulário e o Card -->
    <v-row>
      <!-- Coluna para o Formulário -->
      <v-col cols="6">
        <v-sheet
      height="100%"
      class="mx-auto pa-6 rounded-lg elevation-2" 
      tile
    >
      <h1 class="text-h5 font-weight-bold mb-4">Novos Dados</h1>
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

      <!-- Coluna para o Segundo Card -->
      <v-col cols="6">
        <v-card
          title="Meus Tópicos"
          subtitle="Tópicos de Heisdoffer487"
          class="mb-4"
          height="70%"
        >
          <v-card-text>
            Neste espaço, você pode ajustar as informações da sua conta de forma rápida e prática. Explore todos os tópicos que você criou, verifique detalhes importantes ou até mesmo corrija algo que não ficou como desejado. Nosso objetivo é garantir que você tenha total controle sobre sua experiência e que gerenciar seus conteúdos seja algo simples e intuitivo. Sinta-se à vontade para personalizar e manter tudo do seu jeito!
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="handleAction">Editar/Ver Tópicos</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
    export default{
        name: 'v-manage',
        data() {
            return {
            Username: '',  
            Password: '',   
            PasswordConf: '',   
            Email: '',  
            UsernameRules: [
                v => !!v || 'Username is required', 
            ],
            PasswordRules: [
                v => v.length >= 8 || "Password minimum length is 8",
                v => !!v || 'Password is required', 
            ],   
            PasswordConfRules: [
                    v => v === this.Password || 'Passwords must match',
            ],   
            EmailRules: [
                v => !!v || 'E-Mail is required', 
            ],
            }
        },
        methods: {
            submitForm() {
                console.log('Username:', this.Username);
                console.log('Password:', this.Password);
                console.log('Email:', this.Email);

                alert(`Username: ${this.Username}\nPassword: ${this.Password}\nEmail: ${this.Email}`);
                }
        }
    } 
</script>

<style>
    .margin-lefter{
        margin-left: 1rem;
    }
</style>