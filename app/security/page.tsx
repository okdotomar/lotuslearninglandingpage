import { Shield, Lock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecurityPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Security & Privacy First</h1>
                <p className="text-xl text-muted-foreground">
                    We treat your data with the highest level of care. Lotus Learning is built to meet the rigorous standards of higher education.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                <div className="flex flex-col items-center text-center p-6 glass-card">
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
                    <p className="text-muted-foreground">Audited and verified. We maintain strict security controls and processes.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 glass-card">
                    <Lock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">FERPA Compliant</h3>
                    <p className="text-muted-foreground">We ensure student data privacy and comply with all educational regulations.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 glass-card">
                    <FileCheck className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">GDPR Ready</h3>
                    <p className="text-muted-foreground">Comprehensive data protection for international institutions and users.</p>
                </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                <p className="mb-4 text-muted-foreground">
                    All data is encrypted in transit and at rest using industry-standard AES-256 encryption. We perform regular penetration testing and vulnerability assessments to ensure our systems remain secure against emerging threats.
                </p>

                <h2 className="text-2xl font-bold mb-4">LTI Security</h2>
                <p className="text-muted-foreground">
                    As a Canvas LTI provider, we adhere to the latest LTI 1.3 standards, ensuring a secure handshake between the LMS and our platform without unnecessary data exposure.
                </p>
            </div>

            <div className="text-center mt-12">
                <Button size="lg" asChild>
                    <Link href="/contact">Request Security Whitepaper</Link>
                </Button>
            </div>
        </div>
    );
}
