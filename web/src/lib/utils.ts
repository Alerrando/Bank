import { clsx, type ClassValue } from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function useSort() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSort = (value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("sortOrder", value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return { handleSort };
}
