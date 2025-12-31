const z = require("zod");

const signupSchema = z.object({
    username: z
        .string({ required_error: "name is required" })
        .trim()
        .min(3, { message: "at least 3 character required" })
        .max(255, { message: "less then 255 character" }),
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(9, { message: "at least 9 character required" })
        .max(255, { message: "less then 255 character" }),
    phone: z
        .string({ message: "phone number is required" })
        .trim()
        .min(10, { message: "at least 10 character reqruired" })
        .max(255, { message: "less then 255 character" }),
    password: z
        .string({ message: "password is required" })
        .min(6, { message: "at leasr 6 character is required" })
        .max(255, { message: "less then 255 character" })
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(9, { message: "at least 9 character required" })
        .max(255, { message: "less then 255 character" }),
    password: z
        .string({ message: "password is required" })
        .min(6, { message: "at leasr 6 character is required" })
        .max(255, { message: "less then 255 character" })

});

module.exports = { signupSchema, loginSchema };