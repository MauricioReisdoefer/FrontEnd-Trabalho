<template>
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
</template>

<script>
    export default{
        name: 'v-login',
        data() {
            return {
                Username: '',  
                Password: '',   
                UsernameRules: [
                    v => !!v || 'Username is required', 
                ],
                PasswordRules: [
                    v => !!v || 'Password is required', 
                ],   
                }
            },
        methods: {
            submitForm() {
                console.log('Username:', this.Username);
                console.log('Password:', this.Password);

                alert(`Username: ${this.Username}\nPassword: ${this.Password}`);
                }
            }
        } 
</script>