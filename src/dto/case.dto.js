import { z } from "zod";

export const caseLeadSchema = z.object({
    // case_lead_id: z.int(),
    patient_id: z.int(),
    title: z.string(),
    description: z.string(),
    procedure_type: z.string(),
    urgency: z.string(),
    status: z.string(),
    source: z.string(),
    claimed_by: z.int(),
    // created_at: z.union([z.string().datetime(), z.date()]),
    // updated_at: z.union([z.string().datetime(), z.date()]),
}).strip();


export const caseProgressSchema = z.object({
    // case_progress_id: z.int(),
    dentist_id: z.int(),
    status: z.string(),
    notes: z.string(),
    appointment_date: z.union([z.string().datetime(), z.date()]),
    // created_at: z.union([z.string().datetime(), z.date()]),
    // updated_at: z.union([z.string().datetime(), z.date()]),
}).strip();

