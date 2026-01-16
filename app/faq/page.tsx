import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FaqPage() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-12 md:py-24 max-w-3xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Frequently Asked Questions</h1>
                <p className="text-xl text-muted-foreground">
                    Everything you need to know about Lotus Learning.
                </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-white/10">
                        <AccordionTrigger className="hover:text-primary">What LMS platforms do you support?</AccordionTrigger>
                        <AccordionContent>
                            Currently, Lotus Learning is exclusively optimized for Canvas LMS. We are exploring integrations with Blackboard and Brightspace for future releases.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b-white/10">
                        <AccordionTrigger className="hover:text-primary">Is the content accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes! Accessibility is a core pillar of our product. All content generated through Lotus Learning is WCAG 2.1 AA compliant automatically.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b-white/10">
                        <AccordionTrigger className="hover:text-primary">How long does implementation take?</AccordionTrigger>
                        <AccordionContent>
                            Installation via LTI 1.3 is quick and can be done by your Canvas administrator in under 15 minutes. Faculty training usually takes about one hour.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-b-white/10">
                        <AccordionTrigger className="hover:text-primary">Do you offer pilot programs?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we offer a 30-day pilot program for qualified institutions. Contact our sales team to schedule a demo and discuss pilot opportunities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-b-0">
                        <AccordionTrigger className="hover:text-primary">How is pricing structured?</AccordionTrigger>
                        <AccordionContent>
                            We offer an annual site license based on your institution's FTE (Full-Time Equivalent) student count. This ensures unlimited usage for all your faculty and staff.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
