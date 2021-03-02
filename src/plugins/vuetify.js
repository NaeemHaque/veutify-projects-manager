import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
        theme: {    //customize color
          primary: '#9652ff'
        },
      },
      
});
