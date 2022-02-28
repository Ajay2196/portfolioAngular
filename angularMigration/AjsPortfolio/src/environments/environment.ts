// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
 
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBa7pWt9vKooqZ58dTObwhbAUflaW1DkRw",
    authDomain: "blogposts-b960d.firebaseapp.com",
    projectId: "blogposts-b960d",
    storageBucket: "blogposts-b960d.appspot.com",
    messagingSenderId: "474598421367",
    appId: "1:474598421367:web:344d727a06517b3e466772"
  },
  baseURL : "http://localhost:3000/",
  registerUser : "portfolioUsers/reg/",
  authenticate : "portfolioUsers/authenticate",
  getPosts : "blogPosts/get/",
  createPosts : "blogPosts/create/"
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
