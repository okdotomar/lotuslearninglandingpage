"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative py-24 lg:py-32 pt-40 overflow-hidden">
            {/* Removed bg-background to let global mesh show */}
            <div className="container relative z-10 px-4 md:px-6">
                <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center rounded-full border bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Simplify Course Creation in Canvas</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-6 font-orbiter text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Create Professional Courses in <span className="text-primary">Minutes</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                    >
                        Lotus Learning is the LTI that empowers instructors and designers to build beautiful, accessible, and engaging Canvas courses effortlessly. Save dozens of hours per course.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="w-full flex justify-center"
                    >
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="h-12 px-8 text-base shadow-xl hover:shadow-2xl transition-all" asChild>
                                <Link href="/contact">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="glass" className="h-12 px-8 text-base" asChild>
                                <Link href="/#features">See How It Works</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 translate-y-[-10%] opacity-40">
                <div className="h-[500px] w-[1000px] rounded-full bg-primary/30 blur-[120px]" />
            </div>
        </section >
    );
}
