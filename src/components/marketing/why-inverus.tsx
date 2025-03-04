import { Benefits } from "@/constants/benefits";
import { cn } from "@/functions";
import { LucideIcon } from "lucide-react";
import Container from "../global/container";
import MagicBadge from "../ui/magic-badge";

const WhyinVerus = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container delay={0.1}>
                <div
                    id="benefits"
                    className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
                >
                    <MagicBadge title="Why inVerus?" />
                    <h2 className="!leading-[1.1] mt-6 text-center font-heading font-medium text-3xl text-foreground md:text-5xl lg:text-center">
                        Proactive AI-Driven Solutions
                    </h2>
                    <p className="mt-4 max-w-lg text-center text-lg text-muted-foreground lg:text-center">
                        Innovative AI solutions designed to safeguard your business and enhance trust in a rapidly evolving landscape.
                    </p>
                </div>
            </Container>
            <Container>
                <div className="mt-16 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative">
                        {Benefits.map((benefit, index) => (
                            <Benefit
                                key={index}
                                index={index}
                                {...benefit}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
};

const Benefit = ({
    title,
    description,
    icon: Icon,
    index,
}: {
    title: string;
    description: string;
    icon: LucideIcon;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center text-center lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b"
            )}
        >
            {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-80 from-blue-950/25 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-80 from-blue-950/25 to-transparent pointer-events-none" />
            )}
            <div className="group-hover/feature:-translate-y-1 transform-gpu transition-all duration-300 flex flex-col items-center justify-center w-full">
                <div className="mb-4 relative z-10">
                    <Icon
                        strokeWidth={1.3}
                        className="w-10 h-10 text-primary transition-all duration-300 ease-in-out group-hover/feature:scale-95"
                    />
                </div>
                <div className="text-lg font-medium font-heading mb-2 relative z-10">
                    <span className="heading">{title}</span>
                </div>
                <p className="text-sm text-neutral-300 max-w-xs relative z-10">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WhyinVerus;

