<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" class="primary" dark app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" dense dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">
        <v-icon>mdi-virus</v-icon> COVID-2019
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Country {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        { title: 'World summary', icon: 'mdi-earth', link: '/' },
        { title: 'Countries', icon: 'mdi-flag', link: '/countries' },
        { title: 'News', icon: 'mdi-newspaper', link: '/' }
      ],
      drawer: false
    }
  }
}

</script>
<style>
#app {
  color: #2c3e50;
}

</style>
