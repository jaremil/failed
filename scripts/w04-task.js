/* LESSON 3 - Programming Tasks */


let myProfile = {};

myProfile.name = "Jade Miller";
myProfile.photo = "images/profile.jpeg"; 
myProfile.favoriteFoods = [
  'Gyro',
  'Sushi',
  'Cake',
];
myProfile.hobbies = ['Art', 'Cooking', 'Going on walks']; 
myProfile.placesLived = [];


myProfile.placesLived.push(
  {
    place: 'Idaho',
    length: '21 years'
  },
  {
    place: 'Chicago',
    length: '1 year'
  }
);


document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});