export interface FilterOption {
  value: number;
  name: string;
  checked: boolean;
}

export interface Filters {
  cuisine: FilterOption[];
  goal: FilterOption[];
  dietary_info: FilterOption[];
  allergies: FilterOption[];
}