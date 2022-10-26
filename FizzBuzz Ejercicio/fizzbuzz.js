/* 
El codigo es un simple archivo de JS:

1 para ejecutarlo tiene que tener instalado node.js.

2 abrir un terminal en la carpeta donde se encuentra alojado el codigo.

3 escribir en el terminal la siguiente comando: node fizzbuzz.js

 */


const MULTIPLE3 = 3;
const MESSAGEFIZZ = 'fizz';

const MULTIPLE5 = 5;
const MESSAGEBUZZ = 'buzz';

const MAXCYCLES = 100;

const BizzBuzzPrint = () =>{
    for(let i = 1; i <= MAXCYCLES; i++) {

        if( IsMultiple( i, MULTIPLE3 ) )
        {
            if( IsMultiple( i, MULTIPLE5) )
            {
                console.log( MESSAGEFIZZ + MESSAGEBUZZ );
            }
            else
            {
                console.log( MESSAGEFIZZ );
            }
        }
        else if( IsMultiple( i, MULTIPLE5 ) ){
            console.log( MESSAGEBUZZ );
        }
        else
        {
            console.log( i );
        }

    }
}

const IsMultiple = ( dividend, divisor ) => {
    return dividend % divisor === 0;
}


function Main()
{
    BizzBuzzPrint();
}

Main();