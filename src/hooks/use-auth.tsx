
"use client"

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { type User } from '@supabase/supabase-js';
import { supabaseClient, isSupabaseConfigured } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
        console.error("Supabase is not configured.");
        setLoading(false);
        return;
    }

    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
    
    // Check initial session
    const checkUser = async () => {
        const { data: { user } } = await supabaseClient.auth.getUser();
        setUser(user);
        setLoading(false);
    }
    checkUser();


    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
