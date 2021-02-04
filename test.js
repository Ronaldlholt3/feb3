let man = {
    name: "Ron",
    numLegs: 2
  };
  sayName: function() {return "The name of this man is " + man.name + ".";}
  console.log(man.name);
  man.sayName();

  function cow() {
    this.name = "apples";
    this.color  = "black";
    this.numLegs = 4;
   
  }
  
  let blackcow = new cow();

  let bull = new cow("banana", "white");

bull instanceof cow; 