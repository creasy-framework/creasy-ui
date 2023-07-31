import * as React from 'react';
import { FunctionComponent } from 'react';
import { AppliedFilter, Filter, FilterType } from './FilterChip';
import Select from "../Select/Select";

interface Props {
  filters: Filter[];
  appliedFilters?: AppliedFilter[];
  onApplyFilter?: (appliedFilter: AppliedFilter) => void;
}

interface FilterComponentProps {
  filter: Filter;
  value: any;
  onApply?: (appliedFilter: AppliedFilter) => void;
}

const SelectFilter: FunctionComponent<FilterComponentProps> = ({
  filter,
  value,
  onApply,
}) => {
  const { type, options = [], label, filterBy } = filter;
  return (
    <Select
      clearable={true}
      labelPlacement="top"
      options={options}
      label={label}
      selectedValue={value}
      onChange={(selectedValue) => {
        const valueLabel = options.find((o) => o.value === selectedValue)?.label;
        onApply && onApply({
          filterBy,
          type,
          options,
          label,
          value: selectedValue,
          valueLabel,
        })
      }}
    />
  );
}

const FilterComponentMap = {
  [FilterType.SINGLE_SELECT]: SelectFilter,
}

const Filters: FunctionComponent<Props> = (props) => {
  const { filters, appliedFilters = [], onApplyFilter } = props;
  return (
    <div className="creasy-smart-search-filters" onClick={(e) => e.stopPropagation()}>
      { filters.map((filter) => {
        const FilterComponent = FilterComponentMap[filter.type];
        if (!FilterComponent) return null;
        const appliedFilter = appliedFilters.find(applied => filter.filterBy === applied.filterBy)?.value
        return (
          <div key={filter.filterBy} className="creasy-smart-search-filters__filter">
            <FilterComponent filter={filter} value={appliedFilter} onApply={onApplyFilter}/>
          </div>
        );
      })}
    </div>
  )
};

export default Filters;
