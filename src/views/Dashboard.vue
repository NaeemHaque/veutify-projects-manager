
<template>

    <div class=" dashboard">
        <p  class="subheading grey--text font-weight-bold">Dashboard</p>

        <v-container class=" grey lighten-4 my-5">

       <v-row class="mb-3">

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">

          <v-btn small depressed  v-bind="attrs"
          v-on="on" color="grey lighten-3 ma-3" @click="sortBy('title')">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By Prject name</span>
          </v-btn>

      </template>
      <span>Sort by Project Title</span>
    </v-tooltip>

        <v-tooltip top>

             <template v-slot:activator="{ on, attrs }">

          <v-btn small depressed  v-bind="attrs"
          v-on="on" color="grey lighten-3 ma-3" @click="sortBy('person')">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-lowercase">By Person</span>
                </v-btn>

      </template>
      <span>Sort by Persons Name</span>
  
        </v-tooltip>

    
               
                
            </v-row>

            <v-card flat class="grey lighten-3 pa-4 " v-for="project in projects" :key="project">
               <v-row wrap :class="`pa-3 project ${project.status}`">
                   <v-col xs="12" md="6">
                        <div class="caption grey--text text--darken-2">Project Title</div>
                        <div>{{project.title}}</div>
                   </v-col>

                   <v-col xs="6" md="2" sm="4">
                        <div class="caption grey--text text--darken-2">Person</div>
                        <div>{{project.person}}</div>
                   </v-col>

                   <v-col xs="6" md="2" sm="4">
                        <div class="caption grey--text text--darken-2">Due by</div>
                        <div>{{project.due}}</div>
                   </v-col>

                   <v-col xs="2" sm="4" md="2">
                        <div class="right">
                            <v-chip small :class="`${project.status} white--text caption `" color="indigo lighten-2">{{project.status}}</v-chip>
                        </div>
                   </v-col>
               </v-row>
               <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
 
</template>

<script>
export default {

    data() {
        return {
            projects: [
                {
                    title: 'CSE Society Management System', person: 'Naeem Haque', due: '1st Jan 2021', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio veritatis aliquid sequi natus iste libero similique quas reprehenderit? Explicabo.'
                },
                {
                    title: 'American Corner Management System', person: 'Swaliha Haque', due: '1st Jan 2021', status: 'complete', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio veritatis aliquid sequi natus iste libero similique quas reprehenderit? Explicabo.'
                },
                {
                    title: 'Online Class Resources', person: 'Nitesh Das', due: '08th Feb 2021', status: 'overdue', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio veritatis aliquid sequi natus iste libero similique quas reprehenderit? Explicabo.'
                },
                {
                    title: 'Restaurent Management System', person: 'Noushin Jannat', due: '01 Jan 2020', status: 'ongoing', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio veritatis aliquid sequi natus iste libero similique quas reprehenderit? Explicabo.'
                },
                {
                    title: 'Space X Game', person: 'Arindam Das', due: '22th Oct 2020', status: 'overdue', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio veritatis aliquid sequi natus iste libero similique quas reprehenderit? Explicabo.'
                },
                
                {
                    title: 'Weather Application', person: 'Naeem Haque', due: '01 Jan 2020', status: 'ongoing', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odio veritatis aliquid sequi natus iste libero similique quas reprehenderit? Explicabo.'
                },

            ]
        };
    },

    methods: {
        sortBy(prop) {
            this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1 )
        },
    },

};
</script>


<style>
.project.complete {
    border-left: 4px solid #3cd1c2;
}
.project.ongoing {
    border-left: 4px solid orange;
}
.project.overdue {
    border-left: 4px solid tomato;
}

.v-chip.complete {
    background:  #3cd1c2;
}
.v-chip.ongoing {
   background-color:orange;
}
.v-chip.overdue {
   background:  tomato;
}
</style>












<!-- 

*******basic learning  code********<template>
  
</template>

<script>
export default {

}
</script>

<style>

</style>
<p class="blue white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsam doloribus animi modi nisi quaerat. Aliquid obcaecati alias ut accusamus ipsam, incidunt neque tempora iste expedita vitae illum tenetur natus.</p>
    <p class="blue lighten-4 red--text text-darken-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsam doloribus animi modi nisi quaerat. Aliquid obcaecati alias ut accusamus ipsam, incidunt neque tempora iste expedita vitae illum tenetur natus.</p>
    <h1 class="display-4">Learger Text</h1>
    <h1 class="display-1">Smaller Text</h1>
    <p class="headline text-uppercase">This is heading</p>
    <p class="subheading font-weight-bold">This is subheading</p>
    <p class="caption">This is a caption</p>

    //by using vue component and proop  

    <v-btn class="blue white--text">Class</v-btn>
    <v-btn  depressed color="pink white--text">Proop</v-btn>

    <v-btn depressed color="blue white--text hidden-md-and-down">
      <v-icon left>facebook</v-icon>
      <span>Knock Me</span>
    </v-btn>

    <v-btn depressed small color="blue white--text hidden-lg-and-up">
      <v-icon left>email</v-icon>
      <span>Knock Me</span>
    </v-btn>

    <v-btn fab depressed small dark color="purple white--text hidden-sm-only">
      <v-icon>favorite</v-icon>
    </v-btn> -->




    <!--
    //grid system

     <v-container >
             <v-row flex wrap >
                    <v-col lg="12" md="6" sm="4" class="blue">12-Grid</v-col>
              </v-row>
              <v-row>
                  <v-col lg="6" md="4" sm="12"  class="pink">6-Grid</v-col>
                  <v-col lg="6" md="4" sm="12"  class="pink">6-Grid</v-col>
              </v-row>
              <v-row>
                  <v-col cols="6" class="green">4-Grid</v-col>
                  <v-col cols="3" class="green">4-Grid</v-col>
                  <v-col cols="3" class="green">4-Grid</v-col>
              </v-row>

              <v-row>
                  <v-col cols="3" class="purple">3-Grid</v-col>
                  <v-col cols="3" class="purple">3-Grid</v-col>
                  <v-col cols="3" class="purple">3-Grid</v-col>
                  <v-col cols="3" class="purple">3-Grid</v-col>
              </v-row>
        </v-container>

        -->
