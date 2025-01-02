<template>
  <v-sheet class="mx-auto" width="300">
    <h1 class="text-center mb-4">Criar Conta</h1>
    <v-form fast-fail @submit.prevent="submitForm">
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
  </v-sheet>
</template>
  
<script>
export default {
  name: 'v-register',
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
  