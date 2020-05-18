# aula_JavaScript
Introdução ao JavaScript


Adicionado nova função ao botão de select:

HTML:
  
```
      <select  onchange="frutas(this)">
            <option value="">-----</option>
            <option value="1">Laranja</option>
            <option value="2">Maçã</option>
            <option value="3">Uva</option>
      </select>
```
      
 Arquivo JS:
 
 ```
 	function frutas(elemento){
   var fruta = ""
    switch (elemento.value){
    case "1":
        fruta = "Laranja";
        break;
    case "2":
        fruta = "Maçã";
        break;
    case "3":
        fruta= "Uva";
        break
    }
   
    if(fruta != ""){
     alert(fruta)
    }

}
 ```