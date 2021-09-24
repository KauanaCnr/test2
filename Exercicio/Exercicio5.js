var list, soma, media, cont

    x = [ 42, 10, 38, 172, 178, 62, 99, 148, 149, 121, 15, 118, 52, 92, 8, 120, 75, 177, 142, 190]
    soma = 0
    media = 0
    cont = 0

    for(let i = 0; i < x.length; i++){ 
         if(x[i] % 2 == 0){        
            cont ++        
            soma += x[i]    
        }
    }

    media = soma / cont
    console.log("Quantidade de numeros pares: "+cont)
    console.log("A soma total dos numeros pares: "+soma)
    console.log("A média da soma dos numeros pares é: "+ media )

