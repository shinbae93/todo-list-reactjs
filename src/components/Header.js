import { Button, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <div className="text-center h-52 w-full bg-slate-50">
      <Typography variant="h4" gutterBottom className="pt-16">
        Todo List
      </Typography>
      <Button variant="contained" size="small">
        Create Task
      </Button>
    </div>
  )
}
