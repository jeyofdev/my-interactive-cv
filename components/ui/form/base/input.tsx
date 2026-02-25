import * as React from "react";

import { cn } from "@/lib/utils";

const Input = ({ className, type, ...props }: React.ComponentProps<"input">) => {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"text-white file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input border-border-input w-full min-w-0 rounded-xl border bg-transparent px-4 py-4 shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-md",
				"focus-visible:border-ring focus-visible:ring-ring-input focus-visible:ring-[0.5px]",
				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
				className,
			)}
			{...props}
		/>
	);
};

export { Input };
