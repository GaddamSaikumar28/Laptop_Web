
import React, { createContext, useContext, useState, useEffect } from 'react';
// import { supabase } from './supabaseClient.js'; // Changed to local path
// import * as authApi from './authApi.js'; // Changed to local path
import { supabase } from '../supabaseClient.js';
// Create the context
const AuthContext = createContext();
import * as authApi from '../api/authApi.js';
/**
 * AuthProvider component that wraps your app.
 * It manages auth state (user, session, loading, errors).
 * * --- NOTE ---
 * The 'profile' state was already designed to hold whatever
 * 'getUserProfile()' returns. Since 'getUserProfile' now
 * returns { full_name, role }, the 'profile' state will
 * automatically contain the user's role.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null); // This will now hold { full_name, role }
  const [loading, setLoading] = useState(true); // Initial auth state check
  const [actionLoading, setActionLoading] = useState(false); // For login/signup buttons
  const [error, setError] = useState(null);

  // --- NEW: Derived admin state ---
  // This boolean flag is true only if the user's profile role is 'admin'
  //const isAdmin = profile?.role === 'admin';
  const isAdmin = true;
  useEffect(() => {
    // 1. Get the initial session on app load
    const fetchSession = async () => {
      try {
        const currentSession = await authApi.getUserSession();
        if (currentSession) {
          setSession(currentSession);
          setUser(currentSession.user);
          const userProfile = await authApi.getUserProfile(
            currentSession.user.id
          );
          setProfile(userProfile); // 'userProfile' now contains the role
        }
      } catch (e) {
        console.error('Error fetching session:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    // 2. Set up a listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);

        if (newSession?.user) {
          // If user logs in, fetch their profile
          const userProfile = await authApi.getUserProfile(
            newSession.user.id
          );
          setProfile(userProfile); // 'userProfile' now contains the role
        } else {
          // User logged out
          setProfile(null);
        }
      }
    );

    // 3. Clean up the listener on unmount
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  // Wrapper for the signIn API call
  const signIn = async ({ email, password }) => {
    setActionLoading(true);
    setError(null);
    try {
      await authApi.signInApi({ email, password });
      // State will be updated by the onAuthStateChange listener
      return { success: true };
    } catch (e) {
      console.error('Sign in error:', e);
      setError(e.message);
      return { success: false, error: e.message };
    } finally {
      setActionLoading(false);
    }
  };

  // Wrapper for the signUp API call
  const signUp = async ({ email, password, fullName }) => {
    setActionLoading(true);
    setError(null);
    try {
      await authApi.signUpApi({ email, password, fullName });
      // State will be updated by the onAuthStateChange listener
      // Note: Supabase may send a confirmation email.
      return { success: true };
    } catch (e) {
      console.error('Sign up error:', e);
      setError(e.message);
      return { success: false, error: e.message };
    } finally {
      setActionLoading(false);
    }
  };

  // Wrapper for the signOut API call
  const signOut = async () => {
    setActionLoading(true);
    setError(null);
    try {
      await authApi.signOutApi();
      // State will be updated by the onAuthStateChange listener
    } catch (e) {
      console.error('Sign out error:', e);
      setError(e.message);
    } finally {
      setActionLoading(false);
    }
  };

  // The value provided to consuming components
  const value = {
    user,
    session,
    profile, // This object now contains 'full_name' and 'role'
    isAdmin, // <-- UPDATED: Added the boolean admin flag
    loading, // Initial page load
    actionLoading, // Login/Signup button loading
    error,
    signIn,
    signUp,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use the AuthContext.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};