// Imports
const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccount.json");
// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log("Initialzing Firebase");
    firestoreService.initializeFirebaseApp(serviceAccount);
    console.log("Firebase Initialized");
    await firestoreService.restore("./disneyPlusMoviesData.json");
    console.log("Upload Success");
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
