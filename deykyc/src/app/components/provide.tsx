// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'

export function Provides({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}