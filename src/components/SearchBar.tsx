import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = "Pesquisar produtos..." }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      {/* Desktop Search */}
      <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="pl-10 pr-10 w-64 bg-secondary/20 border-border/30 focus:border-primary transition-colors"
          />
          {query && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-transparent"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </form>

      {/* Mobile Search */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative"
        >
          <Search className="h-5 w-5" />
        </Button>
        
        {isExpanded && (
          <div className="absolute top-full right-0 left-0 mt-2 p-4 bg-background border border-border rounded-lg shadow-lg z-50">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="pl-10"
                  autoFocus
                />
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={clearSearch}>
                <X className="h-4 w-4" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};