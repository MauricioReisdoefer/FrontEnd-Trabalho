<template>
  <v-container class="py-5" fluid>
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="font-weight-bold mb-3">Tópicos do Fórum</h1>
        <p class="text-body-1">
          Bem-vindo ao fórum! Aqui você pode discutir ideias, compartilhar conhecimentos e participar de debates construtivos. Explore os tópicos abaixo ou crie o seu próprio. Lembre-se de manter o tema sobre espaço ou sobre ciência.
        </p>
      </v-col>
    </v-row>

    <!-- Botão para Criar Tópico -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8" class="text-center">
        <v-btn
          large
          color="green"
          class="text-white rounded-0"
          to="/createTopic"
          elevation="2"
        >
          Criar Novo Tópico
        </v-btn>
      </v-col>
    </v-row>

    <!-- Lista de Tópicos -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8">
        <v-list>
          <v-list-item
            v-for="(topic, index) in topics"
            :key="topic.id"
            class="mb-8"
            two-line
            rounded
            tile
            elevation="1"
            hover
            @click="viewTopic(index)"
          >
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium mb-1">{{ topic.title }}</v-list-item-title>
              <v-list-item-subtitle class="text-body-2">{{ topic.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn small color="primary" class="rounded-0">Ver</v-btn>
              <v-list-item-subtitle class="text-body-2 ml-2">{{ topic.user }}</v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'v-topics',
  data() {
    return {
      topics: [
        { title: 'O que é DevOps?', description: 'Quais são os principais benefícios de implementar DevOps em uma equipe de desenvolvimento?', user: 'João Silva', id: 1 },
        { title: 'Como funciona o Git?', description: 'Estou aprendendo Git e não entendi bem como utilizar branches no repositório.', user: 'Maria Oliveira', id: 2 },
        { title: 'Por que usar TypeScript?', description: 'Estou em dúvida se vale a pena investir em TypeScript para projetos de grande escala.', user: 'Carlos Souza', id: 3 },
        { title: 'O que é uma API REST?', description: 'Quais as principais diferenças entre REST e SOAP, e qual deles é mais adequado para apps móveis?', user: 'Ana Costa', id: 4 },
        { title: 'Como aprender Python?', description: 'Quais são os melhores recursos para aprender Python do zero e começar a desenvolver?', user: 'Felipe Mendes', id: 5 },
      ],
    }
  },
  methods: {
    viewTopic(index) {
      const topicId = this.topics[index].id;
      axios.get(`/Topic/GetTopic/${topicId}`)
        .then(response => {
          alert(`Tópico: ${response.data.topicname}\nDescrição: ${response.data.description}`);
        })
        .catch(error => {
          console.error('Erro ao buscar o tópico:', error);
          alert('Erro ao carregar o tópico.', error);
        });
    },
  },
}
</script>

<style scoped>
h1, p, .v-list-item-title, .v-list-item-subtitle {
  color: #333 !important;
}

.v-btn {
  text-transform: none;
}

.v-list-item {
  background-color: #fafafa;
  border-radius: 8px;
}

.v-list-item:hover {
  background-color: #f5f5f5;
}

.v-btn:hover {
  background-color: #4caf50;
  color: white;
}

.custom-margin-left {
  margin-left: 16px;
}

.text-primary {
  color: #1976D2 !important;
}

.text-body-1 {
  color: #555;
}

.text-body-2 {
  color: #777;
}
</style>
