<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense >
        <div v-for="(item, index) in items" :key="index">
           <v-list-item link :to="item.path">
          <v-list-item-content>
            <v-list-item-title>{{ item.name.toUpperCase() }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Opratel</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
      <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>

  export default {
    data: () => ({
      drawer: false,
      items: []
    }),
   created(){
     this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name
                , path: route.path
            })
        })
   }
  }
</script>
