<template>
  <v-container class="py-5">
    <v-row justify="center" class="mb-4">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="font-weight-bold mb-2">Tópicos do Fórum</h1>
        <p>
          Bem-vindo ao fórum! Aqui você pode discutir ideias, compartilhar conhecimentos e participar de debates construtivos. Explore os tópicos abaixo ou crie o seu próprio. Lembre-se de manter o tema sobre espaço ou sobre ciência.
        </p>
      </v-col>
    </v-row>

    <!-- Botão para Criar Tópico -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="8" class="text-center">
        <v-btn
          large
          style="background-color: #90ea00; color: white;"
          to="/createTopic"
        >
          Criar Novo Tópico
        </v-btn>
      </v-col>
    </v-row>

    <!-- Lista de Tópicos -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-list>
          <v-list-item v-for="(topic, index) in topics" :key="index" class="mb-4" two-line>
            <v-list-item-content>
              <v-list-item-title class="mb-1">{{ topic.title }}</v-list-item-title>
              <v-list-item-subtitle class="mb-1">
                {{ topic.description }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn small @click="viewTopic(index)">Ver</v-btn>
              <v-list-item-subtitle class="mb-1 custom-margin-left">{{ topic.user }}</v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

  name: 'v-topics',
  data() {
    return {
      components: {
      },
      topics: [
        { title: 'O que é DevOps?', description: 'Quais são os principais benefícios de implementar DevOps em uma equipe de desenvolvimento?', user: "João Silva" },
        { title: 'Como funciona o Git?', description: 'Estou aprendendo Git e não entendi bem como utilizar branches no repositório.', user: "Maria Oliveira" },
        { title: 'Por que usar TypeScript?', description: 'Estou em dúvida se vale a pena investir em TypeScript para projetos de grande escala.', user: "Carlos Souza" },
        { title: 'O que é uma API REST?', description: 'Quais as principais diferenças entre REST e SOAP, e qual deles é mais adequado para apps móveis?', user: "Ana Costa" },
        { title: 'Como aprender Python?', description: 'Quais são os melhores recursos para aprender Python do zero e começar a desenvolver?', user: "Felipe Mendes" }
]

    };
  },
  methods: {
    viewTopic(index) {
      alert(`Você clicou no tópico: ${this.topics[index].title}`);
    },
  },
};
</script>

<style scoped>
h1, p, .v-list-item-title, .v-list-item-subtitle {
  color: black !important;
}

.v-btn {
  text-transform: none;
}

.custom-margin-left {
  margin-left: 16px;
}
</style>
