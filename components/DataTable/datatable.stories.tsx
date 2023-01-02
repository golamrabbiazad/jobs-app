import { ComponentMeta, Story } from '@storybook/react'
import { DataTable, DataTableProps } from './DataTable'
import { testData } from '@testing/testData'

export default {
  title: 'components/DataTable',
  component: DataTable,
} as ComponentMeta<typeof DataTable>

const data = testData.jobs.slice(0, 6)

const columns: DataTableProps<typeof data[0]>['columns'] = [
  {
    title: 'Position',
    field: 'position',
  },
  {
    title: 'Department',
    field: 'department',
  },
  {
    title: 'Location',
    field: 'location',
  },
]

const Template: Story<DataTableProps<typeof data[0]>> = (props) => (
  <DataTable {...props} />
)

export const Default = Template.bind({})

Default.args = {
  columns,
  data: [],
}

export const Loading = Template.bind({})

Loading.args = {
  columns,
  data: [],
  isLoading: true,
}
