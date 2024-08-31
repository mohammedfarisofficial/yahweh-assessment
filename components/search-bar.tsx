import { Input } from "@/components/ui/input";

interface Props {
   value: string;
   setValue: (value: string) => void;
}
const SearchBar = ({ value, setValue }: Props) => {
   return (
      <div className="w-[30vw]">
         <Input
            value={value}
            onChange={(e: any) => setValue(e.target.value)}
            className="w-full"
            placeholder="Search here..."
         />
      </div>
   );
};

export default SearchBar;
