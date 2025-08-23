import { supabase } from "../configs/supabase-client";
import { caseLeadSchema, caseProgressSchema } from "../dto/case.dto";

//api for case lead
export const addCaseLead = async (caseLead) => {
    const parsedCaseLead = caseLeadSchema.safeParse(caseLead);

    if (!parsedCaseLead.success) throw new Error(parsedCaseLead.error.issues);

    const { data, error } = await supabase
        .from("case_leads")
        .insert([parsedCaseLead.data])
        .select();

    if (error) throw error;
    return data;
};

export const updateCaseLead = async (case_lead_id, caseLead) => {
    const parsedCaseLead = caseLeadSchema.safeParse(caseLead);

    if (!parsedCaseLead.success) throw new Error(parsedCaseLead.error.issues);

    const { data, error } = await supabase
        .from("case_leads")
        .update(parsedCaseLead.data)
        .eq("case_lead_id", case_lead_id)
        .select();

    if (error) throw error;
    return data;
};


export const deleteCaseLead = async (case_lead_id) => {

    const { data, error } = await supabase
        .from("case_leads")
        .delete()
        .eq("case_lead_id", case_lead_id)
        .select();

    if (error) throw error;
    return data;
};

export const getCaseLeads = async () => {

    const { data, error } = await supabase
        .from("case_leads")
        .select("*");

    if (error) throw error;
    return data;
};

export const getCaseLead = async (case_lead_id) => {

    const { data, error } = await supabase
        .from("case_leads")
        .select("*")
        .eq("case_lead_id", case_lead_id)

    if (error) throw error;
    return data;
};

// api for case progress
export const addCaseProgress = async (caseProgress) => {
    const parsedCaseProgress = caseProgressSchema.safeParse(caseProgress);

    if (!parsedCaseProgress.success) throw new Error(parsedCaseProgress.error.issues);

    const { data, error } = await supabase
        .from("case_progress")
        .insert([parsedCaseProgress.data])
        .select();

    if (error) throw error;
    return data;
}

export const updateCaseProgress = async (case_progress_id, caseProgress) => {
    const parsedCaseProgress = caseProgressSchema.safeParse(caseProgress);

    if (!parsedCaseProgress.success) throw new Error(parsedCaseProgress.error.issues);


    const { data, error } = await supabase
        .from("case_progress")
        .update(parsedCaseProgress.data)
        .eq("case_progress_id", case_progress_id)
        .select();

    if (error) throw error;
    return data;
}

export const deleteCaseProgress = async (case_progress_id) => {

    const { data, error } = await supabase
        .from("case_progress")
        .delete()
        .eq("case_progress_id", case_progress_id)
        .select();

    if (error) throw error;
    return data;
};

export const getCaseProgresses = async () => {

    const { data, error } = await supabase
        .from("case_progress")
        .select("*");

    if (error) throw error;
    return data;
};


export const getCaseProgress = async (case_progress_id) => {

    const { data, error } = await supabase
        .from("case_progress")
        .select("*")
        .eq("case_progress_id", case_progress_id)
        .single();

    if (error) throw error;
    return data;
};




