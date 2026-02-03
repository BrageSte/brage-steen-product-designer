import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CaseMetaItem {
  label: string;
  value: string | string[];
}

interface CaseSidebarProps {
  items: CaseMetaItem[];
  className?: string;
}

const CaseSidebar = ({ items, className = "" }: CaseSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderValue = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return (
        <ul className="space-y-1">
          {value.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      );
    }
    return value;
  };

  return (
    <>
      {/* Desktop: Sidebar (not sticky, scrolls with content) */}
      <aside
        className={`hidden lg:block ${className}`}
      >
        <div className="bg-card rounded-lg p-6 space-y-6">
          <h3 className="text-caption">Prosjektinfo</h3>
          <dl className="space-y-4">
            {items.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-muted-foreground mb-1">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium">
                  {renderValue(item.value)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>

      {/* Mobile: Collapsible accordion */}
      <div className="lg:hidden mb-8">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full flex items-center justify-between bg-card rounded-lg p-4">
            <span className="text-sm font-medium">Prosjektinfo</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="bg-card rounded-b-lg px-4 pb-4 -mt-2">
              <dl className="space-y-4 pt-4 border-t border-border">
                {items.map((item) => (
                  <div key={item.label}>
                    <dt className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium">
                      {renderValue(item.value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  );
};

export default CaseSidebar;
