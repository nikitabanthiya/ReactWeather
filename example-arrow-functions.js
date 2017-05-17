var names = ['nik','kav','anj'];
names.forEach(function(name){
  console.log('foreach',names);
});

names.forEach((name)=> {
  console.log('arrow',name);
});

names.forEach((name)=>console.log(name));

var returnMe =(name)=>name+'!';
console.log(returnMe('ni'));

var person ={
  name:"nikke",
  greet:function(){
    names.forEach(function(name){
      console.log(this.name+'says hi to'+ name);
    })
  }
}
person.greet();

var person1 ={
  name:"nikke",
  greet:function(){
    names.forEach((name)=>{
      console.log(this.name+'says hi to'+ name);
    })
  }
}
person1.greet();


var t =(a,b)=>{
  return(a+b);
}
console.log(t(2,4));
