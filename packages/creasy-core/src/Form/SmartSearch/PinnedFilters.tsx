import * as React from 'react';
import { FunctionComponent } from 'react';
import { AppliedFilter, Filter } from './FilterChip';
import Tooltip from '../../Messaging/Tooltip/Tooltip';
import { FilterView } from './Filters';
import Button from '../Button/Button';

interface Props {
  filters?: Filter[];
  pinnedFilters?: string[];
  appliedFilters?: AppliedFilter[];
  onApplyFilter?: (appliedFilter: AppliedFilter) => void;
}

export const PinnedFilters: FunctionComponent<Props> = ({
  filters = [],
  pinnedFilters = [],
  appliedFilters= [],
  onApplyFilter,
}) => {
  if (filters.length === 0 || pinnedFilters.length === 0) return null;
  return (
    <div className="creasy-smart-search-pins">
      {pinnedFilters.map((pinnedFilter) => {
        const appliedFilter = appliedFilters.find((filter) => filter.filterBy === pinnedFilter);
        const filter = filters.find((filter) => filter.filterBy === pinnedFilter);
        if (filter) {
          return (
            <Tooltip
              className="creasy-smart-search__popover"
              key={`${filter.filterBy}`}
              content={<FilterView showLabel={false} filter={filter} appliedFilter={appliedFilter} onApply={onApplyFilter}/>}
              showArrow={false}
              triggers={['click']}
              placement="bottom"
              align={{points: ['tl', 'bl']}}
            >
              <Button className="creasy-smart-search__pinned-filter" type="text" color="primary">
                {filter.label}
              </Button>
            </Tooltip>
          )
        }
        return null
      })}
    </div>
  );
}

export default PinnedFilters;
