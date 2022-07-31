
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAXwlNWQx_ibnMtWcU4yxRKojzrucwFtHE",
      authDomain: "my-page-f8106.firebaseapp.com",
      projectId: "my-page-f8106",
      storageBucket: "my-page-f8106.appspot.com",
      messagingSenderId: "414370086220",
      appId: "1:414370086220:web:fe00bb1d8a740cdabee3e9",
      measurementId: "G-LG3CHCGKM4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
