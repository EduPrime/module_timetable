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
          <li><b>Foco na edição inicial</b>, com blocos móveis de aulas.</li>
          <li>Lista de aulas não alocadas e grade vazia ao lado.</li>
          <li>Arrastar blocos para slots livres.</li>
          <li>Alternativa de toque para selecionar bloco e slot (acessibilidade).</li>
          <li>Destaque de blocos com conflito ou sugestão de IA.</li>
          <li>Mobile: quadro por turma, navegação lateral.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Visualização Blocos</ion-title>
    </ion-toolbar>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Visualização Blocos</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Em breve: visualização de blocos arrastáveis.</p>
      </ion-card-content>
    </ion-card>
  </ContentLayout>
</template>
