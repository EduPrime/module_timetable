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
          <li><b>Plataforma colaborativa</b> para negociação de trocas de aulas, com sugestões inteligentes da IA.</li>
          <li>Listagem de solicitações de troca em aberto e histórico de negociações.</li>
          <li>Chat/comentários para negociação entre professores.</li>
          <li>Sugestões automáticas de cenários de troca ideais (direta, tripla, rearranjo).</li>
          <li>Visualização dos impactos de cada cenário sugerido (quem ganha, quem perde, conflitos evitados).</li>
          <li>Aprovação final e registro da negociação.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Negociação de Trocas (IA)</ion-title>
    </ion-toolbar>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Negociação de Trocas (IA)</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Em breve: negociação inteligente de trocas com IA.</p>
      </ion-card-content>
    </ion-card>
  </ContentLayout>
</template>
