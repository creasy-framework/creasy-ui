import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';

import LineItemTable from '../LineItemTable';
import Input from '../../../Form/Input/Input';

jest.mock('shortid', () => ({
  generate: () => '123',
}));

describe('LineItemTable', () => {
  let wrapper: ShallowWrapper;

  const data = [
    { id: '1', name: 'CHENG LI', team: 'Customer Service', date: '02/03/2020' },
    { id: '2', name: 'SUN WEI', team: 'Customer Service', date: '02/03/2020' },
    { id: '3', name: 'LIPING ZHAO', team: 'Customer Service', date: '02/03/2020' },
  ];

  const columnsConfig = [
    { columnName: 'Name' },
    { columnName: 'Team' },
    { columnName: 'On boarding date', style: { width: 200 } },
  ];

  beforeAll(() => {
    wrapper = shallow(
      <LineItemTable
        columnsConfig={columnsConfig}
        data={data}
      >
        {(index, data) => (
          <LineItemTable.Row columnsConfig={columnsConfig}>
            <LineItemTable.Item>
              <Input value={data.name}/>
            </LineItemTable.Item>
            <LineItemTable.Item>
              <Input value={data.team}/>
            </LineItemTable.Item>
            <LineItemTable.Item>
              <Input value={data.date}/>
            </LineItemTable.Item>
          </LineItemTable.Row>
        )}
      </LineItemTable>,
    );
  });

  it('should render properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
