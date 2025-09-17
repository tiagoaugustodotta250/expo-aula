//npm install @supabase/supabase-js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

//Esse export será usado para que formulário seja utilizada a variável supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
