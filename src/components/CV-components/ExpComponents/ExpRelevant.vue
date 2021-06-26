<i18n>
{
  "en": {
    "relevantExperience":"Relevant experience",
    "header" : "Details",
    "titleFreelance" : "Salesman Freelance",
    "titleAsoik": "Sales Manager",
    "relevantExperienceFreelance": {
      "line1" : "- Selling in-game items, proactively researched and analyzed prospects;",
      "line2" : "- Evaluated positive and negative aspects of buyer and seller negotiating the best price;",
      "line3" : "- Analysed the gaming market and the trends."
    },
    "relevantExperienceAsoik": {
      "line1" : "- Managed sales, service and customer relationships in different locations;",
      "line2" : "- Effectively learned to problem solve through customer concerns and dilemmas;",
      "line3" : "- Developed relationships with customers to ensure their satisfaction with service and experience inside the store."
    }
  },
  "de": {
    "relevantExperience":"Einschlägige Erfahrung",
    "header" : "Einzelheiten",
    "titleFreelance" : "Verkäufer Freiberuflich",
    "titleAsoik": "Verkaufsleiter",
    "relevantExperienceFreelance": {
      "line1" : "- Verkauf von In-Game-Gegenständen, proaktiv recherchierte und analysierte Interessenten;",
      "line2" : "- Bewertete positive und negative Aspekte von Käufer und Verkäufer, die den besten Preis aushandeln;",
      "line3" : "- Analysiert den Gaming-Markt und die Trends."
    },
    "relevantExperienceAsoik": {
      "line1" : "- Verwaltete Vertriebs-, Service- und Kundenbeziehungen an verschiedenen Standorten;",
      "line2" : "- Effektiv gelernt, Probleme durch Kundenanliegen und Dilemmata zu lösen;",
      "line3" : "- Aufbau von Beziehungen zu Kunden, um deren Zufriedenheit mit dem Service und der Erfahrung im Geschäft zu gewährleisten."
    }
  },
  "es": {
    "relevantExperience":"Experiencia relevante",
    "header" : "Detalles",
    "titleFreelance" : "Vendedor autónomo",
    "titleAsoik": "Gerente de ventas",
    "relevantExperienceFreelance": {
      "line1" : "- Venta de artículos en el juego, prospectos investigados y analizados de manera proactiva;",
      "line2" : "- Evaluar aspectos positivos y negativos de comprador y vendedor negociando el mejor precio;",
      "line3" : "- Analicé el mercado del juego y las tendencias."
    },
    "relevantExperienceAsoik": {
      "line1" : "- Gestión de ventas, servicio y relaciones con los clientes en diferentes ubicaciones;",
      "line2" : "- Aprendió de manera efectiva a resolver problemas a través de las inquietudes y dilemas de los clientes;",
      "line3" : "- Desarrollé relaciones con los clientes para asegurar su satisfacción con el servicio y la experiencia dentro de la tienda."
    }
  },
   "fr": {
     "relevantExperience":"Expérience pertinente",
     "header" : "Des détails",
     "titleFreelance" : "Vendeur indépendant",
     "titleAsoik": "Directeur commercial",
    "relevantExperienceFreelance": {
      "line1" : "- Vendre des objets dans le jeu, rechercher et analyser de manière proactive les prospects;",
      "line2" : "- Évaluation des aspects positifs et négatifs de l'acheteur et du vendeur négociant le meilleur prix;",
      "line3" : "- Analyse du marché du jeu et des tendances."
    },
    "relevantExperienceAsoik": {
      "line1" : "- Gestion des ventes, du service et des relations clients dans différents endroits;",
      "line2" : "- Appris efficacement à résoudre des problèmes à travers les préoccupations et les dilemmes des clients;",
      "line3" : "- Développer des relations avec les clients pour assurer leur satisfaction avec le service et l'expérience à l'intérieur du magasin."
    }
  },
   "it": {
     "relevantExperience":"Esperienza rilevante",
     "header" : "Dettagli",
     "titleFreelance" : "Venditore libero professionista",
     "titleAsoik": "Direttore delle vendite",
    "relevantExperienceFreelance": {
      "line1" : "- Vendere oggetti in-game, ricercare e analizzare in modo proattivo i potenziali clienti;",
      "line2" : "- Valutati gli aspetti positivi e negativi dell'acquirente e del venditore che negoziano il miglior prezzo;",
      "line3" : "- Ha analizzato il mercato dei giochi e le tendenze."
    },
    "relevantExperienceAsoik": {
      "line1" : "- Gestione delle vendite, del servizio e delle relazioni con i clienti in diverse località;",
      "line2" : "- Imparato efficacemente a risolvere i problemi attraverso le preoccupazioni e i dilemmi dei clienti;",
      "line3" : "- Relazioni sviluppate con i clienti per garantire la loro soddisfazione con il servizio e l'esperienza all'interno del negozio ."
    }
  },
   "ru": {
     "relevantExperience":"Соответствующий опыт",
     "header" : "Подробнее",
     "titleFreelance" : "Продавец-фрилансер",
     "titleAsoik": "Менеджер по продажам",
    "relevantExperienceFreelance": {
      "line1" : "- Продажа игровых предметов, проактивное исследование и анализ перспектив;",
      "line2" : "- Оценил положительные и отрицательные стороны покупателя и продавца в процессе переговоров о лучшей цене;",
      "line3" : "- Проанализировал игровой рынок и тенденции."
    },
    "relevantExperienceAsoik": {
      "line1" : "- Управлял продажами, обслуживанием и отношениями с клиентами в разных местах;",
      "line2" : "- Эффективно научился решать проблемы с помощью проблем и дилемм клиентов;",
      "line3" : "- Развитые отношения с покупателями, чтобы обеспечить их удовлетворенность обслуживанием и опытом внутри магазина."
    }
  }
}
</i18n>
<template>
  <v-expansion-panel>
    <v-expansion-panel-header
      class="font-weight-bold"
    >
      {{ $t("relevantExperience") }}
      <template v-slot:actions>
        <v-icon :color="customColor">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content
      class="py-3"
    >
      <v-list dense>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{ $t('titleFreelance') }}
            </v-list-item-title>
            <v-list-item-subtitle>
              2013 ~  2018
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
                    {{ $t("relevantExperienceFreelance.line1") }}
                  </p>
                  <p
                    class="text-caption"
                  >
                    {{ $t("relevantExperienceFreelance.line2") }}
                  </p>
                  <p
                    class="text-caption"
                  >
                    {{ $t("relevantExperienceFreelance.line3") }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list dense>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{ $t('titleAsoik') }}  <br>
              Russia, Perm
            </v-list-item-title>
            <v-list-item-subtitle>
              2012 ~  2013
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
                    {{ $t("relevantExperienceAsoik.line1") }}
                  </p>
                  <p
                    class="text-caption"
                  >
                    {{ $t("relevantExperienceAsoik.line2") }}
                  </p>
                  <p
                    class="text-caption"
                  >
                    {{ $t("relevantExperienceAsoik.line3") }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      {{ $t("experience.relevantExperienceContent") }}
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
  },
};
</script>

<style scoped>
p {
  line-height: 0.8rem !important;
}
</style>

