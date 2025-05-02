import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DropDown() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Model Framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Brain</SelectLabel>
          <SelectItem value="BTD">Brain Tumor Detection</SelectItem>
          <SelectItem value="BTS">Brain Tumor Segmentation</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Eye</SelectLabel>
          <SelectItem value="RCD">Retinal Cancer Detection</SelectItem>
          <SelectItem value="DRD">Diabetic Retinopathy Detection</SelectItem>
          <SelectItem value="GD">Glaucoma Detection</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Skin</SelectLabel>
          <SelectItem value="SCD">Skin Cancer Detection</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
