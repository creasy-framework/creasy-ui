import * as React from 'react';
import { FunctionComponent } from 'react';
import { AppliedFilter, Filter, FilterType } from './FilterChip';
import Select from '../Select/Select';
import Icons from '../../Graphic/Icons';
import IconButton from "../IconButton/IconButton";

interface Props {
  filters: Filter[];
  appliedFilters?: AppliedFilter[];
  pinnedFilters?: string[]
  onApplyFilter?: (appliedFilter: AppliedFilter) => void;
  onPinFilter?: (filterBy: string, state: boolean) => void;
}

interface FilterComponentProps {
  filter: Filter;
  appliedFilter?: AppliedFilter;
  onApply?: (appliedFilter: AppliedFilter) => void;
  showLabel?: boolean;
}

const SelectFilter: FunctionComponent<FilterComponentProps> = ({
  filter,
  appliedFilter,
  onApply,
  showLabel,
}) => {
  const { type, options = [], label, filterBy } = filter;
  return (
    <Select
      clearable={true}
      labelPlacement="top"
      options={options}
      label={showLabel ? label : ''}
      selectedValue={appliedFilter?.value}
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

export const FilterView: FunctionComponent<FilterComponentProps> = ({
  filter,
  appliedFilter,
  onApply,
  showLabel,
}) => {
  const FilterComponent = FilterComponentMap[filter.type];
  if (!FilterComponent) return null;
  return (
    <div className="creasy-smart-search-filters__filter">
      <FilterComponent showLabel={showLabel} filter={filter} appliedFilter={appliedFilter} onApply={onApply}/>
    </div>
  );
}

const Filters: FunctionComponent<Props> = (props) => {
  const { filters, appliedFilters = [], pinnedFilters = [], onApplyFilter, onPinFilter } = props;
  return (
    <div className="creasy-smart-search-filters" onClick={(e) => e.stopPropagation()}>
      { filters.map((filter) => {
        const FilterComponent = FilterComponentMap[filter.type];
        if (!FilterComponent) return null;
        const appliedFilter = appliedFilters.find(applied => filter.filterBy === applied.filterBy);
        const pinned = pinnedFilters.some(f => f === filter.filterBy);
        return (
          <div key={filter.filterBy} className="creasy-smart-search-filters__filter-wrapper">
            <FilterView showLabel filter={filter} appliedFilter={appliedFilter} onApply={onApplyFilter} />
            {
              filter.enablePin && (
                <IconButton size="s" className="creasy-smart-search-filters__filter-pin" onClick={() => onPinFilter?.(filter.filterBy, !pinned)}>
                  { pinned ? <Icons.Unpin/> : <Icons.Pin/>}
                </IconButton>
              )
            }
          </div>
        );
      })}
    </div>
  )
};

export default Filters;
