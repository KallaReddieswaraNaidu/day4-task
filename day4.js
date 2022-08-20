
//1.how to campre two JSON data of same properties with different order
 
const obj1 = {
    name: 'person1',
    age: 5
  };
      
  const obj2 = {
    age: 5,
     name: 'person1'
  };

  JSON.stringify(obj1) === JSON.stringify(obj2)    
  

//2. DISPLAY ALL COUNTRIES FLAGS

/*
var requests = new XMLHttpRequest()

url = 'https://restcountries.com/v2/all'

requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload = function(){
    var data = JSON.parse(requests.response);
     console.log(data);
     for(i=0;i<data.length;i++){
       console.log(data[i].flags.svg)
      
     }
}
*/


//3. display all country names,region,subregion and population.

/*
var requests = new XMLHttpRequest()

url = 'https://restcountries.com/v2/all'

requests.open("GET",url)
requests.send()
console.log(requests);
requests.onload = function(){
    var data = JSON.parse(requests.response);
     console.log(data);
     for(i=0;i<data.length;i++){
       console.log(data[i].name)
       console.log(data[i].region)
       console.log(data[i].subregion)
       console.log(data[i].population)
     }
}*/