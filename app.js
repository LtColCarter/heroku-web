"use strict";

const express = require("express");
const app = express();

app.use(express.static("client"));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

let names = [
    "Spaghetti Carbonara",
    "Classic Bangers and Mash",
    "KFC Chicken",
    "Family Cottage Pie",
    "Mac & Cheese with Chicken",
    "BLT Tortilla Wraps",
    "Lime Chicken Tortilla Wrap",
    "Easy Coronation Chicken",
    "Scotch Eggs",
    "Easy Mini Quiches",
    "Chocoalate Bana Bread",
    "Chocolate Cheesecake",
    "Lemon Tart",
    "Sticky Toffee Pudding",
    "Tradition Rice Pudding",
    "Chocolate Brownie Cake",
    "Choclate Sponge Cake",
    "Easy Banana Cake"
];

let ingredients = [
    [" pasta"," cheese"," eggs"," bacon"," garlic"],
    [" potatoes"," chicken"," milk"," butter"," sausages"," onions"," gravy"],
    [" salt"," paprika"," flour"," mustard"," thyme"," basil"," chicken"," eggs"," ginger"],
    [" beef"," onion"," carrot"," celery"," beef"," flour"," potatoes"," milk"," butter"],
    [" pasta"," chicken"," cream"," milk"," nutmeg"," cheese"],
    [" bacon"," tortillas"," mayonnaise"," lettuce"," tomato"],
    [" chicken"," vinegar"," lime"," sugar"," onions"," garlic"," tortillas"," tomato"," lettuce"," cheese"," salsa"],
    [" mayonnaise"," chutney"," curry"," lime"," chicken"],
    [" sausages"," eggs"," breadcrumbs"],
    [" eggs"," bacon"," onions"," cheese"," puff pastry"," cream"," parsley"],
    [" eggs"," milk"," sugar"," vanilla"," bread"," bananas"," chocolate"],
    [" biscuits"," butter"," sugar"," cream"," chocolate"," cocoa powder"," cream cheese"],
    [" butter"," sugar"," flour"," eggs"," lemon"],
    [" flour"," baking powder"," sugar"," milk"," eggs"," butter"," vanilla"," cream"],
    [" rice"," sugar"," margarine"," milk"," cinnamon"],
    [" butter"," syrup"," chocolate"," sugar"," eggs"," vanilla"," flour"," walnuts"," strawberries"],
    [" eggs"," sugar"," butter"," flour"," cocoa powder"],
    [" butter"," sugar"," vanilla"," eggs"," bananas"," flour"," milk"]
];

let times = [
    90,
    55,
    70,
    30,
    55,
    20,
    45,
    15,
    40,
    30,
    80,
    120,
    50,
    45,
    310,
    80,
    50,
    45
];

let shortened_methods = [
    "1 - Cut bacon into small pieces and fry with garlic in frying pan.",
    "1 - Place potatoes in a pan and add enough water to cover. Bring to the boil and cook until tender (about 20 minutes). Drain potatoes and leave in pan.",
    "1 - Mix all of seasoning ingredients together in bowl (minus chicken and egg).",
    "1 - Fry meat and vegetables in large heavy-based pan, stirring occasionally until lightly brown (5 minutes). Stir in tomato purée, Worcestershire sauce and mixed herbs into the stock. Sprinkle the flour over the beef and vegetables.",
    "1 - Preheat oven to 200C. Bring large pan of slightly salted water to boil. Put macaroni in and cook for 3 minutes less than it says on the packet.",
    "1 - Place bacon in large frying pan, cook over medium-high heat until cooked, bacon is easy, I shouldn't have to tell you how to cook bacon!",
    "1 - Sauté chicken in a medium saucepan over medium-high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, spring onion, garlic and oregano. Simmer for 10 minutes.",
    "1 - Make sure chicken that you bought is already cooked and then dice it. Whisk mayonnaise, chutney, curry poweder, lime zest, lime juice and salt together. Then add chicken and toss with dressing. Cover and chill until you want to serve.",
    "1 - Divide sausage meat into 6 portions. On a lightly breadcrumbed-sprinkled surface, pat each portion with breadcrumbs to add 1/4cm thickness. Wrap portions completely around hard boiled eggs, pressing edges together to seal.",
    "1 - Preheat oven to 180C.",
    "1 - Preheat oven to 180C and grease loaf tin.",
    "1 - Crush digestives and mix with the melted butter ad 1 tablespoon of the caster sugar. Press into a cake tin and refrigerate.",
    "1 - Preheat oven to 180C.",
    "1 - Preheat oven to 170C.",
    "1 - Put everything in slower cooker, stir it and turn it on to high and cover. After about an hour stir in then you cna leave it until it has finished cooking. Add jam, syrup or honey to taste, but will taste without still.",
    "1 - Butter and flour round cake tin.",
    "1 - Weigh your 3 eggs with their shells. Take that weight and measure the same amount each for the sugar, butter and flour. Weigh the flour last. (For example if the eggs weigh 200g, then flour should weigh 200g, sugar 200g and same for butter).",
    "1 - Grease and line a loaf tin. Melt butter, sugar and vanilla in a saucepan over a medium heat."
];

let methods = [
    "1 - Cut bacon into small pieces and fry with garlic in frying pan. 2 - Get spaghetti cooking whilst frying and mix together eggs and cheese and lots of pepper for sauce. 3 - Let frying pan and pasta cool to medium temperature then add pasta to frying pan and then pour sauce in, making sure to stir a lot to make sure the eggs don't scramble. 4 - Mix lots and heat back up to perfect serving temperature and then serve with more pepper and cheese on top.",
    "1 - Place potatoes in a pan and add enough water to cover. Bring to the boil and cook until tender (about 20 minutes). Drain potatoes and leave in pan. 2 - Meanwhile, stir in stock cubes into the warm milk until they dissolve. Stir the milk mixture and butter into the potatoes. Mash the potatoes until smooth and creamy. 3 - Heat little bit of cooking oil in a frying pan over medium-high heat. Prick the sausages in a few places with fork and place them in the pan. Cook, turning often, until golden brown and juices run clear (12-15 minutes). Remove from the pan and drain on kitchen roll. 4 - Use same pan and add onions. Cook and stir over medium heat until golden but still crisp. Add the gravy and heat through. 5 - To serve, scoop potatoes onto a large serving plate. Arrange the sausages over the potatoes, top with onions and gravy.",
    "1 - Mix all of seasoning ingredients together in bowl (minus chicken and egg). 2 - Take pieces of chicken and dip in a slightly beaten egg. Roll chicken in the mixed spices and fry in oil. 3 - Place fried chicken on baking ray and bake for about 45 minutes at 180C",
    "1 - Fry meat and vegetables in large heavy-based pan, stirring occasionally until lightly brown (5 minutes). Stir in tomato purée, Worcestershire sauce and mixed herbs into the stock. Sprinkle the flour over the beef and vegetables. 2 - Add stock into the mince. Bring to boil and then reduce heat and cook gently for 15 minutes. Season to taste. 3 - While mince is cooking, cook the potatoes in a pan of boiling water for 10 minutes. Drain the potatoes, then mash with warmed milk and butter. Season and preheat grill to medium. 4 - Spoon mince mixture into large ovenproof dish. Spread mashed potato over top and fluff with fork. Put under the grill to brown lightly and crisp the top.",
    "1 - Preheat oven to 200C. Bring large pan of slightly salted water to boil. Put macaroni in and cook for 3 minutes less than it says on the packet. 2 - Cook the chicken breast in a non-stick frying pan over low heat for 10 minutes, turning once. Season, then remove from pan. 3 - Pour the cream into the frying pan and bring to the boil, scraping the bottom with a wooden spatula to incorporate any browned bits. Add milk, nutmeg and salt and pepper to season and heat gently. Cut the chicken into small diced pieces. 4 - Drain the macaroni, tip back into the pan and add diced chicken, grated cheddar and creamy milk mixture. Mix well. 5 - Pour into a lightly buttered ovenproof dish and sprinkle with parmesan and bake for 30 minutes until golden brown.",
    "1 - Place bacon in large frying pan, cook over medium-high heat until cooked, bacon is easy, I shouldn't have to tell you how to cook bacon! 2 - Microwave the tortillas for a few seconds to soften them up and make them warm. Spread the mayo and put some bacon in with lettuce and tomato. Fold sides of tortilla over and roll up. Cut each wrap in half before serving.",
    "1 - Sauté chicken in a medium saucepan over medium-high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, spring onion, garlic and oregano. Simmer for 10 minutes. 2 - Heat a heavy frying pan over medium heat. Place a tortilla in the pan, warm and turn over to heat other side. Repeat with all tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa.",
    "1 - Make sure chicken that you bought is already cooked and then dice it. Whisk mayonnaise, chutney, curry poweder, lime zest, lime juice and salt together. Then add chicken and toss with dressing. Cover and chill until you want to serve.",
    "1 - Divide sausage meat into 6 portions. On a lightly breadcrumbed-sprinkled surface, pat each portion with breadcrumbs to add 1/4cm thickness. Wrap portions completely around hard boiled eggs, pressing edges together to seal. 2 - Dip sausage-coated eggs in beaten egg, then roll in breadcrumbs. Place on baking tray and bake in preheated 190C oven until lightly browned (about 25 minutes).",
    "1 - Preheat oven to 180C. 2 - Lightly grease 2 muffin tins with butter. 3 - In a bowl, mix the eggs, bacon, onion, cheese, salt & pepper with a fork until all mixed together well. 4 - Using a glass or pastry cutter, cut circles out of puff pastry. Bake in oven for 15-20 minutes or until golden brown.",
    "1 - Preheat oven to 180C and grease loaf tin. 2 - In a large mixing bowl, mix eggs, milk, sugar and vanilla extract until smooth. Stir in bread, bananas and chocolate chips and let rest for 5 minutes for bread to soak. Pour into prepared tin. 3 - Line a roasting tin with a damp kitchen towel. Place loaf tin on a towel inside roasting tin, and place roasting tin on oven rack. Fill roasting tin with water to reach halfway up the sides of the loaf tin. Bake in preheated oven for 1 hour or until a knife inserted in centre comes out clean.",
    "1 - Crush digestives and mix with the melted butter ad 1 tablespoon of the caster sugar. Press into a cake tin and refrigerate. 2 - Whip cream until soft peak stage. Add cooled melted chocolate, then the cocoa poweder mix. Blend well and set aside. 3 - Beat the cream cheese and remaining sugar together. Fold in cream/chocolate mixture and mix thoroughly. 4 - Spread into tin on top of crushed biscuits and freeze for an hour. 5 - Refrigerate for about 30 minutes, then serve.",
    "1 - Preheat oven to 180C. 2 - Process butter, 4 tablespoons of icing sugar and 125g flour in food processor for 10 seconds, or blend with pastry blender. Pa dough evenly into tart tin. 3 - Bake 12-15 minutes until golden. 4 - Meanwhile, combine eggs, caster sugar, lemon zest, lemon juice and 3 tablespoons of flour and mix until smooth; pour mixture over hot pastry case. 5 - Bake 15 to 20 minutes more until firm. Let cool completely and dust with icing sugar to serve.",
    "1 - Preheat oven to 170C. 2 - In large bowl, sift together flour, salt and baking powder. Add the sugar and mix well. 3 - In another bowl add milk, eggs, vanilla and melted butter. Whisk together until a lightly frothy foam forms on top. 4 - Add milk mixture to flour and mix together until smooth. 5 - Pour into greased baking dish and bake for 20-30 minutes or until cake is firm on top (start checking after 20 minutes). 6 - For the sauce, add butter, sugar and cream to a large saucepan and simmer over medium-high heat until sauce is smooth and dark brown, stirring frequently. Remove from heat and let stand for 10 minutes before serving with pudding.",
    "1 - Put everything in slower cooker, stir it and turn it on to high and cover. After about an hour stir in then you cna leave it until it has finished cooking. Add jam, syrup or honey to taste, but will taste without still.",
    "1 - Butter and flour round cake tin. 2 - In a pan over low heat, melt 110g butter and 175g golden syrup. Stir in 170g chocolate chips and until melted. Remove from heat and add sugar and eggs and stir until blended. Stir in 1 teaspoon vanilla, flour and nuts. 3 - Pour into prepared cake tin. Bake at 180C or until centre springs back when touched. 4 - Cool in pan 10 minutes and place on cooling rack. 5 - To make glaze, combine chopped chocolate, 2 tablespoons butter and golden syrup in a pan. Stir over low heat until chocolate melts. Remove from heat and stir in vanilla extract. 6 - Once the cake is cool, cover with the glaze. Garnish with sliced strawberries.",
    "1 - Weigh your 3 eggs with their shells. Take tha weight and measure the same amount each for the sugar, butter and flour. Weigh the flour last. (For example if the eggs weigh 200g, then flour should weigh 200g, sugar 200g and same for butter). 2 - For the flour, remove 55g from the weight you measued. Add 55g of cocoa powder. Combine flour and cocao. 3 - Preheat oven to 170C, grease 2 sandwich tins and line with baking parchment. 4 - Put all of the butter and sugar into a large mixing bowl. Cream together until pale, creamy and fluffy. 5 - Crack 1 egg into mixture. Gently mix in the egg, don't want to over mix. Repeat process for 2nd and 3rd eggs. 6 - Sieve a couple of tablespoons of flour-cocoa mixture at a time into the mixing bowl with the other ingredients. Give it a stir. Try to get air into mixture whilst mixing. 7 - Divide mixture evenly between the 2 tins. Bake in preheated oven for 20 minutes. To make sure it has finished baking, use fingers to very lightly press on the top of the sponge, it should feel spongey and spring back. 8 - Remember to let the cake cool before icing or anything.",
    "1 - Grease and line a loaf tin. Melt butter, sugar and vanilla in a saucepan over a medium heat. 2 - Remove from the heat and add the mashed bananas, mix well. 3 - Add egg and mix well. 4 - Stir in the flour and milk. 5 - Pour into the prepared tin, sprinkle with a tablespoon of demerara sugar to give a crunch topping if you want. 6 - Bake at 170C for 35 minutes or until a skewer comes out clean. Leave to cool after."
];

let categories = [
    "dinner",
    "dinner",
    "dinner",
    "dinner",
    "dinner",
    "lunch",
    "lunch",
    "lunch",
    "lunch",
    "lunch",
    "dessert",
    "dessert",
    "dessert",
    "dessert",
    "dessert",
    "baking",
    "baking",
    "baking",
];


// Get requests
app.get("/recipeNames", async function(req,res) {
    res.send(names);
});

app.get("/recipeIngredients", async function(req,res) {
    res.send(ingredients);
});

app.get("/recipeCookingTimes", async function(req,res) {
    res.send(times);
});

app.get("/recipeShortenedMethods", async function(req,res) {
    res.send(shortened_methods);
});

app.get("/recipeMethods", async function(req,res) {
    res.send(methods);
});

app.get("/recipeCategories", async function(req,res) {
    res.send(categories);
});

app.get("/searchByCategory1", async function(req,res) {
    let x = [];
    for(let i=0; i<categories.length; i++) {
        if (categories[i] == "dinner") {
            x.push(i);
        }
    }
    res.send(x);
});

app.get("/searchByCategory2", async function(req,res) {
    let x = [];
    for(let i=0; i<categories.length; i++) {
        if (categories[i] == "baking") {
            x.push(i);
        }
    }
    res.send(x);
});

app.get("/searchByCategory3", async function(req,res) {
    let x = [];
    for(let i=0; i<categories.length; i++) {
        if (categories[i] == "dessert") {
            x.push(i);
        }
    }
    res.send(x);
});

app.get("/searchByCategory4", async function(req,res) {
    let x = [];
    for(let i=0; i<categories.length; i++) {
        if (categories[i] == "lunch") {
            x.push(i);
        }
    }
    res.send(x);
});


// Post requests
app.post("/addName", function(req,res) {
    let new_name = req.body.name;
    names.push(new_name);
    res.send("Fine that worked");
});

app.post("/addTime", function(req,res) {
    let new_time = req.body.time;
    times.push(new_time);
    res.send("Fine that worked");
});

app.post("/addShortenedMethod", function(req,res) {
    let new_shortMethod = req.body.shortMethod;
    shortened_methods.push(new_shortMethod);
    res.send("Fine that worked");
});

app.post("/addMethod", function(req,res) {
    let new_method = req.body.method;
    methods.push(new_method);
    res.send("Fine that worked");
});


app.post("/addCategory", function(req,res) {
    let new_category = req.body.category;
    categories.push(new_category);
    res.send("Fine that worked");
});
   

module.exports = app;