<template>
  <v-app id="example-8" dark>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" dark>

      <v-list class="pa-0">

        <v-list-item v-if="mini">

          <v-list-tile @click.native.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon light>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

        </v-list-item>

        <v-list-item>

          <v-list-tile avatar tag="div">

            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg"/>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Twój użytkownik</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon light @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>

          </v-list-tile>

        </v-list-item>
      </v-list>

      <v-list class="pt-0" dense>

        <v-divider light></v-divider>

        <v-list-item v-for="item in items" :key="item">
          <v-list-tile :router="true" :to="item.href" v-tooltip:top="{html: item.title}">

            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>

        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar fixed light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!--<v-toolbar-title @click.native.stop="changeNavigationState">{{ $store.state.title }}</v-toolbar-title>-->
      <v-toolbar-title>{{ $store.state.title }}</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>
        <v-card height="250px">
          <user-info></user-info>
          <v-bottom-nav absolute value="true" class="transparent">
            <v-btn flat dark class="teal--text" @click.native="e1 = 1" :value="e1 === 1">
              <span>Recents</span>
              <v-icon>history</v-icon>
            </v-btn>
            <v-btn flat dark class="teal--text" @click.native="e1 = 2" :value="e1 === 2">
              <span>Favorites</span>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn flat dark class="teal--text" @click.native="e1 = 3" :value="e1 === 3">
              <span>Nearby</span>
              <v-icon>place</v-icon>
            </v-btn>
          </v-bottom-nav>
        </v-card>

        <!--<router-link :key="$route.fullPath"></router-link>-->
        <router-view></router-view>

      </v-container>
    </main>

  </v-app>
</template>


<script>
  import UserInfo from './UserInfo.vue'

  export default {
    name: 'user-menu',
    components: {
      UserInfo
    },
    data () {
      return {
        drawer: true,
        items: [
          {title: 'Osada', icon: 'home', href: '/home'},
          {title: 'Informacje', icon: 'info', href: '/info'}
        ],
        mini: false,
        right: null
      }
    },
    methods: {
      changeNavigationState () {
        this.$store.commit('changeNavigationState')
      }
    }

  }
</script>

<style scoped>

</style>
