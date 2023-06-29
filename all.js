var enviar=document.getElementById('enviar')
var pro3=document.getElementById('pro2')
				function alterar(){
					let optionValue= pro3.options[pro3.selectedIndex];
					let valor =optionValue
					if(valor.value=='frequencia'){
						valor.style.border='2px solid red'
					}
					
					
				}
				pro3.addEventListener('change',alterar)

let receber=document.getElementById('receber')
	 	let receber1=document.getElementById('receber1')
	 	let receber2=document.getElementById('receber2')
	 	let optionValue;
	 	let valor;
	var alimentos =[
		{
			nome: "Arroz",
			carboidrato:50,
			proteina:50,
			gordura:50,
		},
		{
			nome: "Feijao",
			carboidrato:15,
			proteina:15,
			gordura:10,
		},
		{
			nome: "Carne",
			carboidrato:0,
			proteina:27,
			gordura:15,
		},
		{
			nome: "Leite",
			carboidrato:7,
			proteina:7,
			gordura:7,
		},
		{
			nome: "Pão",
			carboidrato:35,
			proteina:4,
			gordura:6,
		},
		{
			nome: "Ovo",
			carboidrato:2,
			proteina:7,
			gordura:7,
		},
		{
			nome: "Whey Protein",
			carboidrato:5,
			proteina:26,
			gordura:7,
		},
		{
			nome: "Frango",
			carboidrato:0,
			proteina:29,
			gordura:13,
		},
		{
			nome: "Queijo",
			carboidrato:6,
			proteina:14,
			gordura:10,
		},
		{
			nome: "Danone",
			carboidrato:22,
			proteina:7,
			gordura:5,
		},
	]
	let selectOne=document.getElementById('pro')
	 		adicionarOptionSelect()
	 function adicionarOptionSelect(){
	 		let selectOne=document.getElementById('pro')
	 		
	 		for(let i = 0; i<alimentos.length;i++){

	 			//select.options[select.options.length] = new Option(alimentos[i].nome,alimentos.id);
	 			let option = document.createElement('option')
	 			
	 			option.value=i
	 			option.text=alimentos[i].nome
	 			selectOne.add(option)
			}
			
			
		}
	 	function alterarAlimento(){
	
			let optionValue= selectOne.options[selectOne.selectedIndex];
			let valor =optionValue.value
			let teste=0
			if(valor =='0'){
			   receber.setAttribute('class','img1')
			   adcionarValoresNutri()
			   if(valor != teste){
				let tab=document.querySelector('#tabelaNutricional1')
				let p = document.querySelector('#tabelaNutricional1 p')
				tab.removeChild(p)
			   }
			   console.log('esta aqui')
		   }else if(valor =='1'){
			   receber1.setAttribute('class','img2')
			   adcionarValoresNutri1()
			   //receberValoresAlimentos1()
			   console.log('esta aqui')
		   }else if(valor =='2'){
			   receber2.setAttribute('class','img3')
			   adcionarValoresNutri2()
			   //receberValoresAlimentos2()
			   console.log('esta aqui')
		   }

		}
		 document.addEventListener('change',alterarAlimento)
		  
		 function removeCarbo(){

		 }
		 
	 	function adcionarValoresNutri(){
	 		for(let i = 0; i<alimentos.length;i++){
	 			let texto=document.querySelector('#tabelaNutricional1')
				 let p=document.createElement('p')
				 let macro='Carboidrato '+alimentos[0].carboidrato+'G'+'Proteina '+alimentos[0].proteina+'G'+'Gordura '+alimentos[0].gordura+'G'
				p.appendChild(document.createTextNode(macro))
				texto.appendChild(p)
	 			console.log(alimentos[0].nome)
	 			break;
	 		}
			 
	 	}
		 function remove1(){
			let tab=document.querySelector('#tabelaNutricional1')
			let p = document.querySelector('#tabelaNutricional1 p')
			tab.removeChild(p)
			let receber=document.getElementById('receber').removeAttribute('class')
			
		 }
	 	function adcionarValoresNutri1(){
	 		for(let i = 0; i<alimentos.length;i++){
	 			let texto=document.querySelector('#tabelaNutricional2')
	 			let macro='Carboidrato '+alimentos[1].carboidrato+'G'+'Proteina '+alimentos[1].proteina+'G'+'Gordura '+alimentos[1].gordura+'G'
				let p=document.createElement('p')
				p.appendChild(document.createTextNode(macro))
				texto.appendChild(p)
	 			console.log(alimentos[1].nome)
	 			break;
	 		}
	 	}
		function remove2(){
			let tab=document.querySelector('#tabelaNutricional2');
			let p =document.querySelector('#tabelaNutricional2 p')
			tab.removeChild(p)
			let receber1=document.getElementById('receber1').removeAttribute('class')
		}
	 		function adcionarValoresNutri2(){
	 		for(let i = 0; i<alimentos.length;i++){
	 			let texto=document.querySelector('#tabelaNutricional3')
	 			let macro='Carboidrato '+alimentos[2].carboidrato+'G'+'Proteina '+alimentos[2].proteina+'G'+'Gordura '+alimentos[2].gordura+'G'
				let p=document.createElement('p')
				p.appendChild(document.createTextNode(macro))
				texto.appendChild(p)
	 			console.log(alimentos[2].nome)
	 			break;
	 		}
	 	}
		function remove3(){
			let tab=document.querySelector('#tabelaNutricional3')
			let p=document.querySelector('#tabelaNutricional3 p')
			tab.removeChild(p)
			let receber2=document.getElementById('receber2').removeAttribute('class')
		}
	 			//verificarAtividadeEGenero()
		var pro2;
	 	var peso;
	 	var altura;
	 	var idade;
	 	var enviar;
	 	var calDiaria;
		var genero;
		var genero1=document.getElementById('genero')
		//genero1.style.border='1px solid red'
	 	function calcularCaloriasDiariasMulherEHomem(){
				pro2=document.getElementById('pro2').value
				genero=document.getElementById('genero').value
				peso=parseInt(document.getElementById('peso').value)
				altura=parseInt(document.getElementById('altura').value)
				idade=parseInt(document.getElementById('idade').value)
				enviar=document.getElementById('enviar')
				if(pro2 =='frequencia'){
						msgFrequnecia()
						//pro3.style.border='1px solid red';
						
				}else if(genero=='Sexo'){
					msgGenero()
					genero1.style.border='1px solid red';
					console.log('você precisa selecionar um genero')
				}else if(!peso  ||  !altura  ||  !idade){
					console.log('você precisa preencher todos os campos')
				}else if(pro2 == 1 && genero =='Feminino'){//calculando mulher sedentaria
					let uni1=9.56
					let uni2=1.85
					let uni3=4.68
					let res1=uni1*peso
					let res2=uni2*altura
					let res3=(uni3)*(Math.round(idade))
					let sedentario=665
					let sedentarioTBM=1.2
					let kcalDia=(res1+res2-res3+sedentario)*(sedentarioTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'calculando mulher sedentaria')
				}else if(pro2 == 2 && genero =='Feminino'){//levemente ativa
					let uni1=9.56
					let uni2=1.85
					let uni3=4.68
					let res1=uni1*peso
					let res2=uni2*altura
					let res3=(uni3)*(Math.round(idade))
					let sedentario=665
					let leveTBM=1.375
					let kcalDia=(res1+res2-res3+sedentario)*(leveTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'levemente ativa')
				}else if(pro2 == 3 && genero =='Feminino'){//Moderadamente ativo
					let uni1=9.56
					let uni2=1.85
					let uni3=4.68
					let res1=uni1*peso
					let res2=uni2*altura
					let res3=(uni3)*(Math.round(idade))
					let sedentario=665
					let modeTBM=1.55
					let kcalDia=(res1+res2-res3+sedentario)*(modeTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'Moderadamente ativo')
				}else if(pro2 == 4 && genero =='Feminino'){//Muito ativo
					let uni1=9.56
					let uni2=1.85
					let uni3=4.68
					let res1=uni1*peso
					let res2=uni2*altura
					let res3=(uni3)*(Math.round(idade))
					let sedentario=665
					let muitoTBM=1.725
					let kcalDia=(res1+res2-res3+sedentario)*(muitoTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'Muito ativo')
				}else if(pro2 == 5 && genero =='Feminino'){//Extremamente ativo
					let uni1=9.56
					let uni2=1.85
					let uni3=4.68
					let res1=uni1*peso
					let res2=uni2*altura
					let res3=(uni3)*(Math.round(idade))
					let sedentario=665
					let extreTBM=1.9
					let kcalDia=(res1+res2-res3+sedentario)*(extreTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'Extremamente ativo')
				}else if(pro2 == 1 && genero =='Masculino'){//calculando caloria diaria homens 
					let uni1H=13.75
					let uni2H=5
					let uni3H=6.76
					let res1=uni1H*peso
					let res2=uni2H*altura
					let res3=(uni3H)*(Math.round(idade))
					let valH=66.5
					let sedentarioTBM=1.2
					let kcalDia=(res1+res2-res3+valH)*(sedentarioTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'sedentario')
				}else if(pro2 == 2 && genero =='Masculino'){//calculando caloria diaria homens 
					let uni1H=13.75
					let uni2H=5
					let uni3H=6.76
					let res1=uni1H*peso
					let res2=uni2H*altura
					let res3=(uni3H)*(Math.round(idade))
					let valH=66.5
					let sedentarioTBM=1.375
					let kcalDia=(res1+res2-res3+valH)*(sedentarioTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'levemente ativo')
				}else if(pro2 == 3 && genero =='Masculino'){//calculando caloria diaria homens 
					let uni1H=13.75
					let uni2H=5
					let uni3H=6.76
					let res1=uni1H*peso
					let res2=uni2H*altura
					let res3=(uni3H)*(Math.round(idade))
					let valH=66.5
					let sedentarioTBM=1.55
					let kcalDia=(res1+res2-res3+valH)*(sedentarioTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'Moderadamente ativo')
				}else if(pro2 == 4 && genero =='Masculino'){//calculando caloria diaria homens 
					let uni1H=13.75
					let uni2H=5
					let uni3H=6.76
					let res1=uni1H*peso
					let res2=uni2H*altura
					let res3=(uni3H)*(Math.round(idade))
					let valH=66.5
					let sedentarioTBM=1.725
					let kcalDia=(res1+res2-res3+valH)*(sedentarioTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'Muito ativo')
				}else if(pro2 == 5 && genero =='Masculino'){//calculando caloria diaria homens 
					let uni1H=13.75
					let uni2H=5
					let uni3H=6.76
					let res1=uni1H*peso
					let res2=uni2H*altura
					let res3=(uni3H)*(Math.round(idade))
					let valH=66.5
					let sedentarioTBM=1.9
					let kcalDia=(res1+res2-res3+valH)*(sedentarioTBM)
					let arredondar=Math.round(kcalDia)
					calDiaria=document.getElementById('calDiaria').value=arredondar
					console.log(res1,res2,res3 +'Extremamente ativo')
					
				}
				
				
				genero
				//enviado.addEventListener('click',alterar)
				function msgFrequnecia(){
					//let frequencia=document.getElementById('frequencia'
					let valida=document.getElementById('valida')
					let para=document.createElement('p')
					para.classList.add('snackbar')
					para.innerHTML=`Escolha <br/> a frequencia`
					valida.appendChild(para)
					para.classList.add('fadeout')
					setTimeout(()=>{
						valida.removeChild(para)
					},2000)
				}
				/*function retirarBorda(){
					genero=document.getElementById('genero')
					peso=document.getElementById('peso')
					altura=document.getElementById('altura')
					idade=document.getElementById('idade')
					pro3=document.getElementById('pro2')
					if(pro3 !='frequencia'){
						pro3.style.border='1px solid green';
						genero.style.border='1px solid green';
						peso.style.border='1px solid green';
						altura.style.border='1px solid green';
						idade.style.border='1px solid green';
					}
				}
				
				enviar.addEventListener('click',retirarBorda)*/
				
				//var btn=document.querySelector('.btn-error')
				//btn.addEventListener('click', snackbar)
				
				
			
				function msgGenero(){
					let genero=document.getElementById('genero')
					let valida=document.getElementById('valida')
					let addClass=document.createElement('p')
					addClass.classList.add('snackbar')
					addClass.innerHTML='escolha o genero'
					valida.appendChild(addClass)
					addClass.classList.add('fadeout')
					setTimeout(()=>{
						valida.removeChild(addClass)
					},2000)
				}
				
	 		
	 		//console.log(res2+res1-res3+sedentario)
			
	 	}
	 	calcularCaloriasDiariasMulherEHomem()
			function calCarbo(){
					let calDiaria=document.getElementById('calDiaria').value
					let porcentoCal= 0.4
					res=calDiaria*porcentoCal
					let carboG=4
					res2=res/carboG
					let arredondar=Math.round(res2)
					let letra= ' '+ 'G'
					let carbo = document.getElementById('carbo').value=arredondar+letra
			
			
			}
			function calProteina(){
				//console.log('executando proteina')
					let calDiaria=document.getElementById('calDiaria').value
					let porcentoCal= 0.4
					res=calDiaria*porcentoCal
					let proteinaG=4
					res2=res/proteinaG
					let arredondar=Math.round(res2)
					let letra= ' '+ 'G'
					let proteina = document.getElementById('proteina').value=arredondar+letra

			
			
			}
			function calGordura(){
				//console.log('executando gordura')
					let calDiaria=document.getElementById('calDiaria').value
					let porcentoCal= 0.2
					res=calDiaria*porcentoCal
					let gorduraG=9
					res2=res/gorduraG
					let arredondar=Math.round(res2)
					let letra= ' '+ 'G'
					let proteina = document.getElementById('gordura').value=arredondar+letra
			
			
			}

			function calCarbo2(){
				let calDiaria=document.getElementById('calDiaria').value
				let porcentoCal= 0.4
				res=calDiaria*porcentoCal
				let carboG=4
				res2=res/carboG
				let arredondar=Math.round(res2)
				let letra= ' '+ 'G'
				let carbo = document.getElementById('carbo2').value=arredondar+letra
		
		
		}
		enviar.addEventListener('click',calCarbo2)
		function calProteina3(){
			//console.log('executando proteina')
				let calDiaria=document.getElementById('calDiaria').value
				let porcentoCal= 0.4
				res=calDiaria*porcentoCal
				let proteinaG=4
				res2=res/proteinaG
				let arredondar=Math.round(res2)
				let letra= ' '+ 'G'
				let proteina = document.getElementById('proteina3').value=arredondar+letra

		
		
		}
		enviar.addEventListener('click',calProteina3)
		function calGordura4(){
			//console.log('executando gordura')
				let calDiaria=document.getElementById('calDiaria').value
				let porcentoCal= 0.2
				res=calDiaria*porcentoCal
				let gorduraG=9
				res2=res/gorduraG
				let arredondar=Math.round(res2)
				let letra= ' '+ 'G'
				let proteina = document.getElementById('gordura4').value=arredondar+letra
		
		
		}
		enviar.addEventListener('click',calGordura4)
		
		
		