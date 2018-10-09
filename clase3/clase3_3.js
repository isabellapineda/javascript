	var n=0
	function  mostrar(){
		alert("Hay "+n+" alumnos");
		for (let i=n;i>=1;i--){
			alert(i)
			console.log(i)
		}

			
	}


function  leerDatos(){
	for (;;){
		var x=parseInt(prompt("numero de alumnos:"));
		if (isNaN(x))
			alert("numero invalido");
		else{
			n=x;
		
		return;
		}
	}

			
}
  