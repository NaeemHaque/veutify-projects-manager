<template>

       <nav>

           <v-app-bar flat app>

               <v-app-bar-nav-icon class="blue--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

               <v-app-bar-title class=" blue--text">
               <span class="font-weight-light ">Team</span>
               <span class="font-weight-bold text-uppercase">Projects</span> 
            </v-app-bar-title>

             <v-spacer></v-spacer>


    <!-- dropdown  -->
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed small color="grey lighten-3"
          v-bind="attrs"
          v-on="on"
          class="mr-1"
        >
          <span>Menu</span>
          <v-icon>expand_more</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(link, index) in link"
          :key="index"
          :to="link.route"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>


            <v-btn depressed small color="grey lighten-3">
                   <span>Sign out</span>
                   <v-icon right>exit_to_app</v-icon>   
             </v-btn>

           </v-app-bar>

            <v-navigation-drawer app v-model="drawer" class="indigo lighten-1">
                
                <v-row colum>
                    <v-col class="mt-5" align="center" >
                        <v-avatar size=100 justify="center">
                            <img src="/naeem.png" alt="">
                        </v-avatar>
                        <p class="white--text subheading mt-2 mb-4">Naeem Haque</p>
                         <Popup/>
                    </v-col>
                </v-row>

                

                <!-- Sidebar List -->
                <v-list>
                    <v-list-item v-for="link in link" :key="link.text" router :to="link.route">
                        <v-list-item-action>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-title class="white--text">
                                {{ link.text }}
                            </v-list-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                </v-list>
               


                 
            </v-navigation-drawer>

           
       </nav>
     
</template>


<script>
import Popup from './Popup.vue'
export default {
    name: 'Navbar',
    
    data() {
        return {
            drawer: false,
            link: [
                        {icon: 'dashboard', text: 'Dashboard', route: '/'},
                        {icon: 'folder', text: 'My Projects', route: '/projects'},
                        {icon: 'person', text: 'Team', route: '/team'}

                 ],
        };
    },
    components: {
        Popup
    },

};
</script>


<!--

app is for sticky bar 




-->
