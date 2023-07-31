import * as React from 'react';
import { FunctionComponent } from 'react';
import { Badge } from '../../Messaging';
import Icons from '../../Graphic/Icons';

export enum FilterType {
  KEYWORD = 'KEYWORD',
  SINGLE_SELECT = 'SINGLE_SELECT',
}

export interface Filter {
  label: string;
  filterBy: string;
  type: FilterType;
  options?: any[];
}

export interface AppliedFilter extends Filter {
  value: any;
  valueLabel: string;
}

interface Props {
  onClose?: () => void;
  filter: AppliedFilter
}

const FilterChip: FunctionComponent<Props> = ({
  onClose,
  filter,
}) => {
  return (
    <div className="creasy-filter-chip">
      <Badge className="creasy-filter-chip__badge" color="primary" right={
        <span onClick={onClose}>
          <Icons.Close className="creasy-filter-chip__close-btn"/>
        </span>
      }>{filter.valueLabel}</Badge>
    </div>
  )
};

export default FilterChip;
