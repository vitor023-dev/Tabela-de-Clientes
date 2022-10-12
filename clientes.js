jQuery(function(){

    var getCostumersError = function(err){
        console.error(err);
    }

    var getCostumersSuccess = function(costumers){

        var tr = [];

        $.each(costumers, function(idx, costumer){ //para cada costumer que achar executa a função
            //console.log("costumer", arguments, idx, costumer); para mostrar em detalhes o que carrega (arguments)
            tr.push(`<tr>
            <td>${costumer.id}</td>
			<td>${costumer.name}</td>
			<td>${costumer.email}</td>
			<td>${costumer.phone}</td>
			<td>${costumer.country}</td>
		</tr>`);
        });
        
        $("table").append(tr.join("")); //adicionar o conteúdo na table > tr
        $("#loading").fadeOut(500);
    }

    $.ajax({
        url:"http://www.mocky.io/v2/5c83d8a830000067246b0d33",
        dataType:"jsonp",
        error:getCostumersError,
        success:getCostumersSuccess
    });

});