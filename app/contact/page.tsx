"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/actions/contact";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        try {
            await submitContactForm(formData);
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("idle");
            alert("Something went wrong. Please try again.");
        }
    }

    if (status === "success") {
        return (
            <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-2xl min-h-[60vh] flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30"
                >
                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                </motion.div>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold font-orbiter mb-4"
                >
                    Message Sent!
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground text-lg mb-8 max-w-md"
                >
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                        Send Another Message
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                </p>
            </div>

            <form
                action={handleSubmit}
                className="space-y-6 glass-panel p-8 rounded-2xl relative overflow-hidden"
            >
                {status === "loading" && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-[2px]">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                        <input required id="first-name" name="first-name" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                        <input required id="last-name" name="last-name" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="Doe" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Work Email</label>
                    <input required id="email" name="email" type="email" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="jane@university.edu" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="institution" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Institution</label>
                    <input required id="institution" name="institution" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="University of ..." />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                    <textarea required id="message" name="message" className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="How can we help you?" />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}
