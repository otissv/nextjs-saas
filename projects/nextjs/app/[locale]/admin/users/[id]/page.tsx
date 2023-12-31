/**
 * User Page
 */

import * as React from 'react'
import { isDev } from 'c-ufunc/libs/isDev'

import { User } from '@/features/app-users/users.types'
import { translateServer } from '@/components/translate/translate-server'
import {
  deleteUserByIdAction,
  selectUserByIdAction,
} from '@/features/app-users/users.actions'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { TypographyH2 } from '@/components/typography/h2.typography'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/divider'
import { DeleteButton } from '@/components/buttons/delete-button'
import { getHeaders } from '@/lib/getHeaders'
import { UserForm } from '@/features/app-users/components/user-form'
import { PageHeader } from '@/components/page/page-header'
import { Maybe } from '@/components/maybe'
import { serverContext } from '@/app/context-server-only'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export interface UserPageProps {
  params: { id: User['id'] }
}

export default async function UserPage({ params: { id } }: UserPageProps) {
  const { data } = await selectUserByIdAction({ id })
  const locale = serverContext().localeService.get()
  const t = await translateServer(locale, 'ui')

  const breadcrumbs = [
    { label: t('pages.home.breadcrumb.label'), crumb: '/' },
    { label: t('pages.users.breadcrumb.label'), crumb: 'admin/users' },
    { label: t('pages.user.edit.breadcrumb.label') },
  ]

  const user = data[0]

  const fullName = user
    ? `${data[0]?.firstName} ${data[0]?.lastName}`
    : t('pages.user.heading')

  const handleDelete = async () => {
    'use server'

    const { pathname } = getHeaders()
    const { error } = await deleteUserByIdAction(id, pathname)

    if (error && isDev()) console.error(error)
    return !error
  }

  //TODO: use correct companyId

  return (
    <React.Fragment>
      <div className="grid grid-cols-[40px_auto] gap-x-4 grid-row-2">
        <Maybe check={user?.imageUrl}>
          <Avatar className="inline-block mr-3">
            <AvatarImage
              src={user?.imageUrl}
              alt={`${user?.firstName}, ${user?.lastName}`}
            />
            <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
          </Avatar>
        </Maybe>
        <PageHeader heading={fullName} breadcrumbs={breadcrumbs} />
      </div>

      <Link
        href={`/admin/companies/${'companyId'}/addresses`}
        className={`
        inline-flex
        border border-input 
        hover:bg-accent 
        py-2 
        px-4
        font-medium
        text-sm
        rounded-md
        h-11
        justify-center
        items-center
        mb-6
        `}
      >
        {t('pages.tenantCompany.heading')}
        <ChevronRight className="inline-block ml-2" />
      </Link>

      <Divider className="mt-2 mb-6" />

      {user ? <UserForm name="users" data={data} /> : t('misc.notFound')}

      <TypographyH2>Change Password</TypographyH2>

      <Divider />

      {/* TODO: if credentials */}
      <Input placeholder="Old Password" />
      <Input placeholder="New Password" />
      <Input placeholder="Conform password" />
      <Button>Change password</Button>

      <Divider className="mt-8 mb-6" />

      <DeleteButton
        cancel={t('pages.user.notifications.delete.alert.buttons.cancel')}
        description={t('pages.user.notifications.delete.alert.description')}
        ok={t('pages.user.notifications.delete.alert.buttons.ok')}
        title={t('pages.user.notifications.delete.alert.title')}
        onAction={handleDelete}
        error={{
          title: t('pages.user.notifications.save.error.title'),
          description: t('pages.user.notifications.save.error.description'),
        }}
        success={{
          title: t('pages.user.notifications.delete.success.title'),
          description: t('pages.user.notifications.delete.success.description'),
        }}
      >
        {t('page.toolbar.delete.content')}
      </DeleteButton>
    </React.Fragment>
  )
}
