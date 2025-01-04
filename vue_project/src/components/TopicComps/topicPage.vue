<template>
    <v-container class="pa-4">
      <v-card class="mx-auto" max-width="600">
        <v-card-title class="headline">{{ topic_title }}</v-card-title>
        <v-card-text>
          <p>{{ topic_description }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="voltar">Voltar</v-btn>
        </v-card-actions>
      </v-card>
      <v-list>
        <v-list-item
        v-for="post in posts"
        :key="post.id"
        class="mb-4"
        two-line
        tile
        elevation="1"
        hover>
        <v-list-item-content>
              <v-list-item-title class="font-weight-medium mb-1">{{ post.posttitle }}</v-list-item-title>
              <v-list-item-text class="text-body-2">{{ post.text }}</v-list-item-text>
              </v-list-item-content>
              <v-list-item-subtitle class="text-body-2 ml-2">Autor: {{  }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'v-topic-page',
    data() {
      return {
        topic_title: '',
        topic_description: '',
        posts: []
      };
    },
    methods: {
      loadTopicPage() {
        axios.get(`/Topic/GetTopic/${this.$route.params.id}`)
          .then(response => {
            this.topic_title = response.data.topicname;
            this.topic_description = response.data.description;
          })
          .catch(error => {
            console.error('Erro ao carregar a página do tópico:', error);
          });
      },
      voltar() {
        this.$router.go(-1);
      },
      topicPosts(){
        axios.get(`/Topic/GetTopic/Posts/${this.$route.params.id}`)
        .then(response => {
            this.posts = response.data.posts
        })
        .catch(error => {
            console.error("Erro: ", error)
        })
      }
    },
    mounted() {
      this.loadTopicPage();
      this.topicPosts();
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    border-radius: 12px;
  }
  .v-card-title {
    font-size: 24px;
    font-weight: bold;
  }
  .v-card-text {
    font-size: 16px;
    color: #555;
  }
  </style>
  