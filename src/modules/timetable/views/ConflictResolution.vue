<script setup lang="ts">
import ContentLayout from '@/components/theme/ContentLayout.vue'

</script>

<template>
  <ContentLayout>
    <ion-card color="light" class="ion-margin-bottom">
      <ion-card-header>
        <ion-card-title>O que esta tela faz?</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ul>
          <li><b>Identificação e resolução automática de conflitos de grade</b>.</li>
          <li>Listagem de conflitos detectados (professor, sala, turma, disponibilidade).</li>
          <li>Botão "Sugerir Solução" para cada conflito, acionando a IA.</li>
          <li>Exibição de sugestões de resolução (mover aula, trocar professor, rearranjo em cascata).</li>
          <li>Aplicação semi-automática das soluções sugeridas, com opção de revisão manual.</li>
          <li>Destaque visual dos conflitos e status de resolução.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Visualização Blocos</ion-title>
    </ion-toolbar>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Resolução de Conflitos</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Em breve: resolução automática de conflitos de grade.</p>
    </ion-card-content>
  </ion-card>
  </ContentLayout>
</template>
