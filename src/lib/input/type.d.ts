export interface SizeMapping extends Record<string, string> {
	sm: string;
	md: string;
	lg: string;
	xl: string;
}

export type SizeAvailable = 'sm' | 'md' | 'lg' | 'xl';
