'use strict'
const Asiento = use('App/Models/Asiento')

class AsientoController {
    async llenar(response){
        let num=0;
        let letras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        let numero=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let num2=0;
        for (let index = 0; index < 100; index++) {
            const nuevoAsiento = new Asiento();
            let valor=letras[num]+numero[num2];
            console.log(valor);
            nuevoAsiento.asiento=valor;
            await nuevoAsiento.save();
            num2++;
            if(num2==10){
                num++;
                num2=0;
            }
        }
        return response.json({mensaje: "funciono"});
    }
}

module.exports = AsientoController
