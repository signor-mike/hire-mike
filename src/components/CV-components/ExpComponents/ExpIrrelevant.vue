<i18n>
{
  "en": {
    "irrelevantExperience":"Volunteer experience",
    "header" : "Details",
    "irrelevantExperienceContent": {
      "line1" : "- Offered appropriate reservation options based on expected attendees when coordinating event;",
      "line2" : "- Responsible for customer satisfaction in a multinational Environment. Solved hospitality issues as they occurred;",
      "line3" : "- Increased level of rating in reviews on notable websites such as Google and Tripadvisor."
    }
  },
  "de": {
    "irrelevantExperience":"Ehrenamtliche Erfahrung",
    "header" : "Einzelheiten",
    "irrelevantExperienceContent": {
      "line1" : "- Angebot geeigneter Reservierungsoptionen basierend auf den erwarteten Teilnehmern bei der Koordination der Veranstaltung;",
      "line2" : "- Verantwortlich für die Kundenzufriedenheit in einem multinationalen Umfeld. Behebung von Hospitality-Problemen, sobald sie auftraten;",
      "line3" : "- Erhöhte Bewertung in Bewertungen auf namhaften Websites wie Google und Tripadvisor."
    }
  },
  "es": {
    "irrelevantExperience":"Experiencia como voluntario",
    "header" : "Detalles",
    "irrelevantExperienceContent": {
      "line1" : "- Ofreció opciones de reserva apropiadas basadas en los asistentes esperados al coordinar el evento;",
      "line2" : "- Responsable de la satisfacción del cliente en un entorno multinacional. Problemas de hospitalidad resueltos a medida que ocurrían;",
      "line3" : "- Mayor nivel de calificación en las reseñas de sitios web destacados como Google y Tripadvisor."
    }
  },
   "fr": {
     "irrelevantExperience":"Expérience de bénévolat",
     "header" : "Des détails",
    "irrelevantExperienceContent": {
      "line1" : "- Offrir des options de réservation appropriées en fonction des participants attendus lors de la coordination de l'événement;",
      "line2" : "- Responsable de la satisfaction client dans un environnement multinational. Résolution des problèmes d'accueil au fur et à mesure qu'ils surviennent;",
      "line3" : "- Augmentation du niveau de notation dans les avis sur des sites Web notables tels que Google et Tripadvisor."
    }
  },
   "it": {
     "irrelevantExperience":"Volontariato",
     "header" : "Dettagli",
    "irrelevantExperienceContent": {
      "line1" : "- Offre opzioni di prenotazione appropriate in base ai partecipanti previsti durante il coordinamento dell'evento;",
      "line2" : "- Responsabile della soddisfazione del cliente in un ambiente multinazionale. Risolti i problemi di ospitalità nel momento in cui si verificavano;",
      "line3" : "- Aumento del livello di valutazione nelle recensioni su siti Web importanti come Google e Tripadvisor."
    }
  },
   "ru": {
     "irrelevantExperience":"Волонтерский опыт",
     "header" : "Подробнее",
    "irrelevantExperienceContent": {
      "line1" : "- Предлагаются соответствующие варианты резервирования на основе ожидаемых участников при координации мероприятия;",
      "line2" : "- Отвечает за удовлетворение потребностей клиентов в многонациональной среде. Решенные вопросы гостеприимства по мере их возникновения;",
      "line3" : "- Повышенный уровень рейтинга в обзорах на известных сайтах, таких как Google и Tripadvisor."
    }
  }
}
</i18n>
<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      {{ $t("irrelevantExperience") }}
      <template v-slot:actions>
        <v-icon :color="customColor">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>

    <v-expansion-panel-content class="py-3">
      <v-list dense>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              Hospitality Assistant Manager
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $t("months.september") }} 2018 ~ {{ $t("months.april") }} 2019
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <v-expansion-panel>
                <v-expansion-panel-header class="mb-2">
                  {{ $t('header') }}
                  <template v-slot:actions>
                    <v-icon :color="customColor">
                      $expand
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p
                    class="text-caption"
                  >
                    {{ $t("irrelevantExperienceContent.line1") }}
                  </p>
                  <p
                    class="text-caption"
                  >
                    {{ $t("irrelevantExperienceContent.line2") }}
                  </p>
                  <p
                    class="text-caption"
                  >
                    {{ $t("irrelevantExperienceContent.line3") }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default { 
  props: {    
      customColor: {
        required: true,  
        type: String,      
      }
  },};
</script>

<style scoped>
p {
  line-height: 0.8rem !important;
}
</style>
