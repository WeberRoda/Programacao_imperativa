//2º Checkpoint 28/06/2021

//Olá, você foi contratado para executar este projeto. É importante que você analise, 
//entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida 
//com seus respectivos tempos pré-definidos. 

//1 - Pipoca – 10 segundos (padrão); 2 - Macarrão – 8 segundos (padrão); 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão); 5 - Brigadeiro – 8 segundos (padrão); 

//- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
//- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
//- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
//- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
// “kabumm”;
//- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".



function preparo (comida, tempo){
    if(comida == "pipoca" || comida == "macarrão" || comida=="carne" || comida=="feijão" || comida == "brigadeiro"){
        switch (comida){
            case "pipoca":
                if (tempo == 10) {
                    console.log ("Prato pronto, bom apetite!!!");
                }else if (tempo < 10) {
                    console.log ("Tempo insuficiente");
                }else if (tempo > 10 && tempo < 30) {
                    console.log ("A comida queimou!");
                }else if (tempo > 30) {
                    console.log ("KABUMMM!");
                }
                break;
            case "macarrão":      
                if (tempo == 8) {
                    console.log ("Prato pronto, bom apetite!!!");
                }else if (tempo < 8) {
                    console.log ("Tempo insuficiente");
                }else if (tempo > 8 && tempo < 24) {
                    console.log ("A comida queimou!");
                }else if (tempo > 24) {
                    console.log ("KABUMMM!");
                }   
                break; 
            case "carne":      
                if (tempo == 15) {
                    console.log ("Prato pronto, bom apetite!!!");
                }else if (tempo < 15) {
                    console.log ("Tempo insuficiente!");
                }else if (tempo > 15 && tempo < 45) {
                    console.log ("A comida queimou!");
                }else if (tempo > 45) {
                    console.log ("KABUMMM!");
                }  
                break;  
            case "feijão":      
                if (tempo == 12) {
                    console.log ("Prato pronto, bom apetite!!!");
                }else if (tempo < 12) {
                    console.log ("Tempo insuficiente!");
                }else if (tempo > 12 && tempo < 36) {
                    console.log ("A comida queimou!");
                }else if (tempo > 36) {
                    console.log ("KABUMMM!");
                }        
                break;
            case "brigadeiro":      
                if (tempo == 8) {
                    console.log ("Prato pronto, bom apetite!!!");
                }else if (tempo < 8) {
                    console.log ("Tempo insuficiente");
                }else if (tempo > 8 && tempo < 24) {
                    console.log ("A comida queimou!");
                }else if (tempo > 24) {
                    console.log ("KABUMMM!");
                } 
                break; 
        }  
    } else{
        console.log("Prato inexistente");
    }
}

preparo ("pipoca", 20);
preparo ("macarrão", 8);
preparo ("carne", 15);
preparo ("feijão", 12);
preparo ("brigadeiro", 8);
preparo ("arroz", 31);