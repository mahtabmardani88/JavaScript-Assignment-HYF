/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */
let mealRecept = {
    meadName : "Omelette",
    servers: 2,
    ingredients :["4eggs" ,"2 strips of bacon" , "1 tsp salt/pepper"]
}
function meal(){
    for (let i in mealRecept){
        console.log(`${i} : ${mealRecept[i]}`);
    }
}
meal();


// this is default hyf
for (let item in myRecipe) {
    if (item == 'title') {
        console.log(`Meal name: ${myRecipe[item]}`);
    } else if (item == 'servings') {
        console.log(`Serves: ${myRecipe[item]}`);
    } else {
        const ingredientList = myRecipe[item];

        console.log(`Ingedients: ${ingredientList.join(', ')}`);
    }
} 