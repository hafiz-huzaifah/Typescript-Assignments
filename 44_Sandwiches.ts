
function makeSandwich (item: string[]) {
    console.log("\nMaking your sandwich with: ");

    item.forEach(element => console.log("- " + element));
    console.log("Enjoy your Sandwich! \n");
}

makeSandwich(["Ham", "Cheese", "Lettuce"]);

makeSandwich([ "Turkey", "Bacon"]);

makeSandwich(["Peanut Butter", "Jelly"]);
