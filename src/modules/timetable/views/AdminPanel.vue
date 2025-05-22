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
          <li><b>Painel para gestão centralizada do quadro de horários</b>.</li>
          <li>Visão geral das turmas, professores, salas e status do quadro.</li>
          <li>Acompanhamento de solicitações de troca e conflitos pendentes.</li>
          <li>Ações administrativas: publicar quadro, arquivar, restaurar versões.</li>
          <li>Relatórios gerenciais e exportação.</li>
          <li>Notificações e comunicação com professores.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Painel Administrativo</ion-title>
    </ion-toolbar>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Painel Administrativo</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Em breve: painel administrativo para gestão do quadro de horários.</p>
      </ion-card-content>
    </ion-card>
  </ContentLayout>
</template>
