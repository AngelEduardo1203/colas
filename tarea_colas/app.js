function cola() {
    this.dataStore =["angel"];
    this.enqueue=enqueue;
    this.back=back;
    this.front=front;
    this.imtim =vacia;
    this.printqueue=printqueue;
    this.invertir= invertir
}
function enqueue(item){
   this.dataStore.push(item)
}
function dequeue(){
    return this.dataStore.shift();
}
function back (){
    return this.dataStore[this.dataStore.length-1]
}
function front (){
    return this.dataStore[0]
}
function vacia(){
    if(this.dataStore.length==0){
        return console.long("la cola esta vacia");
    }
    else {
        return console.log("la cola no esta vacia");
    }}
function printqueue(){
   for (let index = 0; index < this.dataStore.length; index++) {
       console.log(this.dataStore[index]);
   }
}
//Usa una cola (puedes usar dos Pilas ‘Stack’) para invertir cualquier cadena de texto.}
function invertir(){
    return this.dataStore.reverse()

}
