import { Flower } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href="/" className={cn("flex items-center gap-2 font-bold text-xl", className)}>
            <div className="p-1.5 bg-primary/10 rounded-lg">
                <Flower className="h-6 w-6 text-primary" />
            </div>
            <span className="text-primary font-orbiter">Lotus Learning</span>
        </Link>
    );
};
