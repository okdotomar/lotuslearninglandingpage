import { WalletCards, ShieldCheck, HeartHandshake } from "lucide-react";

export function Institutions() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold font-orbiter tracking-tighter sm:text-4xl mb-6 text-gradient">
                            Why Institutions Choose Lotus Learning
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We understand the unique challenges of Higher Ed. Our platform is built to scale, ensuring consistency and quality across thousands of courses.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 backdrop-blur-sm">
                                    <WalletCards className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Cost Effective</h3>
                                    <p className="text-muted-foreground">Significantly reduce instructional design costs by empowering faculty.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 backdrop-blur-sm">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Secure & Compliant</h3>
                                    <p className="text-muted-foreground">FERPA compliant, SOC2 certified, and built with privacy-first architecture.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 backdrop-blur-sm">
                                    <HeartHandshake className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">24/7 Support</h3>
                                    <p className="text-muted-foreground">Dedicated support teams for both administrators and instructors.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Placeholder for an image or stats grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="glass-card p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">40h+</div>
                                <div className="text-sm text-muted-foreground">Saved per course</div>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                                <div className="text-sm text-muted-foreground">Accessibility Score</div>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <div className="text-sm text-muted-foreground">Institutions</div>
                            </div>
                            <div className="glass-card p-6 text-center">
                                <div className="text-4xl font-bold text-primary mb-2">10k+</div>
                                <div className="text-sm text-muted-foreground">Courses Built</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
