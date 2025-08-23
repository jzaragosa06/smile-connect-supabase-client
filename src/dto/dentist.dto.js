import { z } from "zod";

//dentist 
export const dentistSchema = z.object({
    // dentist_id: z.int(),
    email: z.string().email(),
    first_name: z.string(),
    middle_name: z.string().optional(),
    contact_number: z.string(),
    weekly_schedule: z.string().array(),
    // created_at: z.union([z.string().datetime(), z.date()]),
    // updated_at: z.union([z.string().datetime(), z.date()]),
}).strip();

//dentist info
export const dentist_info = z.object({
    // dentist_info_id: z.int(),
    dentist_id: z.int(),
    university: z.string(),
    year_of_study: z.int(),
    specialties: z.string().array(),
});


//we din't included the dto export for typing. 
// Since this is not ts