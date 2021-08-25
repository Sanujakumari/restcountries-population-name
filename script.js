
var xhr = new XMLHttpRequest();


xhr.onload = function () {
  
  if (xhr.status >= 200 && xhr.status < 300) {
    
    var t = JSON.parse(this.response);
    for(i=0;i<t.length;i++)
    {
      
console.log(t[i].name)
console.log(t[i].region)
console.log(t[i].subregion)
console.log(t[i].population)


    }
  
  } else {
    
    console.log(xhr.responseText); 
  }
};

xhr.open("GET", "https://restcountries.eu/rest/v2/all");



xhr.send();








