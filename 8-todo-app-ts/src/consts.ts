export const TODO_FILTERS = {
	ALL: "all",
	ACTIVE: "active",
	COMPLETED: "completed",
} as const;

export const FILTER_BUTTONS = {
	[TODO_FILTERS.ALL]: {
		literal: "All",
		href: `/?filter=${TODO_FILTERS.ALL}`,
	},
	[TODO_FILTERS.ACTIVE]: {
		literal: "Active",
		href: `/?filter=${TODO_FILTERS.ACTIVE}`,
	},
	[TODO_FILTERS.COMPLETED]: {
		literal: "Completed",
		href: `/?filter=${TODO_FILTERS.COMPLETED}`,
	},
} as const;

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]; //👀 este snippet permite tomar cualquier key del obj TODO_FILTERS de forma dinámica, como ve 👇:
//type FilterValue = "all" | "active" | "completed"

//pero si agrego otra(PARTIAL: 'partial') esta también se incluye automática se vería 👇:
//type FilterValue = "all" | "active" | "completed" | "partial"
