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
          <li><b>Visualização do quadro de horários em formato Kanban</b> (colunas por dia, cartões por aula).</li>
          <li>Arrastar cartões entre dias/horários para realocar aulas.</li>
          <li>Visualização rápida da distribuição semanal.</li>
          <li>Cores e ícones para disciplinas, professores e conflitos.</li>
          <li>Alternância entre turmas/turnos.</li>
          <li>Mobile: scroll horizontal para dias, vertical para horários.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Visualização Blocos</ion-title>
    </ion-toolbar>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Visualização Kanban</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Em breve: visualização Kanban do quadro de horários.</p>
    </ion-card-content>
  </ion-card>
  </ContentLayout>
</template>
