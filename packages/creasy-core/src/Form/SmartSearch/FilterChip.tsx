import * as React from 'react';
import { FunctionComponent } from 'react';
import { Badge } from '../../Messaging';
import Icons from '../../Graphic/Icons';
import classNames from 'classnames';

export enum FilterType {
  KEYWORD = 'KEYWORD',
  SINGLE_SELECT = 'SINGLE_SELECT',
}

export interface Filter {
  label: string;
  filterBy: string;
  type: FilterType;
  options?: any[];
  enablePin?: boolean;
}

export interface AppliedFilter extends Filter {
  value: any;
  valueLabel: string;
}

interface Props {
  onClose?: () => void;
  className?: string;
  filter: Filter | AppliedFilter;
}

const FilterChip: FunctionComponent<Props> = ({
  onClose,
  filter,
  children,
  className
}) => {
  return (
    <div id={filter.filterBy} className="creasy-filter-chip">
      <Badge className={classNames('creasy-filter-chip__badge', className)} right={
          onClose && (
          <span onClick={onClose}>
            <Icons.Close className="creasy-filter-chip__close-btn"/>
          </span>
        )
      }>{children}</Badge>
    </div>
  )
};

export default FilterChip;
