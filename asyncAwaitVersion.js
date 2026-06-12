function mowYard(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });
    
};

function weedEat(name) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (Math.random() > 0.01) {
            resolve(`${name} finished using the weed eater.`);
            }
            else {reject(`${name} fell asleep after mowing the yard.`)
            };
        }, 1500);
    });
        
};

function trimHedges(name) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                resolve(`${name} finished trimming the hedges.`);
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
    
    
};

function collectWood(name) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(`${name} finished collecting wood.`);
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    })
    
 
};

function waterGarden(name) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            if (Math.random() > 0.15) {
                resolve(`${name} finished watering the garden.`);
            }
            else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500); 
    });
};

async function doSummerChores(name) {
    try {
      const mowedResult = await mowYard(name);
      console.log(mowedResult);
      
      const weedEatResult = await weedEat(name);
      console.log(weedEatResult);
      
      const woodResult = await collectWood(name);
      console.log(woodResult);
      
      const hedgetrimResult = await trimHedges(name);
      console.log(hedgetrimResult);
      
      const waterResult = await waterGarden(name);
      console.log(waterResult);
      
      console.log(`${name} finished all their chores!`);  
    }
    catch(error) {
        console.error('an error occured:', error);
    }            
};

doSummerChores("Madilyn");