//Llamamos los modulos que necesitaremos
var fs = require('fs');
var xlsx = require("xlsx");

//Creamos interfaz para el usuario
const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("");

//Abrimos la interfaz para el usuario con una pregunta que lo llevará hasta el final de esta estructura
readLine.question("¿Qué acciones quiere realizar? 1. Operar con un archivo .xls, 2. Operar con un archivo .txt, 3. Operar con un archivo csv, 4. Convertir un archivo a otra extensión: ", (action) => {
    console.log("");
    //Verficamos la opción que escogió el usuario
    if (action == "1") {
        readLine.question("¿Qué desea hacer? 1. Leer el documento xls, 2. Agregar texto al documento xls: ", (editionXls) => {
            console.log("");
            //Abrimos la estructura de condiciones para ver lo que quiere realizar con el documento
            if (editionXls == "1") {
                console.log("El documento tiene como texto: ");
                console.log("");
                //Leemos el archivo que el usuario solicitó
                fs.readFile('./Text.xls', 'utf-8', (err, data) => {
                    if(err) {
                        console.log('error', err);
                    }else{
                        console.log(data);
                    }
                });
            } else if (editionXls=="2") {
                //Le permitimos que ingrese lo que desee en el archivo
                readLine.question("Ingrese el texto que desea agregar: ", (textXls) => {
                    const AdditionalContent = `\n${textXls}`;
                    //Agregamos el texto al archivo
                    fs.appendFile('./Text.xls', AdditionalContent, (err) => {
                        if(err) throw("Ha ocurrido un error");
                        //Confirmamos que se guardó exitosamente
                        console.log("El texto ha sido agregado");
                    });
                });
            }
        })
    } else if (action=="2") {
        readLine.question("¿Qué desea hacer? 1. Leer el documento txt, 2. Agregar texto al documento txt: ", (editionTxt) => {
            console.log("");
            if (editionTxt == "1") {
                console.log("El documento tiene como texto: ");
                console.log("");
                fs.readFile('./Text.txt', 'utf-8', (err, data) => {
                    if(err) {
                        console.log('error', err);
                    }else{
                        console.log(data);
                    }
                });
            } else if (editionTxt=="2") {
                readLine.question("Ingrese el texto que desea agregar: ", (textTxt) => {
                    const AdditionalContent = `\n${textTxt}`;
        
                    fs.appendFile('./Text.txt', AdditionalContent, (err) => {
                        if(err) throw("Ha ocurrido un error");
        
                        console.log("El texto ha sido agregado");
                    });
                });
            }
        })
    } else if (action=="3") {
        readLine.question("¿Qué desea hacer? 1. Leer el documento csv, 2. Agregar texto al documento csv: ", (editionCsv) => {
            console.log("");
            if (editionCsv == "1") {
                console.log("El documento tiene como texto: ");
                console.log("");
                fs.readFile('./Text.csv', 'utf-8', (err, data) => {
                    if(err) {
                        console.log('error', err);
                    }else{
                        console.log(data);
                    }
                });
            } else if (editionCsv=="2") {
                readLine.question("Ingrese el texto que desea agregar: ", (textCsv) => {
                    const AdditionalContent = `\n${textCsv}`;

                    fs.appendFile('./Text.csv', AdditionalContent, (err) => {
                        if(err) throw("Ha ocurrido un error");

                        console.log("El texto ha sido agregado");
                    });
                });
            }
        });
    } else if (action=="4") {
        readLine.question("¿Qué desea hacer? 1. Convertir el archivo .txt  a .xls, 2. Convertir el archivo .csv a .txt, 3. Convertir el archivo .xls a .csv: ", (convertion) => {
            console.log("");
            //Verificamos la conversión que desea usar el usuario
            if (convertion == "1") {
                readLine.question("Ingrese el nombre que tendrá el archivo convertido : ", (nameFile) => {
                    //Recogemos la información del primer archivo
                    const datos = xlsx.readFile('./Text.txt');
                    //Creamos uno nuevo y le insertamos la información
                    xlsx.writeFile(datos, `./${nameFile}.xls`);
                    //Confirmamos que la operación fue exitosa
                    console.log(`El archivo ${nameFile}.xls ha sido creado exitosamente`)
                });
            } else if (convertion == "2") {
                readLine.question("Ingrese el nombre que tendrá el archivo convertido : ", (nameFile) => {
                    const datos = xlsx.readFile('./Text.csv');
                    xlsx.writeFile(datos, `./${nameFile}.txt`);
                    console.log(`El archivo ${nameFile}.xls ha sido creado exitosamente`)
                });
            } else if (convertion == "3") {
                readLine.question("Ingrese el nombre que tendrá el archivo convertido : ", (nameFile) => {
                    const datos = xlsx.readFile('./Text.xls');
                    xlsx.writeFile(datos, `./${nameFile}.csv`);
                    console.log(`El archivo ${nameFile}.xls ha sido creado exitosamente`)
                });
            }
        });
    };
});

