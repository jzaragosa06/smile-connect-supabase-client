import { supabase } from "../configs/supabase-client";
import { patientSchema } from "../dto/patient.dto";

export const addPatient = async (patient) => {
    const parsedPatient = patientSchema.safeParse(patient);

    if (!parsedPatient.success) throw new Error(parsedPatient.error.issues);

    const { data, error } = await supabase
        .from("patients")
        .insert([parsedPatient.data])
        .select();

    if (error) throw error;
    return data;
};


export const updatePatient = async (patient_id, patient) => {
    const parsedPatient = patientSchema.safeParse(patient);

    if (!parsedPatient.success) throw new Error(parsedPatient.error.issues);

    const { data, error } = await supabase
        .from("patients")
        .update(parsedPatient.data)
        .eq("patient_id", patient_id)
        .select();

    if (error) throw error;
    return data;
};


export const getPatients = async () => {
    const { data, error } = await supabase
        .from("patients")
        .select("*");

    if (error) throw error;
    return data;
}


export const getPatient = async (patient_id) => {
    const { data, error } = await supabase
        .from("patients")
        .select("*")
        .eq("patient_id", patient_id)
        .single();

    if (error) throw error;
    return data;
};

export const deletePatient = async (patient_id) => {
    const { data, error } = await supabase
        .from("patients")
        .delete()
        .eq("patient_id", patient_id);

    if (error) throw error;
    return data;
};