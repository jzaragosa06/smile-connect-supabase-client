import env from "./env";

const { createClient } = require("@supabase/supabase-js");

export const supabase = createClient(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY
);
