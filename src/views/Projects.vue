<template>
  <div class="projects">
    <p class="subheading font-weight-bold grey--text mx-3">My Projects</p>

    <v-container class="my-5">

      <v-row justify="center" class="mx-7">
        <v-expansion-panels focusable inset>
    <v-expansion-panel
      v-for="(project,i) in myProjects"
      :key="i"
    >
      <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
      <v-expansion-panel-content class="px-5">
        <div class="font-weight-bold">Due by {{project.due}}</div>
        <div>{{project.content}}</div>
      </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      </v-row>



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

  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Naeem Haque'
      });
    },
    
  },
};
</script>
