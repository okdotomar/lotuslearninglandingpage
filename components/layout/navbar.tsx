"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Features", href: "/#features", targetId: "features" },
    { name: "Security", href: "/security", targetId: null },
    { name: "Support", href: "/support", targetId: null },
    { name: "About", href: "/about", targetId: null },
    { name: "FAQ", href: "/faq", targetId: null },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, targetId: string | null) => {
        if (targetId && pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <nav className="fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-7xl rounded-full border border-white/20 bg-white/10 shadow-xl backdrop-blur-2xl transition-all duration-300 dark:bg-black/20 dark:border-white/10">
                <div className="flex h-16 items-center justify-between px-4 md:px-6">
                    <Logo />

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href, link.targetId)}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild variant="glass" size="sm" className="rounded-full px-6">
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-sm border-l border-white/20 bg-background/95 backdrop-blur-2xl shadow-2xl p-6 md:hidden"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-lg font-bold font-orbiter">Menu</span>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 text-muted-foreground hover:text-primary"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                            onClick={(e) => handleScroll(e, link.href, link.targetId)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <div className="mt-4">
                                        <Button className="w-full rounded-xl" asChild variant="glass" size="lg">
                                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Sales</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
