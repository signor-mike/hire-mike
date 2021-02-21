<template>
  <div class="d-flex justify-center">
    <!-- <div class="locale-changer">
      <select v-model="$i18n.locale">
        <v-icon left>expand_more</v-icon>
        <option
          v-for="(lang, i) in $i18n.availableLocales"
          :key="`Lang${i}`"
          :value="lang"
        >
          <v-avatar
            ><img :src="`/flag_${$i18n.locale}.png`" alt="flag"
          /></v-avatar>
          {{ lang.toUpperCase() }}
        </option>
      </select>
    </div> -->
    <hr />
    <div class="d-flex justify-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>{{ $i18n.locale.toUpperCase() }}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, i) in $i18n.availableLocales"
            :key="`Lang${i}`"
            :value="lang"
          >
            <v-avatar size="25">
              <img :src="`/flag_${$i18n.locale}.png`" alt="" />
            </v-avatar>
            <v-list-item-title>
              <span>
                {{ $i18n.locale.toUpperCase() }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
  <!-- <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="grey" dark v-bind="attrs" v-on="on">
              <v-icon left>expand_more</v-icon>
              <span>{{ $i18n.locale.toUpperCase() }}</span>
              <v-avatar size="25">
                <img :src="`/flag_${$i18n.locale}.png`" alt="" />
              </v-avatar>
            </v-btn>
          </template>
          <ul>
            <a href="#" @click="setLocale('en')">
              <li>
                <v-avatar size="25">
                  <img :src="`/flag_en.png`" alt="" />
                </v-avatar>
                <span>EN</span>
              </li>
            </a>

            <a href="#" @click="setLocale('fr')">
              <li>
                <v-avatar size="25">
                  <img :src="`/flag_fr.png`" alt="" />
                </v-avatar>
                <span>FR</span>
              </li>
            </a>

            <a href="#" @click="setLocale('it')">
              <li>
                <v-avatar size="25">
                  <img :src="`/flag_it.png`" alt="" />
                </v-avatar>
                <span>IT</span>
              </li>
            </a>
          </ul>
        </v-menu>
      </div> -->
</template>

<script>
export default {};
</script>

<style></style>
