/**
 
// Snack 1
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. 

 */

console.log('********** JSNACK 1 **********');

const brand = [
    {
        name: 'Apple',
    },
    {
        name: 'Samsung',
    },
    {
        name: 'Google',
    },
    {
        name: 'Prada',
    },
    {
        name: 'Gucci',
    },
    {
        name: 'Valentino',
    },
    {
        name: 'Lenovo',
    },
    {
        name: 'Xiaomi',
    },
    {
        name: 'Microsoft',
    },
    {
        name: 'Sony',
    },
];

console.log(brand);

const lowerBrand = brand.map((ele) => {
    return {
        name: ele.name.toLowerCase(),
        foundationYear: getRandomNumber(1900, 2000),
    }
});

console.log(lowerBrand);

const bonusBrands = lowerBrand.filter((element) => {
    return element.foundationYear > 1950;
});

console.log(bonusBrands);


/************************************************************
 // Snack 2
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
 ************************************************************/

console.log('********** JSNACK 2 **********');
console.time();

const cars = [
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'benzina',
    },
    {
        marca: 'Subaru',
        modello: 'Baracca SV',
        alimentazione: 'metano',
    },
    {
        marca: 'Mercedes',
        modello: 'SLK 200',
        alimentazione: 'diesel',
    },
    {
        marca: 'Fiat',
        modello: 'Qubo',
        alimentazione: 'gpl',
    },
    {
        marca: 'Chevrolet',
        modello: 'Camaro SS',
        alimentazione: 'benzina',
    },
    {
        marca: 'Kia',
        modello: 'Sportage',
        alimentazione: 'diesel',
    },
    {
        marca: 'Toyota',
        modello: 'Yaris',
        alimentazione: 'benzina',
    },
    {
        marca: 'Piaggio',
        modello: 'Apecar',
        alimentazione: 'gpl',
    },
    {
        marca: 'Citroen',
        modello: 'Doblò',
        alimentazione: 'metano',
    },
    {
        marca: 'Landini',
        modello: 'Testacalda',
        alimentazione: 'bestemmie',
    },
];

const benzina = [];
const diesel = [];
const altro = [];

cars.forEach((element) => {
    switch (element.alimentazione) {
        case 'benzina':
            benzina.push({
                ...element
            });
            break;
        case 'diesel':
            diesel.push({
                ...element
            });
            break;
        default:
            altro.push({
                ...element
            });
    }
});

console.table(benzina);
console.table(diesel);
console.table(altro);

console.timeEnd();


//SNACK 3
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.

console.log('********** JSNACK 3 **********');

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

const mammiferi = animals.filter((el) =>  {
    return el.classe === 'mammiferi';
});

console.log(mammiferi);


// SNACK 4
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

console.log('********** JSNACK 4 **********');

const persone = [
    {
        nome: 'Carcarlo',
        cognome: 'Pravettoni',
        age: 11,
    },
    {
        nome: 'Giangiacomo',
        cognome: 'Comizi',
        age: 56,
    },
    {
        nome: 'Filippo',
        cognome: 'Franchi',
        age: 19,
    },
    {
        nome: 'Fabio',
        cognome: 'Rovente',
        age: 18,
    },
    {
        nome: 'Piersilvio',
        cognome: 'Sorci',
        age: 17,
    },
    {
        nome: 'Monica',
        cognome: 'Lewinski',
        age: 28,
    },
    {
        nome: 'Robertina',
        cognome: 'Carelli',
        age: 54,
    },
    {
        nome: 'Genoveffa',
        cognome: 'Scorgi',
        age: 12,
    },
];

console.table(persone);


// persone.forEach((el) => {
    
//     const {nome, cognome, age} = el;
//     if (age >= 18) {
//         console.log(`${nome} ${cognome} può guidare`);
//     } else {
//         console.log(`${nome} ${cognome} non può guidare`);
//     }
// });

const guidatori = persone.map(el => `${el.nome} ${el.cognome}${el.age >= 18 ? '' : ' non'} può guidare`);

console.table(guidatori);


// SNACK 5
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.

console.log('********** JSNACK 5 **********');

const computers = [
    {
        nome: 'Alienware',
        marca: 'Dell',
        hasWindows: true,
        price: 1299,
        discPrice: 999,
    },
    {
        nome: 'Legion',
        marca: 'Lenovo',
        hasWindows: true,
        price: 1499,
        discPrice: 1399,
    },
    {
        nome: 'Thinkpad',
        marca: 'Lenovo',
        hasWindows: true,
        price: 999,
        discPrice: 799,
    },
    {
        nome: 'MacBook Air',
        marca: 'Apple',
        hasWindows: false,
        price: 1149,
        discPrice: 1049,
    },
    {
        nome: 'Wonderful',
        marca: 'Acer',
        hasWindows: true,
        price: 499,
        discPrice: 349,
    },
    {
        nome: 'MacBook Pro',
        marca: 'Apple',
        hasWindows: false,
        price: 1479,
        discPrice: 1299,
    },
    {
        nome: 'XPS 15',
        marca: 'Dell',
        hasWindows: false,
        price: 1000,
        discPrice: 850,
    },
    {
        nome: 'Pavilion',
        marca: 'HP',
        hasWindows: true,
        price: 349,
        discPrice: 299,
    },
    {
        nome: 'iMac',
        marca: 'Apple',
        hasWindows: false,
        price: 1499,
        discPrice: 1399,
    },
];

console.table(computers);

const windowsPc = computers.filter(element => element.hasWindows === true).map((pc) => {
    return {
        ...pc,
        diffPrice: pc.price - pc.discPrice,
    };
});

// const discPC = windowsPc.map((pc) => {
//     return {
//         ...pc,
//         diffPrice: pc.price - pc.discPrice,
//     };
// });

console.table(windowsPc);

/*********************************************************************
 * SNACK ESERCITAZIONE
 *********************************************************************/

console.log('*************** SNACK ESERCITAZIONE ***************');

/**
 SNACK 1
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

console.log('********** SNACK 1 **********');

const arr1 = ['pippo', 'PLUTO', 'Paperino'];

const newArr = arr1.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
});

console.log(arr1);
console.log(newArr);


/*
SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
*/

console.log('********** SNACK 2 **********');

const socials = ['Facebook', 'Twitter', 'Instagram', 'TikTok', 'Pinterest', 'Linkedin'];

const browser = {
    tab: ['Facebook', 'GitHub', 'TikTok', 'Gmail', 'Instagram', 'Boolean'],
    activeTab: 0,
};

browser.tab = browser.tab.filter(social => socials.indexOf(social) === - 1);

console.log(browser);


/*
SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

console.log('********** SNACK 3 **********');

const capArray = [];

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    capArray.push(capitalizeLetter(element));
}

console.log(capArray);


/*
SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
 */






/***************************************
 * FUNCTIONS
 ***************************************/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function capitalizeLetter(el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
}