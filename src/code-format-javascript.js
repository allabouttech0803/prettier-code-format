var Tutorial = /** @class */ (function () {
  function Tutorial(title, description) {
    this.title = title;
    this.description = description;
    this.tutorial_details = 'Title is ' + this.title + ' and description is ' + this.description;
  }
  return Tutorial;
})();
function welcomeUser(user, tutorial) {
  var welcomeString = 'Welcome ' + user.name + ', you are accessing the tutorial ' + tutorial.tutorial_details;
  return welcomeString;
}
var tutorial = new Tutorial('How to format code', 'Format the code using Prettier and Husky');
var userMessage = welcomeUser(
  {
    id: 1,
    name: 'Universal Tutorial',
  },
  tutorial
);
