/**
 * Marketing Layout
 */
import { getServerSession } from 'next-auth/next'

import { DefaultLayout } from '@/components/layouts/default-layout'
import { menu } from 'app/[locale]/(marketing)/menu'
import { serverUseTranslate } from '@/components/translate/translate-server'
import React from 'react'

export interface MarketingRootLayoutProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default async function MarketingRootLayout({
  children,
}: MarketingRootLayoutProps) {
  const session = await getServerSession()
  const isLoggedIn = Boolean(session)
  const T = await serverUseTranslate('ui.pages.authentication')

  const menuItems = await menu()

  return (
    <DefaultLayout menuItems={menuItems} isLoggedIn={isLoggedIn} T={T}>
      {children}
    </DefaultLayout>
  )
}
