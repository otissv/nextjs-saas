/**
 * Users Page
 */
import * as React from 'react'

import { paginateUsersAction } from '@/features/app-users/users.actions'
import { PageHeader } from '@/components/page-header'
import { deleteUserByIdAction } from '@/features/app-users/users.actions'
import { getHeaders } from '@/lib/getHeaders'
import { Pagination } from '@/components/pagination'
import { UsersTable } from '@/features/app-users/components/uses.table'
import { decodeSearchParams } from '@/lib/querystring'
import { env } from '@/config/env'
import { translateServer } from '@/components/translate-server'
import { Search } from '@/components/search'

const { pageLimit } = env()

export interface UsersPageProps {
  searchParams: Record<string, any>
}

export default async function UsersPage({ searchParams }: UsersPageProps) {
  const t = await translateServer('ui.pages.users')
  const queryParams = decodeSearchParams(searchParams)

  const { data, totalPages } = await paginateUsersAction(queryParams)

  const breadcrumbs = [{ label: 'Home', crumb: '/' }, { label: 'Users' }]
  const deleteAction = async (id: number) => {
    'use server'
    const { pathname } = getHeaders()
    return deleteUserByIdAction(id, pathname)
  }

  return (
    <>
      <PageHeader heading="Users" breadcrumbs={breadcrumbs} />

      <Search
        columns={['email', 'firstName', 'lastName']}
        searchParams={searchParams}
        className="mb-6"
        // value={where?.[0]?.[1]}
      />

      {data.length ? (
        <>
          <UsersTable
            total={totalPages}
            data={data}
            baseUrl="/admin/users"
            onDelete={deleteAction}
            {...queryParams}
            limit={queryParams.limit || pageLimit}
          />

          <Pagination
            {...queryParams}
            total={totalPages}
            limit={queryParams.limit || pageLimit}
          />
        </>
      ) : (
        t('list.notFound')
      )}
    </>
  )
}
