'use client'
import * as React from 'react'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import { Form, Submit } from '@/components/form'
import {
  FormConfig,
  createFormSchema,
} from '@/components/forms/createFormSchema'
import { signupValidator } from '@/features/app-auth/auth.validators'
import { translateClient, useTranslate } from '@/components/translate-client'
import { useErrorNotify } from '@/components/notify'
import { isDev } from '@/lib/utils'

export function SignupForm({ providers }: { providers: string[] }) {
  const T = translateClient('ui.pages.authentication')
  const t = useTranslate('ui.pages.authentication')
  const errorNotify = useErrorNotify()

  const config: FormConfig = {
    username: {
      label: 'Username',
      attributes: { placeholder: t('form.fields.username.placeholder') },
      classNames: {
        label: 'sr-only',
      },
      error: t('form.fields.username.error'),
    },
    email: {
      label: 'Email',
      type: 'email',
      attributes: { placeholder: t('form.fields.email.placeholder') },
      classNames: {
        label: 'sr-only',
      },
      error: t('form.fields.email.error'),
    },
    password: {
      label: 'Password',
      type: 'password',
      attributes: { placeholder: t('form.fields.password.placeholder') },
      classNames: {
        label: 'sr-only',
      },
      error: t('form.fields.password.error'),
    },
  }

  const onSubmit = async ({ error, values }: Submit) => {
    try {
      if (error) throw error

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          username: values?.username,
          email: values?.email,
          password: values?.password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())

      if (response.error) throw error

      await signIn('credentials', {
        username: values?.username,
        password: values?.password,
        callbackUrl: '/',
      })
    } catch (error) {
      if (isDev()) {
        console.error('Error')
      }

      errorNotify({
        title: 'Something went wrong',
        description: 'There was a problem with your request.',
      })
    }

    signIn('credentials', {
      username: values?.username,
      password: values?.password,
      callbackUrl: '/',
    })
  }

  const schema = createFormSchema(signupValidator, config)

  const form: Record<string, any> = {
    credentials: () => (
      <div className="grid gap-2">
        <Form
          id="signup"
          className="grid gap-1"
          schema={schema}
          validator={signupValidator}
          submit={onSubmit}
        >
          <Button className="mt-2">
            <T>form.button.content</T>
          </Button>
        </Form>

        {providers.length > 0 && (
          <div className="relative flex justify-center text-xs uppercase my-5">
            <span className="bg-background px-2 text-muted-foreground ">
              <T>continueWith</T>
            </span>
          </div>
        )}
      </div>
    ),
    google: () => (
      <Button
        onClick={() => signIn('google')}
        className="w-72 mb-2 inline-block"
      >
        <T>providers.google</T>
      </Button>
    ),
    facebook: () => (
      <Button onClick={() => signIn('facebook')} className="w-72">
        <T>providers.facebook</T>
      </Button>
    ),
    github: () => (
      <Button onClick={() => signIn('github')} className="w-72">
        <T>providers.github</T>
      </Button>
    ),
  }

  return (
    <>
      {providers.map((provider) => (
        <React.Fragment key={provider}>{form[provider]()}</React.Fragment>
      ))}
    </>
  )
}
SignupForm.displayName = 'SignupForm'