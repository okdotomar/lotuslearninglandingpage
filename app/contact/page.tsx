import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-2xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Get in Touch</h1>
                <p className="text-xl text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                </p>
            </div>

            <form className="space-y-6 glass-panel p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                        <input id="first-name" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                        <input id="last-name" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="Doe" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Work Email</label>
                    <input id="email" type="email" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="jane@university.edu" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="institution" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Institution</label>
                    <input id="institution" className="flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="University of ..." />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                    <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm" placeholder="How can we help you?" />
                </div>

                <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
        </div>
    );
}
