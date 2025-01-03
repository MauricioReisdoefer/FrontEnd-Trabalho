<template>
  <v-container class="py-5" fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-4" outlined>
          <v-card-title class="text-h5 text-center">Criar Tópico</v-card-title>

          <v-form @submit.prevent="submitForm" v-model="formValid">
            <v-text-field
              v-model="TopicTitle"
              :rules="TopicTitleRules"
              label="Título do Tópico"
              outlined
              dense
              color="primary"
            ></v-text-field>

            <v-textarea
              v-model="TopicDescription"
              :rules="TopicDescriptionRules"
              label="Descrição / Pergunta do Tópico"
              rows="4"
              outlined
              dense
              color="primary"
            ></v-textarea>

            <v-btn 
              class="mt-4" 
              type="submit" 
              block
              :disabled="!formValid"
              color="success"
              >Criar Tópico</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'v-create-topic',
  data() {
    return {
      TopicTitle: '',
      TopicDescription: '',
      formValid: false,
      TopicTitleRules: [
        v => !!v || 'O título do tópico é obrigatório',
        v => v.length <= 30 || 'O título do tópico é muito longo',
        v => v.length >= 5 || 'O título do tópico é muito curto',
      ],
      TopicDescriptionRules: [
        v => v.length <= 100 || 'A descrição do tópico é muito longa',
      ],
    };
  },
  methods: {
  submitForm() {
    axios.post(`/Topic/CreateTopic`, {
        title_: this.TopicTitle,
        text_: this.TopicDescription
        }, {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImlhdCI6MTczNTkyNTIzNH0.6MvccqdVQJJ3ODe1FghZV8OtnbbsM85YQ966Ytdw_Jg'
        }
        })
        .then(response => {
          alert('Topic Created', response);
        })
        .catch(error => {
          alert('Fuck me', error)
        })
      }
  }
}
</script>

<style scoped>
.v-btn {
  font-weight: bold;
}
.v-card {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
