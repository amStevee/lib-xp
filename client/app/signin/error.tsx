"use client"
import { Button } from '@mui/material'
import React from 'react'

export default function ErrorBoundary({error, reset}:{error: Error, reset(): void}) {
  return (
    <div>{error.message} <Button onClick={reset}>try again</Button></div>
  )
}
