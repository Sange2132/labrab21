import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ClubCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export function ClubCard({ title, description, icon, link }: ClubCardProps) {
  return (
    <Card className="club-card border-t-4 border-t-nstu-red overflow-hidden transition-all h-full flex flex-col">
      <CardHeader className="pb-4 relative">
        <div className="absolute -right-4 -top-4 text-nstu-blue opacity-10">
          {React.cloneElement(icon as React.ReactElement, { className: "w-20 h-20" })}
        </div>
        <div className="text-nstu-blue">
          {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10 mb-3" })}
        </div>
        <CardTitle className="text-nstu-blue text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-nstu-blue hover:bg-nstu-blue/90 text-white">
          <Link href={link}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
