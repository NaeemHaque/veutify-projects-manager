
<template>
  <div class="team">
    <p class="subheading grey--text font-weight-bold">Team</p>
    
    <v-container class="my-5">
        <v-row wrap>
            <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                <v-card class="text-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.avatar" alt="">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{person.name}}</div>
                        <div class="grey--text">{{person.role}}</div>
                    </v-card-text>

                     <v-card-actions>
                        <v-btn
                            color="green lighten-1"
                            text
                        >
                        <v-icon left>message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

  </div>
</template>




<script>


export default {
    data() {
        return {
            team: [
                    { name: 'Naeem Haque', role: 'Web developer', avatar: '/naeem.png' },
                    { name: 'Arindam Das', role: 'Game developer', avatar: '/arindam.png' },
                    { name: 'Nitesh Das', role: 'Web developer', avatar: '/nitesh.png' },
                    { name: 'Swaliha Haque', role: 'Web designer', avatar: '/swaliha.jpg' },
                    { name: 'Noushin Jannat', role: 'Web designer', avatar: '/noushin.jpg'}
                ]
        };
    },
  
}
</script>