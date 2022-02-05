<template>
         <v-row class="popup" justify="space-around">
             <v-col cols="auto">
                 <v-dialog transition="dialog-bottom-transition" max-width="600">
                     
                     <template v-slot:activator="{ on, attrs }">
                         <v-btn depressed color="cyan accent-2 indigo--text lighten-4 mb-2" v-bind="attrs" v-on="on">
                             <v-icon left>add</v-icon>
                             <span>Add New Project</span>
                         </v-btn>
                     </template>


                    <template>
                        <v-card>
                            <v-toolbar flat color="cyan accent-2 font-weight-bold">Add a new project</v-toolbar>
                            <v-card-text>

                                <v-form class="px-3"  @submit.prevent="submit">
                                    <v-text-field
                                    label="Title"
                                    v-model="title"
                                    required
                                    prepend-icon="folder">
                                    </v-text-field>

                                    <v-textarea
                                    label="Information"
                                    v-model="content"
                                    prepend-icon="edit"
                                    ></v-textarea>

                                    <v-menu>
                                        <v-text-field 
                                        slot="activator"
                                        label="Due Date" 
                                        prepend-icon="date_range"
                                        ></v-text-field>

                                        <v-date-picker v-model="due"></v-date-picker>
                                    </v-menu>

                                    <v-btn 
                                    small depressed 
                                    class="cyan accent-2 mx-7 my-3 pa-2" 
                                    @click="submit"
                                    >Add Project</v-btn>


                                </v-form>
                                
                            </v-card-text>

                        </v-card>
                    </template>

                 </v-dialog>
             </v-col>

         </v-row>

</template>

<script>


export default {
    el: 'popup',
    data() {
        return {
            title: '',
            content: '',
            due: null
        };
    },
    methods: {
        submit(){
            console.log("hello");
        },
         
    },
    
};
