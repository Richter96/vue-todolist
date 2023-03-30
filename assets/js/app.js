/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni done sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del done
done, un booleano (true/false) che indica se il done è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni done. Se la proprietà done è uguale a true, visualizzare il testo del done sbarrato.




MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il done viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo done, che quindi viene aggiunto alla lista dei done esistenti. */


const { createApp } = Vue

createApp({
  data() {
    return {
      titolo: 'Cose da fare oggi!',
      newItemName: '',
      itemsStructure : {
        nome:'',
        done:false
      },
      items: [
        {
          nome: 'pasta',
          done: 'false'
        },
        {
          nome: 'carote',
          done: 'false'
        },
        {
          nome: 'uova',
          done: 'false'
        }
      ],
    }
  },
  methods: {
    addNewItems(){
      console.log('aggiungi nuovo elemento');
      console.log(this.newItemName);
      const newItem = {
        nome:"",
        done:false
      } 
      newItem.nome = this.newItemName
      console.log(newItem)
      this.items.push(newItem)
      this.newItemName=""
    }
  },
  
}).mount('#app')