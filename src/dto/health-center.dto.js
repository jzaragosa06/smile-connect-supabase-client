import z, { string } from "zod";

export const healthCenterSchema = z.object({
    // health_center_id: z.int(),
    name: z.string(),
    address: z.string(),
    contact_number: z.string(),
    point_person_name: z.string(),
    barangay: z.string(),
    municipality: z.string(),
    province: string(),
    // created_at: z.union([z.string().datetime(), z.date()]),
    // updated_at: z.union([z.string().datetime(), z.date()]),
}).strip();
