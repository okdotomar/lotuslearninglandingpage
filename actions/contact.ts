"use server";

export async function submitContactForm(formData: FormData) {
    // Simulate network delay to show the "Sending..." state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Extract data (in a real app, you would validate this using Zod)
    const rawFormData = {
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        institution: formData.get("institution"),
        message: formData.get("message"),
    };

    console.log("Form submitted successfully:", rawFormData);

    // TODO: Integrate with an email provider (e.g., Resend, SendGrid, Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Lotus Learning <onboarding@resend.dev>',
    //   to: 'Omar.rodriguez@utahtech.edu',
    //   subject: 'New Contact Form Submission',
    //   text: `Name: ${rawFormData.firstName} ${rawFormData.lastName}\nEmail: ${rawFormData.email}...`
    // });

    return { success: true };
}
