import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, Linkedin } from "lucide-react";
import Link from "next/link";

interface BioCardProps {
    name: string;
    title: string;
    avatar: string;
    bio: string[];
    companies: string[];
    linkedinUrl: string;
}

const BioCard = ({ name, title, avatar, bio, companies, linkedinUrl }: BioCardProps) => {
    return (
        <Card className="max-w-lg overflow-hidden">
            {/* Header with Avatar and Company Logos */}
            <CardHeader className="flex justify-between items-start gap-4">
                <div className="flex items-start space-x-4">
                    {/* Ensure Avatar is always a circle */}
                    <div className="relative h-16 w-16 rounded-full border-2 border-blue-500 overflow-hidden flex-shrink-0">
                        <Image
                            src={avatar}
                            alt={name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col space-y-1 min-w-0">
                        <div className="flex items-center space-x-2">
                            <CardTitle className="whitespace-nowrap">{name}</CardTitle>
                            {/* LinkedIn Icon */}
                            <Link
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="text-blue-500 hover:opacity-75"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                        <CardDescription className="truncate max-w-[14rem]">{title}</CardDescription>
                    </div>
                </div>

                {/* Company Logos */}
                <div className="flex space-x-4 flex-shrink-0 items-center">
                    {companies.map((logo, index) => (
                        <div key={index} className="relative h-20 w-20">
                            <Image src={logo} alt={`Company ${index + 1}`} layout="fill" objectFit="contain" />
                        </div>
                    ))}
                </div>
            </CardHeader>

            {/* Content with Bullet Points */}
            <CardContent className="space-y-3 text-sm text-muted-foreground">
                {bio.map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 fill-primary text-primary flex-shrink-0" />
                        <p className="flex-1 leading-tight">{point}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default BioCard;
