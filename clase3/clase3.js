funcion procesar_alumnos() 
for (i=1;i<N;i++){
			nombre=prompt("nombre: "+i+"/"+N+":");
			esMasculino=comfirm("es masculino ?");
			

			if (!esMasculino)
				mujeres++;

			nota= parseInt(prompt("intr. lanota:"));
			if (isNaN(nota))
				alert ("nota invalida");
			else
				if (nota>=80){

					if(!esMasculino)
						mujeresaprob++;
					alert("Ud Aprobo");
					console.log("Aprobado ",i);
				}
				else 
					alert("Ud reprobo")
					console.log("reprobo: ",i) 
		}