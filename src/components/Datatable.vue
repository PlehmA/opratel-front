<template>
  <v-card>
    <v-card-title>
      Usuarios
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Filtrar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="users"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: "Datatable",
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nombre de usuario',
            align: 'left',
            value: 'username',
          },
          { text: 'Nombre', value: 'name' },
          { text: 'Apellido', value: 'last_name' },
          { text: 'Correo', value: 'email' }
        ],
      }
    },
     computed: mapState([
    'users'
  ]),
    mounted(){
      console.log(this.$store)
      // mapActions(['getUsers'])
      this.$store.dispatch('getUsers')
    },
    methods: {
      goTo(){
        this.$router.push({ name: 'register'})
      }
    }
  }
</script>
