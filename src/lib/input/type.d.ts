export interface SizeMapping extends Record<string, string> {
	sm: string;
	md: string;
	lg: string;
	xl: string;
}

export enum SizeAvailable {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl'
}
