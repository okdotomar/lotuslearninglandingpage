import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">How can we help?</h1>
                <p className="text-xl text-muted-foreground">
                    Our support team is ready to assist you. Choose a channel below.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col p-6 glass-card hover:shadow-xl transition-all hover:bg-white/40">
                    <FileText className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                        Browse our comprehensive guides and tutorials for admins and instructors.
                    </p>
                    <Button variant="outline" className="w-full">Visit Knowledge Base</Button>
                </div>

                <div className="flex flex-col p-6 glass-card hover:shadow-xl transition-all hover:bg-white/40">
                    <MessageCircle className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                        Chat with our support engineers in real-time. Available M-F, 9am-5pm EST.
                    </p>
                    <Button variant="outline" className="w-full">Start Chat</Button>
                </div>

                <div className="flex flex-col p-6 glass-card hover:shadow-xl transition-all hover:bg-white/40">
                    <Mail className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                        Send us a detailed message and we'll get back to you within 24 hours.
                    </p>
                    <Button variant="outline" className="w-full">Contact Support</Button>
                </div>
            </div>

            <div className="mt-16 p-8 glass-panel rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-4">Looking for sales?</h2>
                <p className="text-muted-foreground mb-6">If you are interested in purchasing a license for your institution, please contact our sales team.</p>
                <Button asChild>
                    <Link href="/contact">Contact Sales</Link>
                </Button>
            </div>
        </div>
    );
}
