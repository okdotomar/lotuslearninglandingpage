import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cta() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Ready to Transform Your Course Creation?
                </h2>
                <p className="mx-auto max-w-[700px] text-lg mb-10 opacity-90">
                    Join leading institutions that are saving time and improving course quality with Lotus Learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
                        <Link href="/contact">Contact Sales</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <Link href="/faq">Read FAQ</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
