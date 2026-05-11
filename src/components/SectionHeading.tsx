import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, children, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-secondary max-w-3xl font-medium">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
