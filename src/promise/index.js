const promise = new Promise((resolve, reject) =>
{
    resolve("Wenas")
});

const cows = 10;
const cowsNeeded = 10;

const countCows = new Promise(function (resolve, reject) 
{
    if(cows >= cowsNeeded)
    {
        resolve(`Ganaste dinero, tenes ${cows} vacas`);
    }
    else
    {
        reject(`No ganastes nada wey, te faltan ${cowsNeeded - cows} vacas`);
    }
});

countCows.then((result) =>
{
    console.log(result);
}).catch((error) =>
{
    console.log(error);
}).finally(() => console.log("😎"));