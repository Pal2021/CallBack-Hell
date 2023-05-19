/**
 * 1.register
 * 2.send-welcome-email
 * 3.login
 * 4.get-user-data
 * 5.display user data
 */
function register(callback) {
  setTimeout(function () {
    console.log("register end");
    callback();
  }, 5000);
}
function sendEmail(callback) {
  setTimeout(function () {
    console.log("send Email");
    callback();
  }, 3000);
}
function login(callback) {
  setTimeout(function () {
    console.log("login end");
    callback();
  }, 4000);
}
function getUserData(callback) {
  setTimeout(function () {
    console.log("get user data");
    callback();
  }, 1000);
}
function displayUserData(callback) {
  setTimeout(function () {
    console.log("Display User Data");
  }, 6000);
}
console.log("Other application work");

register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});
