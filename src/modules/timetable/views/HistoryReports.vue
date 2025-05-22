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
          <li><b>Histórico de alterações</b> e relatórios do quadro de horários.</li>
          <li>Linha do tempo de mudanças (quem trocou o quê e quando).</li>
          <li>Relatórios exportáveis (PDF, planilha).</li>
          <li>Indicadores de uso (número de trocas, conflitos resolvidos, etc.).</li>
          <li>Filtros por período, turma, professor.</li>
          <li>Visualização de feedbacks dos professores.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Visualização Blocos</ion-title>
    </ion-toolbar>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Histórico/Relatórios</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Em breve: histórico de alterações e relatórios do quadro de horários.</p>
    </ion-card-content>
  </ion-card>
  </ContentLayout>
</template>
