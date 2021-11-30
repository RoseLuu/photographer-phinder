import { FormControl, Select, MenuItem } from "@material-ui/core";

const SelectCategories = ({ selectedCategory, categories, onChange }) => {
  return (
    <>
      <FormControl className="formControl">
        <Select value={selectedCategory.id} onChange={onChange}>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SelectCategories;
