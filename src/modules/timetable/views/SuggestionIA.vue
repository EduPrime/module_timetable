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
          <li><b>Geração automática de quadros de horários otimizados</b> via IA.</li>
          <li>Formulário para coletar dados necessários (turmas, disciplinas, professores, restrições, preferências).</li>
          <li>Botão para acionar a geração automática via IA (OpenAI).</li>
          <li>Exibição de <b>múltiplas sugestões</b> de horários otimizados, com indicadores (janelas de professor, dias de presença, etc.).</li>
          <li>Opção de comparar versões, aprovar uma sugestão ou pedir refinamento.</li>
          <li>Visualização dos critérios de otimização utilizados e explicação das sugestões da IA.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Sugestão Automática (IA)</ion-title>
    </ion-toolbar>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Sugestão Automática (IA)</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Em breve: geração automática de horários com IA.</p>
      </ion-card-content>
    </ion-card>
  </ContentLayout>
</template>
