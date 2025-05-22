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
          <li><b>Visualização tradicional em grade semanal</b> (dias x horários).</li>
          <li>Blocos de aula posicionados conforme dia/horário.</li>
          <li>Edição direta (arrastar, tocar e segurar para mover).</li>
          <li>Destaque de conflitos e sugestões de IA.</li>
          <li>Filtros por turma, professor, sala.</li>
          <li>Mobile: agenda semanal com scroll e zoom.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ContentLayout>
    <ion-toolbar>
      <ion-title>Calendário</ion-title>
    </ion-toolbar>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Visualização Calendário</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Em breve: visualização em calendário semanal.</p>
    </ion-card-content>
  </ion-card>
  </ContentLayout>
</template>
