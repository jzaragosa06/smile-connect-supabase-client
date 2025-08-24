import { supabase } from "../configs/supabase-client";
import { procedureSchema, procedureToCaseLeadMatchSchema } from "../dto/procedure.dto";
import { stringifyObject } from "../utility/strings";

// procedure api
export const addProcedure = async (procedure) => {
    const parsedProcedure = procedureSchema.safeParse(procedure);

    if (!parsedProcedure.success) throw new Error(stringifyObject(parsedProcedure.error.issues));

    const { data, error } = await supabase
        .from("procedures")
        .insert([parsedProcedure.data])
        .select();

    if (error) throw error;
    return data;
}

export const updateProcedure = async (procedure_id, procedure) => {
    const parsedProcedure = procedureSchema.safeParse(procedure);

    if (!parsedProcedure.success) throw new Error(stringifyObject(parsedProcedure.error.issues));

    const { data, error } = await supabase
        .from("procedures")
        .update(parsedProcedure.data)
        .eq("procedure_id", procedure_id)
        .select();

    if (error) throw error;
    return data;
}

export const deleteProcedure = async (procedure_id) => {
    const { data, error } = await supabase
        .from("procedures")
        .delete()
        .eq("procedure_id", procedure_id)
        .select();

    if (error) throw error;
    return data;
}

export const getProcedures = async () => {
    const { data, error } = await supabase
        .from("procedures")
        .select("*");

    if (error) throw error;
    return data;
}


export const getProcedure = async (procedure_id) => {
    const { data, error } = await supabase
        .from("procedures")
        .select("*")
        .eq("procedure_id", procedure_id)
        .single();

    if (error) throw error;
    return data;
}

// api for procedure to case-lead-match
export const addMatch = async (match) => {
    const parsedMatch = procedureToCaseLeadMatchSchema.safeParse(match);

    if (!parsedMatch.success) throw new Error(stringifyObject(parsedMatch.error.issues));

    const { data, error } = await supabase
        .from("procedure_to_case_lead_matches")
        .insert([parsedMatch.data])
        .select();

    if (error) throw error;
    return data;
}

export const updateMatch = async (match_id, match) => {
    const parsedMatch = procedureToCaseLeadMatchSchema.safeParse(match);

    if (!parsedMatch.success) throw new Error(stringifyObject(parsedMatch.error.issues));

    const { data, error } = await supabase
        .from("procedure_to_case_lead_matches")
        .update(parsedMatch.data)
        .eq("match_id", match_id)
        .select();

    if (error) throw error;
    return data;
}

export const deleteMatch = async (match_id) => {
    const { data, error } = await supabase
        .from("procedure_to_case_lead_matches")
        .delete()
        .eq("match_id", match_id)
        .select();

    if (error) throw error;
    return data;
}

export const getMatches = async () => {
    const { data, error } = await supabase
        .from("procedure_to_case_lead_matches")
        .select("*");

    if (error) throw error;
    return data;
}


export const getMatch = async (match_id) => {
    const { data, error } = await supabase
        .from("procedure_to_case_lead_matches")
        .select("*")
        .eq("match_id", match_id)
        .single();
    if (error) throw error;
    return data;
}
