<template>
  <v-app id="example-8" dark>

    <v-navigation-drawer v-model="drawer" :mini-variant="mini" dark>

      <v-list class="pa-0">

        <v-list-tile v-if="mini">

          <v-list-tile @click.native.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon light>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>

        </v-list-tile>

        <v-list-tile>

          <v-list-tile avatar tag="div">

            <router-link to="/" exact>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/86.jpg"/>
              </v-list-tile-avatar>
            </router-link>

            <v-list-tile-content>
              <v-list-tile-title>Twój użytkownik</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon light @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>

          </v-list-tile>

        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>

        <v-divider light></v-divider>

        <v-list-tile v-for="item in items" :key="item">
          <v-list-tile :router="true" :to="item.href">

            <v-list-tile-action>
              <v-icon light>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>

        </v-list-tile>

      </v-list>

    </v-navigation-drawer>

    <v-toolbar dark floating>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{ $store.state.title }}</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>

        <user-info></user-info>

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
          {title: 'Armia', icon: 'supervisor_account', href: '/army'},
          {title: 'Robotnicy', icon: 'gavel', href: '/workers'},
          {title: 'Osady', icon: 'view_module', href: '/villages'},
          {title: 'Ustawienia', icon: 'settings', href: '/settings'}
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
