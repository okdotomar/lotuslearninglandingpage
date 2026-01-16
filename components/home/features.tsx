"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Palette, Accessibility, Layout } from "lucide-react";

export function Features() {
    return (
        <section id="features" className="container mx-auto px-4 py-24 md:px-6">
            <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold font-orbiter tracking-tighter sm:text-4xl md:text-5xl">
                    Everything You Need
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Streamline your course creation process with our powerful suite of tools.
                </p>
            </div>

            <Tabs defaultValue="speed" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-white/10 backdrop-blur-md border border-white/20">
                    <TabsTrigger value="speed" className="py-3">Speed</TabsTrigger>
                    <TabsTrigger value="design" className="py-3">Design</TabsTrigger>
                    <TabsTrigger value="accessibility" className="py-3">Accessibility</TabsTrigger>
                    <TabsTrigger value="structure" className="py-3">Structure</TabsTrigger>
                </TabsList>

                <div className="mt-8">
                    <TabsContent value="speed">
                        <FeatureCard
                            title="Build in Minutes"
                            description="Reduce course creation time from 40+ hours to just minutes. Our automated tools handle the heavy lifting of formatting and organization."
                            icon={<Zap className="h-12 w-12 text-primary mb-4" />}
                        />
                    </TabsContent>

                    <TabsContent value="design">
                        <FeatureCard
                            title="Professional Aesthetics"
                            description="Apply modern, cohesive themes across your entire course with one click. Ensure every page looks neat, professional, and on-brand."
                            icon={<Palette className="h-12 w-12 text-primary mb-4" />}
                        />
                    </TabsContent>

                    <TabsContent value="accessibility">
                        <FeatureCard
                            title="Built-in Accessibility"
                            description="Automatically generate accessible content. Our tools check for contrast, alt text, and screen reader compatibility as you build."
                            icon={<Accessibility className="h-12 w-12 text-primary mb-4" />}
                        />
                    </TabsContent>

                    <TabsContent value="structure">
                        <FeatureCard
                            title="Smart Templating"
                            description="Use pre-built, pedagogical templates designed by instructional experts. Maintain consistency across modules and simplify navigation for students."
                            icon={<Layout className="h-12 w-12 text-primary mb-4" />}
                        />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
    return (
        <Card className="border-white/20">
            <CardHeader>
                <div className="flex justify-center">{icon}</div>
                <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-center text-lg">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}
