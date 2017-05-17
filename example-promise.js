// function getTempCallback(location,callback){
//   callback(undefined,78);
//   callback('city not found');
// }
// getTempCallback('Philadelphia',function(err,temp){
//   if(err){
//     console.log('error',err);
//   }else{
//     console.log('success',temp);
//   }
// });
// function getTempPromise(location){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve(79);
//       reject("city not found")
//     },1000);
//
//   });
// }
// getTempPromise('Philadelphia').then(function (temp){
//   console.log("promises success",temp);
// },function(err){
//   console.log("error",err);
// });

function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if((typeof a ==='number') && (typeof a ==='number')){
      var c = a+b;
      resolve(c);
    }
    else{
      reject('not correct');
    }
  });
};
addPromise(3,2).then(function(success){
  console.log("done",success);
},function(error){
  console.log("no",error);
});
addPromise(3).then(function(success){
  console.log("done",success);
},function(error){
  console.log("no",error);
});
addPromise("3",2).then(function(success){
  console.log("done",success);
},function(error){
  console.log("no",error);
});
