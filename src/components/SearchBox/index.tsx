import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBox() {
  return (
    <>
      <form className="ml-auto flex-1 sm:flex-initial">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-8 sm:w-[300px] md:w-[200px] md:focus-within:w-[300px] lg:w-[300px] lg:focus-within:w-[500px] transition-all duration-200"
          />
        </div>
      </form>
    </>
  );
}
