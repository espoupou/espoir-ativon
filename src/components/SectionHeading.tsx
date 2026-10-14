import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({ title, subtitle, children, align = "left", as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <Heading className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 tracking-tight">
        {title}
      </Heading>
      {subtitle && (
        <p className={`text-lg text-foreground-secondary max-w-3xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
