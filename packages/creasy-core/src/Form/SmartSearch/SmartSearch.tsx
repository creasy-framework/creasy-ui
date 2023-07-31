import * as React from 'react';
import { FunctionComponent, ChangeEvent, useState, KeyboardEvent, useRef, useLayoutEffect, SyntheticEvent } from 'react';
import Input from '../Input/Input';
import FilterChip, { AppliedFilter, Filter, FilterType } from './FilterChip';
import Button from '../Button/Button';
import Tooltip from '../../Messaging/Tooltip/Tooltip';
import Filters from './Filters';
import Drawer from '../../Interactive/Drawer/Drawer';

interface Props {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  onSearch?: (filters: AppliedFilter[]) => void;
  searchButtonText?: string;
  keywordText?: string;
  placeholder?: string;
  filterButtonText?: string;
  filters: Filter[];
}

const SmartSearch: FunctionComponent<Props> = (props) => {
  const containerRef = useRef(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFilter[]>([]);
  const [filterDropdownWidth, setFilterDropdownWidth] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');
  const {
    onSearch,
    searchButtonText = 'Search',
    placeholder = '',
    keywordText = 'Keyword',
    filterButtonText = 'More Filters',
    filters = [],
    ...otherProps
  } = props;

  useLayoutEffect(() => {
    document.addEventListener('click', () => setFilterDropdownWidth(0));
  }, [])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword) {
      setAppliedFilters([...appliedFilters, {
        label: keywordText, filterBy: 'keyword', type: FilterType.KEYWORD, value: keyword, valueLabel: keyword
      }]);
      setKeyword('');
    } else if (e.key === 'Backspace' && !keyword) {
      handleDeleteAppliedFilter(Math.max(appliedFilters.length - 2, 0));
    }
  };

  const handleKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleDeleteAppliedFilter = (deletingIndex: number) => {
    setAppliedFilters(appliedFilters.filter((_, i) => i !== deletingIndex));
  };

  const handleShowFilters = (e: SyntheticEvent) => {
    if (!filterDropdownWidth && containerRef) {
      // @ts-ignore
      const newWidth = containerRef.current.getBoundingClientRect().width
      setFilterDropdownWidth(newWidth)
    } else {
      setFilterDropdownWidth(0)
    }
    e.stopPropagation();
  }

  const handleApplyFilters = (appliedFilter: AppliedFilter) => {
    const exists = appliedFilters.some((f) =>  f.filterBy !=='keyword' && f.filterBy === appliedFilter.filterBy);
    if (exists) {
      if (appliedFilter?.value) {
        setAppliedFilters(appliedFilters.map((f) => f.filterBy === appliedFilter.filterBy ? appliedFilter : f));
      } else {
        setAppliedFilters(appliedFilters.filter((f) => f.filterBy !== appliedFilter.filterBy));
      }
    } else {
      setAppliedFilters([...appliedFilters, appliedFilter]);
    }
  }

  const handleSearch = () => {
    if (keyword) {
      const newFilters = [...appliedFilters, {
        label: keywordText, filterBy: 'keyword', type: FilterType.KEYWORD, value: keyword, valueLabel: keyword
      }];
      setAppliedFilters(newFilters);
      setKeyword('');
      onSearch?.(newFilters)
    } else {
      onSearch?.(appliedFilters)
    }
  }

  return (
    <div className="creasy-smart-search" ref={containerRef}>
      <Tooltip
        className="creasy-smart-search__popover"
        placement="bottom"
        visible={filterDropdownWidth > 0}
        showArrow={false}
        triggers={[]}
        content={<Filters filters={filters} appliedFilters={appliedFilters} onApplyFilter={handleApplyFilters}/>}
        overlayStyle={{width: filterDropdownWidth}}
      >
        <Input {...otherProps} right={
          <div className="creasy-smart-search__right">
            <Button onClick={handleSearch}
                    color="primary"
                    className="creasy-smart-search__inline-btn creasy-smart-search__search-btn">
              {searchButtonText}
            </Button>
            {
              filters.length > 0 && (
                <Button color="primary" size="l" type="text" className="creasy-smart-search__inline-btn" onClick={handleShowFilters}>
                  {filterButtonText}
                </Button>
              )
            }
          </div>
        } renderInput={(inputProps) => (
          <div className="creasy-smart-search__wrapper">
            {
              appliedFilters.map((filter, i) =>
                <FilterChip key={`${filter.type}_${filter.value}_${i}`} filter={filter} onClose={() => handleDeleteAppliedFilter(i)}/>)
            }
            <span className="creasy-smart-search__input">
              <input {...inputProps} placeholder={placeholder} value={keyword} onKeyDown={handleKeyDown} onChange={handleKeywordChange}/>
            </span>
          </div>
        )}/>
        <div className="creasy-smart-search__bottom">
          <Button onClick={handleSearch} color="primary">
            {searchButtonText}
          </Button>
          {
            filters.length > 0 && (
              <Button color="primary" size="l" type="text" onClick={() => setShowDrawer(true)}>
                {filterButtonText}
              </Button>
            )
          }
        </div>
      </Tooltip>
      <Drawer header={<h3>{filterButtonText}</h3>} isShow={showDrawer} onClose={() => setShowDrawer(false)}>
        <Filters filters={filters} appliedFilters={appliedFilters} onApplyFilter={handleApplyFilters}/>
      </Drawer>
    </div>

  )
};

export default SmartSearch;
