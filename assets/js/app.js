/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.




MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */


const { createApp } = Vue

createApp({
  data() {
    return {
      titolo: 'Cose da fare oggi!',
      newItemName: '',
      itemsStructure : {
        nome:'',
        todo:false
      },
      items: [
        {
          nome: 'pasta',
          todo: 'false'
        },
        {
          nome: 'carote',
          todo: 'false'
        },
        {
          nome: 'uova',
          todo: 'false'
        }
      ],
    }
  },
  methods: {
    addNewItems(){
      console.log('aggiungi nuovo elemento');
      console.log(this.newItemName);
      const newItem = {
        nome: this.newItemName,
        todo:false
      } 
      newItem.nome = this.newItemName
      console.log(newItem)

      this.items.push(newItem)
    }
  },
  
}).mount('#app')