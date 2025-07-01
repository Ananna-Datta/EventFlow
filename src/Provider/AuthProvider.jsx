import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { createContext, useState, useEffect } from "react";
  import { toast } from "react-toastify";
  import Swal from "sweetalert2";
import { auth } from "../Authentication/Firebase.config";
const googleProvider = new GoogleAuthProvider();
  
  export const AuthContext = createContext(null);

  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
        }
      );
  
      return () => unsubscribe();
    }, []);


    const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          throw error;
        })
        .finally(() => setLoading(false));
    };
  
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
          throw error;
        })
        .finally(() => setLoading(false));
    };
  

    const logoutUser = async () => {
      setLoading(true);
    
      try {
        await signOut(auth);
        toast.success("Sign-out successful!"); 
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Logout successfully!",
              text: "Log Out",
              icon: "success"
            });
          }
        });
      } catch (error) {
        toast.error("Failed to log out. Please try again."); 
        Swal.fire({
          title: 'Success!',
          text: 'Logout successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
      });
      } finally {
        setLoading(false);
      }
    };

    

const loginWithGoogle = () => {
  setLoading(true);
  return signInWithPopup(auth, googleProvider)
    .then(result => {
      toast.success("Logged in with Google!");
      return result.user;
    })
    .catch(error => {
      toast.error(error.message);
      throw error;
    })
    .finally(() => setLoading(false));
};
    
    const AuthInfo = {
      user,
      loading,
      loginUser,
      createNewUser,
      loginWithGoogle,
      logoutUser,
      setLoading,
      setUser,
    };
  
    return (
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;