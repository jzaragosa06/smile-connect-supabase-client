import { supabase } from "../configs/supabase-client"
import { dentistInfoSchema, dentistSchema } from "../dto/dentist.dto";


export const addDentist = async (dentist) => {
    const parsedDentist = dentistSchema.safeParse(dentist);

    if (!parsedDentist.success) throw new Error(parsedDentist.error.issues);

    const { data, error } = await supabase.from("dentists").insert([parsedDentist.data]).select();
    if (error) throw error;
    return data;
};

export const addDentistInfo = async (dentistInfo) => {
    const parsedDentistInfo = dentistInfoSchema.safeParse(dentistInfo);

    if (!parsedDentistInfo.success) throw new Error(parsedDentist.error.issues);

    const { data, error } = await supabase.from("dentist_infos").insert([parsedDentistInfo.data]).select();
    if (error) throw error;
    return data;
};

export const getDentists = async () => {
    const { data, error } = await supabase
        .from("dentists")
        .select("*");

    if (error) throw error;
    return data;
}

export const getDentist = async (dentist_id) => {
    const { data, error } = await supabase
        .from("dentists")
        .select("*")
        .eq("dentist_id", dentist_id)
        .single();

    if (error) throw error;
    return data;
};

export const updateDentist = async (dentist_id, dentist) => {
    const parsedDentist = dentistSchema.safeParse(dentist);

    if (!parsedDentist.success) throw new Error(parsedDentist.error.issues);

    const { data, error } = await supabase
        .from("dentists")
        .update(parsedDentist.data)
        .eq("dentist_id", dentist_id)
        .select();

    if (error) throw error;
    return data;
};


export const deleteDentist = async (dentist_id) => {
    //delete the dentist first
    const { denstist_data, dentist_error } = await supabase
        .from("dentists")
        .delete()
        .eq("dentist_id", dentist_id)
        .select();

    if (dentist_error) throw error;

    //delete dentist_info
    const { denstistInfo_data, dentistInfo_error } = await supabase
        .from("dentist_infos")
        .delete()
        .eq("dentist_id", dentist_id)
        .select();

    if (dentistInfo_error) throw error;

    return { denstist_data, denstistInfo_data };
}