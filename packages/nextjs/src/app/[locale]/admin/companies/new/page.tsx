/**
 *  New Company Page
 */

import React from 'react'
import { PageHeader } from '@/components/page/page-header'
import { translateServer } from '@/components/translate/translate-server'
import { Divider } from '@/components/divider'

import { CompanyForm } from '@/features/tenant-companies/components/tenant-company.form'

export interface CompanyPageProps {}

export default async function CompanyPage({}: CompanyPageProps) {
  const t = await translateServer('ui.pages')

  const breadcrumbs = [
    { label: t('home.breadcrumb.label'), crumb: '/' },
    { label: t('companies.breadcrumb.label'), crumb: 'admin/companies' },
    { label: t('company.new.breadcrumb.label') },
  ]

  const data = [
    {
      name: '',
      email: '',
      phone: '',
      website: '',
    },
  ]

  return (
    <>
      <PageHeader
        heading={t('company.new.heading')}
        breadcrumbs={breadcrumbs}
      />

      <Divider className="my-6" />
      <CompanyForm name="company" data={data} />
    </>
  )
}