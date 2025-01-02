<template>
    <v-sheet class="mx-auto" width="300">
    <h1 class="text-center mb-4">Entrar na Conta</h1>
    <v-form fast-fail @submit.prevent="submitForm">
        <v-text-field
          v-model="Username"
          :rules="UsernameRules"
          label="Username"
        ></v-text-field>

        <v-text-field
          v-model="Password"
          :rules="PasswordRules"
          label="Password"
          type="password"
        ></v-text-field>
  
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
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