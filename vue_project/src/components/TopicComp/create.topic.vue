<template>
    <v-container class="py-5" width="500">
        <h1 class="text-center mb-4">Criar Tópico</h1>
        <v-form @submit.prevent="submitForm">
            <v-text-field
            v-model="TopicTitle"
            :rules="TopicTitleRules"
            label="Título do Tópico"
            ></v-text-field>

            <v-textarea
            v-model="TopicDescription"
            :rules="TopicDescriptionRules"
            label="Descrição / Pergunta do Tópico"
            rows="3"
            outlined
            ></v-textarea>

            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
  name: 'v-create-topic',
  data() {
    return {
        TopicTitle: '',  
        TopicDescription: '',   
        TopicTitleRules: [
        v => !!v || 'Topic Title is required',
        v => v.length <= 30 || 'Topic Title is too long',  
        v => v.length >= 5 || 'Topic Title is too short' 
        ],
        TopicDescriptionRules: [
        v => v.length <= 100 || 'Topic Description is too long',
        ],

    }
  },
  methods: {
    submitForm() {
        console.log('TopicTitle:', this.TopicTitle);
        console.log('TopicDescription:', this.TopicDescription);

        alert(`Topic Title: ${this.TopicTitle}\nTopic Description: ${this.TopicDescription}`);
    }
  }
}
</script>