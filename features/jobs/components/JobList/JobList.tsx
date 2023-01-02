import { Box } from '@chakra-ui/react'
import { DataTable, DataTableProps } from '@components/DataTable'
import { Link } from '@components/Link'
import { Job } from '@features/jobs/types'

type JobListType = 'dashboard' | 'public'

export type JobsListProps = {
  type: JobListType
  jobs: Job[]
  isLoading?: boolean
  organizationId: string
}

function getTableColumns(organizationId: string, type: JobListType) {
  const tableColumns: DataTableProps<Job>['columns'] = [
    { title: 'Position', field: 'position' },
    { title: 'Department', field: 'department' },
    { title: 'Location', field: 'location' },
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }) => {
        return (
          <Link
            href={
              type === 'public'
                ? `/organizations/${organizationId}/jobs/${id}`
                : `/dashboard/jobs/${id}`
            }
          >
            View
          </Link>
        )
      },
    },
  ]

  return tableColumns
}

export function JobList({
  type,
  jobs,
  isLoading,
  organizationId,
}: JobsListProps) {
  const tableColumns = getTableColumns(organizationId, type)

  return (
    <Box data-testid="jobs-list">
      <DataTable
        isLoading={isLoading || false}
        data={jobs}
        columns={tableColumns}
      />
    </Box>
  )
}
