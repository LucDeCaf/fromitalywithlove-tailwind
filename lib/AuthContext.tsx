import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import { useEffect } from "react";
import { createContext, useContext, ReactNode, useState } from "react";
import { auth } from "utils/firebase";

interface ContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signup: (
    username: string,
    email: string,
    password: string
  ) => Promise<UserCredential>;
}

const AuthContext = createContext<ContextType>({
  user: null,
  loading: true,
  login: async () => {
    return new Promise<UserCredential>(() => {});
  },
  signup: async () => {
    return new Promise<UserCredential>(() => {});
  },
  logout: async () => {
    return new Promise<void>(() => {});
  },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(true);
      setUser(user);
      setLoading(false);
    });
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  };

  const signup = async (
    username: string,
    email: string,
    password: string
  ): Promise<UserCredential> => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser!, { displayName: username });
    return user;
  };

  const logout = async () => {
    auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
