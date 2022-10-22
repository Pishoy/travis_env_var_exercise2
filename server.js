
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("Microservices rock!");
    const favoriteFood = process.env.FAVORITE_FOOD;
    console.log(`My favorite food is ${favoriteFood}`);
    await sleep(5000);
}

main();
