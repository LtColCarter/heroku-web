// GET All
document.getElementById("get").addEventListener("click", async function() {
    let response = await fetch("http://127.0.0.1:8090/recipeNames");
    let recipeNames = await response.json();
    // Uncomment this if you want to check if adding a recipe actually works! Or just spam "Show all recipes" until you see the one you added
    // console.log(recipeNames);
    
    
    let response1 = await fetch("http://127.0.0.1:8090/recipeIngredients");
    let recipeIngredients = await response1.json();
    
    let response2 = await fetch("http://127.0.0.1:8090/recipeCookingTimes");
    let recipeTimes = await response2.json();

    let response3 = await fetch("http://127.0.0.1:8090/recipeShortenedMethods");
    let recipeShortenedMethods = await response3.json();

    let response4 = await fetch("http://127.0.0.1:8090/recipeMethods");
    let recipeMethods = await response4.json();
    
    let i1 = Math.floor(Math.random()*recipeNames.length);
    document.getElementById("1stTitle").innerText = recipeNames[i1];
    document.getElementById("1stModalTitle").innerHTML = recipeNames[i1];
    document.getElementById("1stModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i1] + "</span>";
    document.getElementById("1stInside").innerText = recipeMethods[i1] + " Ingredients: " + recipeIngredients[i1] + ". Cooking Time:   " + recipeTimes[i1];
    
    let i2 = (i1 + 1) % 17;
    document.getElementById("2ndTitle").innerText = recipeNames[i2];
    document.getElementById("2ndModalTitle").innerHTML = recipeNames[i2];
    document.getElementById("2ndModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i2] + "</span>";
    document.getElementById("2ndInside").innerText = recipeMethods[i2] + " Ingredients: " + recipeIngredients[i2] + ". Cooking Time:   " + recipeTimes[i2];
    
    let i3 = (i2 + 1) % 17;
    document.getElementById("3rdTitle").innerText = recipeNames[i3];
    document.getElementById("3rdModalTitle").innerHTML = recipeNames[i3];
    document.getElementById("3rdModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i3] + "</span>";
    document.getElementById("3rdInside").innerText = recipeMethods[i3] + " Ingredients: " + recipeIngredients[i3] + ". Cooking Time:   " + recipeTimes[i3];

    let i4 = (i3 + 1) % 17;
    document.getElementById("4thTitle").innerText = recipeNames[i4];
    document.getElementById("4thModalTitle").innerHTML = recipeNames[i4];
    document.getElementById("4thModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i4] + "</span>";
    document.getElementById("4thInside").innerText = recipeMethods[i4] + " Ingredients: " + recipeIngredients[i4] + ". Cooking Time:   " + recipeTimes[i4];
});

document.getElementById("getSearchCategory1").addEventListener("click", async function() {
    let response6 = await fetch("http://127.0.0.1:8090/recipeNames");
    let recipeNames = await response6.json();
    
    let response1 = await fetch("http://127.0.0.1:8090/recipeIngredients");
    let recipeIngredients = await response1.json();
    
    let response2 = await fetch("http://127.0.0.1:8090/recipeCookingTimes");
    let recipeTimes = await response2.json();

    let response3 = await fetch("http://127.0.0.1:8090/recipeShortenedMethods");
    let recipeShortenedMethods = await response3.json();

    let response4 = await fetch("http://127.0.0.1:8090/recipeMethods");
    let recipeMethods = await response4.json();
    
    let min = Math.ceil(0);
    let max = Math.floor(4);
    let i1 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("1stTitle").innerText = recipeNames[i1];
    document.getElementById("1stModalTitle").innerHTML = recipeNames[i1];
    document.getElementById("1stModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i1] + "</span>";
    document.getElementById("1stInside").innerText = recipeMethods[i1] + " Ingredients: " + recipeIngredients[i1] + ". Cooking Time:   " + recipeTimes[i1];

    let i2 = (i1 + 1) % 5;
    document.getElementById("2ndTitle").innerText = recipeNames[i2];
    document.getElementById("2ndModalTitle").innerHTML = recipeNames[i2];
    document.getElementById("2ndModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i2] + "</span>";
    document.getElementById("2ndInside").innerText = recipeMethods[i2] + " Ingredients: " + recipeIngredients[i2] + ". Cooking Time:   " + recipeTimes[i2];
    
    let i3 = (i2 + 1) % 5;
    document.getElementById("3rdTitle").innerText = recipeNames[i3];
    document.getElementById("3rdModalTitle").innerHTML = recipeNames[i3];
    document.getElementById("3rdModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i3] + "</span>";
    document.getElementById("3rdInside").innerText = recipeMethods[i3] + " Ingredients: " + recipeIngredients[i3] + ". Cooking Time:   " + recipeTimes[i3];

    let i4 = (i3 + 1) % 5;
    document.getElementById("4thTitle").innerText = recipeNames[i4];
    document.getElementById("4thModalTitle").innerHTML = recipeNames[i4];
    document.getElementById("4thModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i4] + "</span>";
    document.getElementById("4thInside").innerText = recipeMethods[i4] + " Ingredients: " + recipeIngredients[i4] + ". Cooking Time:   " + recipeTimes[i4];

});

document.getElementById("getSearchCategory2").addEventListener("click", async function() {
    let response6 = await fetch("http://127.0.0.1:8090/recipeNames");
    let recipeNames = await response6.json();
    
    let response1 = await fetch("http://127.0.0.1:8090/recipeIngredients");
    let recipeIngredients = await response1.json();
    
    let response2 = await fetch("http://127.0.0.1:8090/recipeCookingTimes");
    let recipeTimes = await response2.json();

    let response3 = await fetch("http://127.0.0.1:8090/recipeShortenedMethods");
    let recipeShortenedMethods = await response3.json();

    let response4 = await fetch("http://127.0.0.1:8090/recipeMethods");
    let recipeMethods = await response4.json();
    
    let min = Math.ceil(15);
    let max = Math.floor(17);
    let i1 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("1stTitle").innerText = recipeNames[i1];
    document.getElementById("1stModalTitle").innerHTML = recipeNames[i1];
    document.getElementById("1stModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i1] + "</span>";
    document.getElementById("1stInside").innerText = recipeMethods[i1] + " Ingredients: " + recipeIngredients[i1] + ". Cooking Time:   " + recipeTimes[i1];

    let i2 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("2ndTitle").innerText = recipeNames[i2];
    document.getElementById("2ndModalTitle").innerHTML = recipeNames[i2];
    document.getElementById("2ndModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i2] + "</span>";
    document.getElementById("2ndInside").innerText = recipeMethods[i2] + " Ingredients: " + recipeIngredients[i2] + ". Cooking Time:   " + recipeTimes[i2];
    
    let i3 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("3rdTitle").innerText = recipeNames[i3];
    document.getElementById("3rdModalTitle").innerHTML = recipeNames[i3];
    document.getElementById("3rdModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i3] + "</span>";
    document.getElementById("3rdInside").innerText = recipeMethods[i3] + " Ingredients: " + recipeIngredients[i3] + ". Cooking Time:   " + recipeTimes[i3];

    let i4 = (i1 + 1) % 5;
    document.getElementById("4thTitle").innerText = recipeNames[i4];
    document.getElementById("4thModalTitle").innerHTML = recipeNames[i4];
    document.getElementById("4thModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i4] + "</span>";
    document.getElementById("4thInside").innerText = recipeMethods[i4] + " Ingredients: " + recipeIngredients[i4] + ". Cooking Time:   " + recipeTimes[i4];
});

document.getElementById("getSearchCategory3").addEventListener("click", async function() {
    let response6 = await fetch("http://127.0.0.1:8090/recipeNames");
    let recipeNames = await response6.json();
    
    let response1 = await fetch("http://127.0.0.1:8090/recipeIngredients");
    let recipeIngredients = await response1.json();
    
    let response2 = await fetch("http://127.0.0.1:8090/recipeCookingTimes");
    let recipeTimes = await response2.json();

    let response3 = await fetch("http://127.0.0.1:8090/recipeShortenedMethods");
    let recipeShortenedMethods = await response3.json();

    let response4 = await fetch("http://127.0.0.1:8090/recipeMethods");
    let recipeMethods = await response4.json();
    
    let min = Math.ceil(9);
    let max = Math.floor(14);
    let i1 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("1stTitle").innerText = recipeNames[i1];
    document.getElementById("1stModalTitle").innerHTML = recipeNames[i1];
    document.getElementById("1stModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i1] + "</span>";
    document.getElementById("1stInside").innerText = recipeMethods[i1] + " Ingredients: " + recipeIngredients[i1] + ". Cooking Time:   " + recipeTimes[i1];

    let i2 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("2ndTitle").innerText = recipeNames[i2];
    document.getElementById("2ndModalTitle").innerHTML = recipeNames[i2];
    document.getElementById("2ndModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i2] + "</span>";
    document.getElementById("2ndInside").innerText = recipeMethods[i2] + " Ingredients: " + recipeIngredients[i2] + ". Cooking Time:   " + recipeTimes[i2];
    
    let i3 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("3rdTitle").innerText = recipeNames[i3];
    document.getElementById("3rdModalTitle").innerHTML = recipeNames[i3];
    document.getElementById("3rdModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i3] + "</span>";
    document.getElementById("3rdInside").innerText = recipeMethods[i3] + " Ingredients: " + recipeIngredients[i3] + ". Cooking Time:   " + recipeTimes[i3];

    let i4 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("4thTitle").innerText = recipeNames[i4];
    document.getElementById("4thModalTitle").innerHTML = recipeNames[i4];
    document.getElementById("4thModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i4] + "</span>";
    document.getElementById("4thInside").innerText = recipeMethods[i4] + " Ingredients: " + recipeIngredients[i4] + ". Cooking Time:   " + recipeTimes[i4];
});

document.getElementById("getSearchCategory4").addEventListener("click", async function() {
    let response6 = await fetch("http://127.0.0.1:8090/recipeNames");
    let recipeNames = await response6.json();
    
    let response1 = await fetch("http://127.0.0.1:8090/recipeIngredients");
    let recipeIngredients = await response1.json();
    
    let response2 = await fetch("http://127.0.0.1:8090/recipeCookingTimes");
    let recipeTimes = await response2.json();

    let response3 = await fetch("http://127.0.0.1:8090/recipeShortenedMethods");
    let recipeShortenedMethods = await response3.json();

    let response4 = await fetch("http://127.0.0.1:8090/recipeMethods");
    let recipeMethods = await response4.json();

    let min = Math.ceil(5);
    let max = Math.floor(9);
    let i1 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("1stTitle").innerText = recipeNames[i1];
    document.getElementById("1stModalTitle").innerHTML = recipeNames[i1];
    document.getElementById("1stModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i1] + "</span>";
    document.getElementById("1stInside").innerText = recipeMethods[i1] + " Ingredients: " + recipeIngredients[i1] + ". Cooking Time:   " + recipeTimes[i1];

    let i2 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("2ndTitle").innerText = recipeNames[i2];
    document.getElementById("2ndModalTitle").innerHTML = recipeNames[i2];
    document.getElementById("2ndModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i2] + "</span>";
    document.getElementById("2ndInside").innerText = recipeMethods[i2] + " Ingredients: " + recipeIngredients[i2] + ". Cooking Time:   " + recipeTimes[i2];
    
    let i3 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("3rdTitle").innerText = recipeNames[i3];
    document.getElementById("3rdModalTitle").innerHTML = recipeNames[i3];
    document.getElementById("3rdModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i3] + "</span>";
    document.getElementById("3rdInside").innerText = recipeMethods[i3] + " Ingredients: " + recipeIngredients[i3] + ". Cooking Time:   " + recipeTimes[i3];

    let i4 = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("4thTitle").innerText = recipeNames[i4];
    document.getElementById("4thModalTitle").innerHTML = recipeNames[i4];
    document.getElementById("4thModalShortMethod").innerHTML = "<span>" + recipeShortenedMethods[i4] + "</span>";
    document.getElementById("4thInside").innerText = recipeMethods[i4] + " Ingredients: " + recipeIngredients[i4] + ". Cooking Time:   " + recipeTimes[i4];
});


// POST Requests
document.getElementById("add_name").addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        let name = document.getElementById("name").value;
        let response = await fetch("http://127.0.0.1:8090/addName",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "name=" + name
            });
        if(!response.ok) {
            throw new Error("Problem adding recipe" + response.code);
        }
    } catch (error) {
        alert ("Problem: " + error);
    }
});

document.getElementById("add_time").addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        let time = document.getElementById("time").value;
        let response = await fetch("http://127.0.0.1:8090/addTime",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "time=" + time
            });
        if(!response.ok) {
            throw new Error("Problem adding recipe" + response.code);
        }
    } catch (error) {
        alert ("Problem: " + error);
    }
});

document.getElementById("add_shortMethod").addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        let shortMethod = document.getElementById("shortMethod").value;
        let response = await fetch("http://127.0.0.1:8090/addShortenedMethod",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "shortMethod=" + shortMethod

            });
        if(!response.ok) {
            throw new Error("Problem adding recipe" + response.code);
        }
    } catch (error) {
        alert ("Problem: " + error);
    }
});

document.getElementById("add_category").addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        let category = document.getElementById("category").value;
        let response = await fetch("http://127.0.0.1:8090/addCategory",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "category=" + category

            });
        if(!response.ok) {
            throw new Error("Problem adding recipe" + response.code);
        }
    } catch (error) {
        alert ("Problem: " + error);
    }
});

document.getElementById("add_method").addEventListener("submit", async function(event) {
    event.preventDefault();

    try {
        let method = document.getElementById("method").value;
        let response = await fetch("http://127.0.0.1:8090/addMethod",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "method=" + method

            });
        if(!response.ok) {
            throw new Error("Problem adding recipe" + response.code);
        }
    } catch (error) {
        alert ("Problem: " + error);
    }
});