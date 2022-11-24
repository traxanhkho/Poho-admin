import { createContext, useContext, useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../Firebase";

export const AuthContext = createContext();

const getUser = (uid) => {
  const userRef = ref(database, "users/" + uid);
  onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      return data;
    } else {
      console.log("No data available");
    }
  });
};

export default function AuthContextProvider ({children }){
  const [currentUser, setCurrentUser] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    setCurrentUser(uid); 
  }, [uid]);

  const login = (email, password) => {
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     if(userCredential) setUid(userCredential) ; 

  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // if(email === "admin" && password === "admin"){
  //   setCurrentUser({})
  // }
};

const data = {
  currentUser,
  setUid,
  login
};

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};


// export const useAuth = useContext(AuthContext) ; 