// The publishable (anon) key is intended for browser use. Supabase RLS enforces access.
export const SUPABASE_URL='https://zpawrfdfutswbvhlwvqf.supabase.co';
export const SUPABASE_ANON_KEY='sb_publishable_NGa3aWmkMCXm45Hf4m-RYQ_QitmMq68';
export const db=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
