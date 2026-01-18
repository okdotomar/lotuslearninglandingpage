import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Flower } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-4xl">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full">
                        <Flower className="h-16 w-16 text-primary" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">About Lotus Learning</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We are on a mission to democratize rigorous instructional design, making it accessible to every educator.
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center mb-24">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground mb-4">
                        Lotus Learning was founded by a dedicated team of students. We set out to create a better LMS but realized we needed to start by building better courses, understanding the ins and outs of instructor workflows and the instructional designer approach.
                    </p>
                    <p className="text-muted-foreground">
                        We realized that while faculty are subject matter experts, they aren't always web designers. Lotus Learning bridges that gap, allowing educators to focus on teaching while our software handles the presentation.
                    </p>
                </div>
                <div className="glass-card aspect-video flex items-center justify-center bg-white/10 dark:bg-black/10">
                    {/* Placeholder for team image or office */}
                    <span className="text-muted-foreground font-medium">Team / Office Image</span>
                </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Join Us on this Journey</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                    We are just getting started. If you are passionate about education technology, check out our careers page or contact us.
                </p>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    );
}
