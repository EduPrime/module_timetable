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
          <li><b>Configurações do módulo de horários</b>.</li>
          <li>Preferências de visualização (cores, modo Kanban/Calendário, etc.).</li>
          <li>Cadastro de regras padrão (ex: intervalo fixo, restrições de disciplina).</li>
          <li>Gerenciamento de permissões (quem pode editar, aprovar trocas, etc.).</li>
          <li>Integração com calendário escolar (feriados, eventos).</li>
          <li>Sincronização com dados do EduPrime.</li>
        </ul>
      </ion-card-content>
    </ion-card>
    <ion-toolbar>
      <ion-title>Visualização Blocos</ion-title>
    </ion-toolbar>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Configurações/Preferências</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Em breve: configurações e preferências do módulo de horários.</p>
    </ion-card-content>
  </ion-card>
  </ContentLayout>
</template>
