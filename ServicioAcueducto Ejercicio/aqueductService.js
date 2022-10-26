
/* 
El codigo es un simple archivo de JS:

1 para ejecutarlo tiene que tener instalado node.js.

2 abrir un terminal en la carpeta donde se encuentra alojado el codigo.

3 escribir en el terminal la siguiente comando: node aqueductService.js

 */

const FIRSTUNITS250 = 250;
const FIRSTUNITS450 = 450;
const NEXTUNITS200 = 200;

const ValueUnits = {
    ValueFirst250: 10,
    Valuelast200: 15,
    ValueAnyOther: 20,
}


const CalculatePaymentByCustomersby = ( listConsumeUnitsCustomersby ) => {
    listConsumeUnitsCustomersby.forEach( units => {
        let payment = 0;

        if( IsUnitsInRange(units, FIRSTUNITS250) )
        {
            payment = units * ValueUnits.ValueFirst250;
        }
        else if( IsUnitsInRange(units, FIRSTUNITS450) )
        {
            payment = (FIRSTUNITS250 * ValueUnits.ValueFirst250) + (( units - FIRSTUNITS250 ) * ValueUnits.Valuelast200) ;
        }
        else
        {
            payment = ( FIRSTUNITS250 * ValueUnits.ValueFirst250 ) + ( NEXTUNITS200 * ValueUnits.Valuelast200 ) + ( ( units - FIRSTUNITS450 ) * ValueUnits.ValueAnyOther );
        }

        PrintPayment(units,payment);

    });
}

const IsUnitsInRange = (units, range) =>{
    return units <= range;
}

const PrintPayment = (units,payment) => {
    console.log(`|${units}  |${payment}  |`);
}

function Main()
{
    const listConsumptionUnitsByCustomers = [
        300,
        500,
        750,
    ];
    
    console.log(`|Unidades  |Cobro  |`);
    CalculatePaymentByCustomersby ( listConsumptionUnitsByCustomers );

}

Main();