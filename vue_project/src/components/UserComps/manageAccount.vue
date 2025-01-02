<template>
    <v-card
    class="mx-auto"
    prepend-icon="mdi-account"
    width="400">
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
    <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="Username"
          :rules="UsernameRules"
          label="Username"
        ></v-text-field>

        <v-text-field
          v-model="Email"
          :rules="EmailRules"
          label="Email"
        ></v-text-field>
  
        <v-text-field
          v-model="Password"
          :rules="PasswordRules"
          label="Password"
          type="password"
        ></v-text-field>

        <v-text-field
          v-model="PasswordConf"
          :rules="PasswordConfRules"
          label="Confirm Password"
          type="password"
        ></v-text-field>
  
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
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