window.onload = function() {
    // Create the ingredient list
    var ingredientsList = document.getElementById("ingredients-list");
    var ingredients = [
      { name: "Granulated sugar", quantity: 1.5, unit: "cups" },
      { name: "All-purpose flour", quantity: 0.75, unit: "cups" },
      { name: "Cocoa powder", quantity: 0.67, unit: "cups" },
      { name: "Powdered sugar", quantity: 0.5, unit: "cups" },
      { name: "Dark chocolate chips", quantity: 0.5, unit: "cups" },
      { name: "Marshmallows", quantity: 0.5, unit: "cups" },
      { name: "Dark chocolate Oreos", quantity: 0.5, unit: "cups" },
      { name: "Sea salt", quantity: 0.75, unit: "teaspoons" },
      { name: "Large eggs", quantity: 2, unit: "" },
      { name: "Canola oil or extra virgin olive oil", quantity: 0.5, unit: "cups" },
      { name: "Water", quantity: 2, unit: "tablespoons" },
      { name: "Vanilla", quantity: 0.5, unit: "teaspoon" }
    ];
  
    for (var i = 0; i < ingredients.length; i++) {
      var ingredient = ingredients[i];
      var originalQuantity = ingredient.quantity;
      var listItem = document.createElement("li");
      listItem.innerHTML = originalQuantity.toFixed(2) + " " + ingredient.unit + " " + ingredient.name;
      listItem.setAttribute("data-quantity", ingredient.quantity);
      listItem.setAttribute("data-unit", ingredient.unit);
      ingredientsList.appendChild(listItem);
    }
    
    // Create the instructions list
    var instructionsList = document.getElementById("instructions-list");
    var instructions = [
      "Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper.",
      "In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, marshmallows, Oreos, and salt.",
      "In a large bowl, whisk together the eggs, olive oil, water, and vanilla.",
      "Sprinkle the dry mix over the wet mix and stir until just combined.",
      "Pour the batter into the prepared pan (it'll be thick - that's okay) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: it's better to pull the brownies out early than to leave them in too long). Cool completely before slicing. Store in an airtight container at room temperature for up to 3 days. These also freeze well!"
    ];
  
    for (var i = 0; i < instructions.length; i++) {
      var instruction = instructions[i];
      var listItem = document.createElement("li");
      listItem.innerHTML = instruction;
      instructionsList.appendChild(listItem);
    }
  }
  
  function calculateRecipe() {
    // Get the yield value
    var yieldInput = document.getElementById("yield");
    var yield = parseInt(yieldInput.value);
  
    // Get the ingredient elements
    var ingredientsList = document.getElementById("ingredients-list");
    var ingredientElements = ingredientsList.getElementsByTagName("li");
  
    // Calculate the adjusted quantity for each ingredient
    for (var i = 0; i < ingredientElements.length; i++) {
      var ingredientElement = ingredientElements[i];
      var originalQuantity = ingredientElement.getAttribute("data-quantity");
      var adjustedQuantity = (originalQuantity / 16) * yield;
      ingredientElement.innerHTML = adjustedQuantity.toFixed(2) + " " + ingredientElement.getAttribute("data-unit") + " " + ingredientElement.getAttribute("data-name");
    }
  }