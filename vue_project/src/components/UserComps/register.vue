<template>
  <v-sheet
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
</template>
  
<script>
import axios from 'axios'
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
      try{
        const response = axios.post('/User/CreateUser', this.formData)
        alert('Deu boa')
      } catch(err){
        alert(err);
      }
    }
  }
}
</script>
  