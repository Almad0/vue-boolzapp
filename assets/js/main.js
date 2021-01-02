let root = new Vue({

  el: "#root",

  data: {
    contacts: [{
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: './assets/img/avatar_2.jpg',
        visible: false,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: './assets/img/avatar_3.jpg',
        visible: false,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: './assets/img/avatar_4.jpg',
        visible: false,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
          name: 'Anna',
          avatar: './assets/img/avatar_5.jpg',
          visible: false,
          messages: [{
              date: '10/01/2020 15:50:00',
              text: 'La coperta grigia mi piace un sacco!',
              status: 'received'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tanto è mia, non ci provare',
              status: 'sent'
            }
          ],
        },
        {
            name: 'Tommaso',
            avatar: './assets/img/avatar_6.jpg',
            visible: false,
            messages: [{
                date: '10/01/2020 09:30:55',
                text: 'No vabbè, non ce la posso fare',
                status: 'sent'
              },
              {
                date: '10/01/2020 09:50:00',
                text: 'Non ho voglia di farlo :(',
                status: 'sent'
              },
              {
                date: '10/01/2020 10:15:22',
                text: 'Nemmeno io, pero daje',
                status: 'received'
              }
            ],
          },
          {
              name: 'Carlo',
              avatar: './assets/img/avatar_7.jpg',
              visible: false,
              messages: [{
                  date: '10/01/2020 16:33:55',
                  text: 'Domani ci vediamo?',
                  status: 'sent'
                },
                {
                  date: '10/01/2020 17:18:22',
                  text: 'Volentieri',
                  status: 'received'
                }
              ],
            },
    ],

    newMessage: "",
    newSearch: ""
  },

  methods: {
    changeContacs: function(index){
      for (let i = 0; i < this.contacts.length; i++) {
        this.contacts[i].visible = false;
      }
      this.contacts[index].visible = true;
      let select = document.getElementByclass
    },

    addMessage: function(){
      let nuovoInviato = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: this.newMessage,
        status: 'sent'
      };
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].visible == true) {
          this.contacts[i].messages.push(nuovoInviato);
          this.newMessage = ""
          setTimeout(this.respondToMessage,1000);
        }
      }
    },

    respondToMessage: function(){
      let nuovaRisposta = {
        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        text: "ok",
        status: 'received'
      };
      for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].visible == true) {
          this.contacts[i].messages.push(nuovaRisposta);
        }
      }
    },

    filteredItems: function(element){
      return element.name.toLowerCase().includes(this.newSearch.toLowerCase())
    },

    lastMessage: function(index){
      let last;
      for (let i = 0; i < this.contacts[index].messages.length; i++) {
        last = this.contacts[index].messages[i].date
      }
      console.log(last);
    },

  },

  computed: {
    searchChat(){
      return this.contacts.filter(this.filteredItems)
    },
  }
});









// fine
