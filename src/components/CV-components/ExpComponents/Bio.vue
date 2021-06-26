<i18n>
{
  "en" : {
      "header" : "From Customer Service to Frontend Developer.",
      "subHeader" : "That's how all began:",
      "p1" : "After working for several years among Customer Service Assistance and then in Sales Management, famous events happened in my birthplace brought me away and took me to change my personal priorities.",
      "p2" : "I traveled around Europe, Volunteering in a Hostel in Tenerife where I became Hospitality Assistant Manager and it was one of the most incredible experience of my life.",
      "p3" : "Finally able to settle in Italy, I decided to try to be accepted in a Highly Selective, Intensive program to effectively learn topics I was working with previously in my life as self-taught, and finally turn myself into a professional Web Developer."
  },
  "de" : {
      "header" : "Vom Kundenservice zum Frontend-Entwickler.",
      "subHeader" : "So fing alles an:",
      "p1" : "Nachdem ich mehrere Jahre in der Kundenbetreuung und dann im Vertriebsmanagement gearbeitet habe, haben mich berühmte Ereignisse in meinem Geburtsort mitgenommen und mich dazu gebracht, meine persönlichen Prioritäten zu ändern.",
      "p2" : "Ich bin durch Europa gereist und habe in einem Hostel auf Teneriffa ehrenamtlich gearbeitet, wo ich Hospitality Assistant Manager wurde und es war eine der unglaublichsten Erfahrungen meines Lebens.",
      "p3" : "Nachdem ich mich endlich in Italien niederlassen konnte, beschloss ich zu versuchen, in ein hochselektives, intensives Programm aufgenommen zu werden, um Themen, mit denen ich zuvor in meinem Leben als Autodidakt gearbeitet hatte, effektiv zu erlernen und mich schließlich zu einem professionellen Webentwickler zu entwickeln. "
  },
  "es" : {
      "header" : "Desde el servicio al cliente hasta el desarrollador frontend.",
      "subHeader" : "Así empezó todo:",
      "p1" : "Después de trabajar durante varios años en Asistencia al cliente y luego en Gestión de ventas, eventos famosos que sucedieron en mi lugar de nacimiento me llevaron a cambiar mis prioridades personales.",
      "p2" : "Viajé por Europa, haciendo voluntariado en un albergue en Tenerife donde me convertí en subdirector de hospitalidad y fue una de las experiencias más increíbles de mi vida.",
      "p3" : "Finalmente, capaz de instalarme en Italia, decidí intentar ser aceptado en un programa intensivo altamente selectivo para aprender de manera efectiva los temas con los que estaba trabajando anteriormente en mi vida como autodidacta y finalmente convertirme en un desarrollador web profesional. "
  }, 
  "fr" : {
      "header" : "Du service client au développeur frontend.",
      "subHeader" : "C'est ainsi que tout a commencé :",
      "p1" : "Après avoir travaillé plusieurs années dans l'Assistance Client puis dans la Direction Commerciale, des événements célèbres survenus dans ma ville natale m'ont éloigné et m'ont amené à changer mes priorités personnelles.",
      "p2" : "J'ai voyagé à travers l'Europe, faisant du bénévolat dans une auberge de jeunesse à Tenerife où je suis devenu Hospitality Assistant Manager et ce fut l'une des expériences les plus incroyables de ma vie.",
      "p3" : "Enfin capable de m'installer en Italie, j'ai décidé d'essayer d'être accepté dans un programme hautement sélectif et intensif pour apprendre efficacement des sujets sur lesquels je travaillais auparavant dans ma vie en tant qu'autodidacte, et enfin me transformer en développeur Web professionnel. "
  },
  "it" : {
      "header" : "Dal servizio clienti allo sviluppatore frontend.",
      "subHeader" : "È così che è iniziato tutto:",
      "p1" : "Dopo aver lavorato per diversi anni nell'Assistenza Clienti e poi nella Direzione Vendite, eventi famosi accaduti nella mia città mi hanno portato via e portato a cambiare le mie priorità personali.",
      "p2" : "Ho viaggiato in giro per l'Europa, facendo volontariato in un ostello a Tenerife dove sono diventato Hospitality Assistant Manager ed è stata una delle esperienze più incredibili della mia vita.",
      "p3" : "Finalmente in grado di stabilirmi in Italia, ho deciso di provare ad essere accettato in un programma altamente selettivo e intensivo per apprendere efficacemente argomenti con cui stavo lavorando in precedenza nella mia vita da autodidatta, e infine trasformarmi in un Web Developer professionista. "
  },
  "ru" : {
      "header" : "От службы поддержки до разработчика.",
      "subHeader" : "Как все и началось:",
      "p1" : "После нескольких лет работы в службе поддержки клиентов, а затем в управлении продажами, известные события, произошедшие на моей родине, заставили меня изменить свои личные приоритеты.",
      "p2" : "Я путешествовал по Европе, работал волонтером в хостеле на Тенерифе, где я стал помощником менеджера по гостеприимству, и это был один из самых невероятных событий в моей жизни.",
      "p3" : "Наконец, получив возможность обосноваться в Италии, я решил попробовать поступить на высокоселективную интенсивную программу, чтобы эффективно изучать темы, с которыми я работал ранее в своей жизни как самоучка, и наконец стать профессиональным веб-разработчиком. "
  }
}
</i18n>
<template>
  <v-expansion-panel>
    <v-expansion-panel-header class="font-weight-bold">
      Bio
      <template v-slot:actions>
        <v-icon :color="customColor">
          $expand
        </v-icon>
      </template>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <h4 class="primary--text mb-1">
        {{ $t('header') }}
      </h4>
      <h6 class="primary--text mb-1">
        {{ $t('subHeader') }}
      </h6>
      <p>{{ $t('p1') }}</p>
      <p>{{ $t('p2') }}</p>
      <p>{{ $t('p3') }}</p>
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
}
</script>

<style>

</style>