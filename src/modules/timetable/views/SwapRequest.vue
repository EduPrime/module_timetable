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
          <li><b>Professores solicitam trocas de aulas/horários</b> de forma simples e visual.</li>
          <li>Listagem das aulas do professor, com botão "Solicitar Troca" em cada uma.</li>
          <li>Modalidade de <b>troca direta</b> (escolher colega e aula para trocar) ou <b>aberta</b> (deixar disponível para outros).</li>
          <li>Visualização de horários alternativos elegíveis, com filtro automático de opções válidas.</li>
          <li>Envio de solicitação e acompanhamento do status (pendente, aceita, recusada).</li>
          <li>Notificações e fluxo de aprovação (colega, secretaria).</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Visualização Blocos</ion-title>
    </ion-toolbar>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Solicitar Troca de Aula</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Em breve: solicitação de troca de aulas entre professores.</p>
    </ion-card-content>
  </ion-card>
  </ContentLayout>
</template>
