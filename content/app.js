  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDAEw0HWT5Lv13xReV2wbmlqB5zC6Y6K7w",
    authDomain: "unicook-deeb8.firebaseapp.com",
    databaseURL: "https://unicook-deeb8-default-rtdb.firebaseio.com",
    projectId: "unicook-deeb8",
    storageBucket: "unicook-deeb8.appspot.com",
    messagingSenderId: "807620932364",
    appId: "1:807620932364:web:d767582643c4c409634f29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//------------------------- Ready Data ---------------------------//
var insert, select, update, deleteButton, clearAllEntries, recipeID, meal, category, categoryImageURL, description, foodImageURL, likes, prepMethod, ingredients
// const insert = document.getElementById('insert');
// const select = document.getElementById('select');
// const update = document.getElementById('update');
// const deleteButton = document.getElementById('deleteButton');
// const clear = document.getElementById('clear');      

    function Ready() {        
          recipeID = document.getElementById("recipeID").value;
          meal = document.getElementById("meal").value;
          category = document.getElementById("category").value;
          categoryImageURL = document.getElementById("categoryImageURL").value;
          description = document.getElementById("description").value;
          foodImageURL = document.getElementById("foodImageURL").value;
          ingredients = document.getElementById("ingredients").value;
          likes = document.getElementById("likes").value;
          prepMethod = document.getElementById("prepMethod").value;
      }

      /* {
          "Milk, cheese, eggs and alternatives": "https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg",
          "Vegetables, legume & beans":"https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/101351132_vegetable_selection_web.jpg",
          "Grain Food": "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
          "pasta": "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
          "Lean meats and poultry, fish and alternatives": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Inside_a_Balut_-_Embryo_and_Yolk.jpg/440px-Inside_a_Balut_-_Embryo_and_Yolk.jpg",
          "Fruits": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/440px-Culinary_fruits_front_view.jpg",
          "Burgers and Sandwiches": "https://lh3.googleusercontent.com/pw/AM-JKLU9QF7BfQ5ps6Dwjg0DZRLHRCbNEWANj2JgW6TAs0gCvgmvVSn3RVhSoTLk57G0SBEpQkGpUzhKNjlNayUpTmRJbA5k4OsIrCZ4b80G4tK5O2MecXdRtsq6UK7ISNILZRAqlKnNZtxUhkT7RaL9Lek=w624-h356-no?authuser=0"

      }
      */
var categoryArr = [
  "Milk, cheese, eggs and alternatives",
  "Vegetables, legume & beans",
  "Grain Food",
  "pasta",
  "Lean meats and poultry, fish and alternatives",
  "Fruits",
  "Burgers and Sandwiches"
]

var categoryURLArr = [
  "https://image.shutterstock.com/image-photo/assorted-dairy-products-milk-yogurt-260nw-530162824.jpg",
  "https://www.eatforhealth.gov.au/sites/default/files/images/the_guidelines/101351132_vegetable_selection_web.jpg",
  "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
  "https://cdn.pixabay.com/photo/2014/12/11/02/55/corn-syrup-563796__340.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Inside_a_Balut_-_Embryo_and_Yolk.jpg/440px-Inside_a_Balut_-_Embryo_and_Yolk.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/440px-Culinary_fruits_front_view.jpg",
  "https://lh3.googleusercontent.com/pw/AM-JKLU9QF7BfQ5ps6Dwjg0DZRLHRCbNEWANj2JgW6TAs0gCvgmvVSn3RVhSoTLk57G0SBEpQkGpUzhKNjlNayUpTmRJbA5k4OsIrCZ4b80G4tK5O2MecXdRtsq6UK7ISNILZRAqlKnNZtxUhkT7RaL9Lek=w624-h356-no?authuser=0"
]

//========================= INSERT PROCESS =====================================//
document.getElementById('insert').onclick = function() {
    
    Ready();
    firebase.database().ref('recipe/'+recipeID).set({
        recipeID: recipeID,
        category: category,
        categoryImageURL: categoryImageURL,
        description: description,
        foodImageURL: foodImageURL,
        ingredients: ingredients,
        likes: likes,
        prepMethod: prepMethod,
        meal: meal
    });

    if(category.value==categoryArr[0]){
      categoryImageURL.value = categoryURLArr[0]
    }
    if(category.value==categoryArr[1]){
      categoryImageURL.value = categoryURLArr[1]
    }
    if(category.value==categoryArr[2]){
      categoryImageURL.value = categoryURLArr[2]
    }
    if(category.value==categoryArr[3]){
      categoryImageURL.value = categoryURLArr[3]
    }
    if(category.value==categoryArr[4]){
      categoryImageURL.value = categoryURLArr[4]
    }
    if(category.value==categoryArr[5]){
      categoryImageURL.value = categoryURLArr[5]
    }
    if(category.value==categoryArr[6]){
      categoryImageURL.value = categoryURLArr[6]
    }
    


    //---------- insert notification -------------------------------//
    if (recipeID.value != "")  {alert("You have successfuly shared your recipe."); }
    else {alert("You need to have a recipeID to share your recipe.");}
    //------------------------ notification ---------------------------------------------//
    // let formNotificationDiv = document.getElementById('formNotificationDiv');
    // formNotificationDiv.style.backgroundColor = "lightgreen";
    // let formNotificationP = document.createElement('p');
    // formNotificationP.style.color = "green";
    // formNotificationDiv.appendChild(formNotificationP);
    // formNotificationP.innerHTML = "Congratulations, your recipe is shared or retrieved."

    clearEverything();

}
  
// -------------------- Selection Process ---------------------------------//
document.getElementById('select').onclick = function() {
  Ready();
  //---------- select notification -------------------------------//
  console.log(recipeID);
  if (recipeID === "")  {
      alert("You need to have a recipeID to retrieve any recipe.");
  }
  else {
  
    /// ---------------- food image code -------------------------//
    let foodImageDiv = document.getElementById('foodImage')
    foodImageDiv.innerHTML = ''
    let foodImageImg = document.createElement('img');
    foodImageDiv.appendChild(foodImageImg);

    /// ---------------- category image code -------------------------//

    let categoryImageDiv = document.getElementById('categoryImageDiv')
    categoryImageDiv.innerHTML = ''
    let categoryImageImg = document.createElement('img');
    categoryImageDiv.appendChild(categoryImageImg);

    firebase.database().ref('recipe/'+recipeID).on('value', function(snapshot) {
      document.getElementById('meal').value = snapshot.val().meal;
      document.getElementById('category').value = snapshot.val().category;
      document.getElementById('categoryImageURL').value = snapshot.val().categoryImageURL;
      if(categoryImageImg.src != ''){
        categoryImageImg.src = '';
      } else {
        categoryImageImg.src = snapshot.val().categoryImageURL;
        categoryImageImg.width = "350";
      }
      
      document.getElementById('description').value = snapshot.val().description;
      document.getElementById('foodImageURL').value = snapshot.val().foodImageURL;
    
      if(foodImageImg.src != ''){
        foodImageImg.src = '';
      } else {
        foodImageImg.src = snapshot.val().foodImageURL;
        foodImageImg.width = "350";
      }
      
      document.getElementById('ingredients').value = snapshot.val().ingredients;
      document.getElementById('prepMethod').value = snapshot.val().prepMethod;
      document.getElementById('likes').value = snapshot.val().likes;
      
    })
    
    alert("You have successfuly retrieved your data.");
    
    }

    
    // let formNotificationDiv = document.getElementById('formNotificationDiv');
    // formNotificationDiv.style.backgroundColor = "lightgreen";
    // let formNotificationP = document.createElement('p');
    // formNotificationP.style.color = "green";
    // formNotificationDiv.appendChild(formNotificationP);
    // formNotificationP.innerHTML = "Congratulations, your recipe is shared or retrieved."
}

//----------------------------Update Process ==================================================///

document.getElementById('update').onclick = function() {
  Ready();
  firebase.database().ref('recipe/'+recipeID).update({
      category: category,
      categoryImageURL: categoryImageURL,
      description: description,
      foodImageURL: foodImageURL,
      ingredients: ingredients,
      likes: likes,
      prepMethod: prepMethod,
      meal: meal
  });

    // let formNotificationDiv = document.getElementById('formNotificationDiv');
    // formNotificationDiv.style.backgroundColor = "lightgreen";
    // let formNotificationP = document.createElement('p');
    // formNotificationP.style.color = "green";
    // formNotificationDiv.appendChild(formNotificationP);
    // formNotificationP.innerHTML = "Congratulations, your recipe is shared or retrieved."

    //---------- update notification -------------------------------//
    if (recipeID.value != "")  {
      alert("You have successfuly updated your recipe.");
      clearEverything();
    } else {
      alert("You need to have a recipeID to retrieve any recipe.");
    }
    
}

// // //----------------------- Delete Process --------------------------------------//
// document.getElementById('delete').onclick = function() {
//   Ready();
//   firebase.database().ref('recipe/'+recipeID).remove()
// }

//------------------------ Clear Process ---------------------------------------//
clearAllEntries = document.getElementById('clearAllEntries');
clearAllEntries.onclick = function() {
  
  var recipeID="";
  var meal = '';
  var category = '';
  var categoryImageURL = '';
  var categoryImageImg = ''
  var description = '';
  var foodImageURL = '';
  var foodImageImg = '';
  var ingredients = '';
  var prepMethod = '';
  var likes = '';
  Ready();
  clearEverything();

  
}

function clearEverything() {
  // need to reset the dom to ensure that the input buttons are affected by the button click.
  recipeID = document.getElementById("recipeID");
  meal = document.getElementById("meal");
  category = document.getElementById("category");
  categoryImageURL = document.getElementById("categoryImageURL");
  description = document.getElementById("description");
  foodImageURL = document.getElementById("foodImageURL");
  ingredients = document.getElementById("ingredients");
  likes = document.getElementById("likes");
  prepMethod = document.getElementById("prepMethod");
  
  // categoryImage and foodImage codes are needed to clear the imaages when button is pressed.
  let categoryImageDiv = document.getElementById('categoryImageDiv')
  categoryImageDiv.innerHTML = ''
  categoryImageImg = document.createElement('img');
  categoryImageDiv.appendChild(categoryImageImg);
  let foodImageDiv = document.getElementById('foodImage')
  foodImageDiv.innerHTML = ''
  foodImageImg = document.createElement('img');
  foodImageDiv.appendChild(foodImageImg);


// now we can render the data blank.
    recipeID.value = "";
    meal.value = "";
    foodImageURL.value = "";
    foodImageImg.src = '';
    category.value = "";
    categoryImageURL.value = "";
    description.value = "";
    ingredients.value = "";
    prepMethod.value = "";
    likes.value = "";
}