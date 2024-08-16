type Option = {
  name: string;
  value: any;
}

type Props = {
  id: string;
  label: string;
  placeholder?: string;
  options: Option[];
  onSelect: (v: any) => void;
}

export default function Select({ id, label, options, placeholder = "Select the option", onSelect }: Props) {
 return (
  <div className="block w-full">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-600 w-full capitalize">{label}</label>
    <select 
      id={id}
      defaultValue={"default"}
      onChange={(event) => onSelect(event.target.value)}
      className="h-12 border border-red-400 hover:border-red-600 active:border-red-700 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
    >
      <option value="default" disabled>{placeholder}</option>
      {options.map((option, index) => <option key={index} value={option.value} >{option.name}</option>)}
    </select>
  </div>
 )
}
