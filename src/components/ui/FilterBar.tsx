import { useState } from "react";
import { Search } from "lucide-react";
import TagPill from "./TagPill";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  tags: string[];
  onFilterChange?: (filters: string[]) => void;
  onSortChange?: (sort: string) => void;
  onSearchChange?: (query: string) => void;
}

const FilterBar = ({
  tags,
  onFilterChange,
  onSortChange,
  onSearchChange,
}: FilterBarProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (tag: string) => {
    const newFilters = activeFilters.includes(tag)
      ? activeFilters.filter((f) => f !== tag)
      : [...activeFilters, tag];
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    onSortChange?.(value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };

  return (
    <div className="space-y-4">
      {/* Search and sort row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Søk i prosjekter..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 bg-secondary border-0 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Sort */}
        <Select value={sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-full sm:w-48 bg-secondary border-0">
            <SelectValue placeholder="Sorter etter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Nyeste</SelectItem>
            <SelectItem value="relevant">Mest relevante</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tag filters */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagPill
            key={tag}
            label={tag}
            active={activeFilters.includes(tag)}
            onClick={() => toggleFilter(tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
