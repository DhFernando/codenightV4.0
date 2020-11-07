<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-row>
        <v-col cols="5" class="mr-4" >
          <v-row class="">
            <v-col cols="12">
              <v-card class="mx-auto" max-width="500" >
                  <v-list>
                    <v-list-item-group v-model="model">
                      <v-list-item v-for="(item, i) in items" :key="i" >
                        <v-list-item-icon class="mr-1">
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-card>
            </v-col>  
          </v-row>
        </v-col>
        <v-col cols="7" >
          <v-row class="mt-16">
             <v-container class="mt-5">
               <v-card class="pa-5">
v
               </v-card>
              </v-container>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          icon: 'mdi-inbox',
          text: 'Inbox',
        },
        {
          icon: 'mdi-star',
          text: 'Star',
        },
        {
          icon: 'mdi-send',
          text: 'Send',
        },
        {
          icon: 'mdi-email-open',
          text: 'Drafts',
        },
      ],
      model: 1,
    }),
  }
</script>