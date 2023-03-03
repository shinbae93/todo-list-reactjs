import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  return (
    <>
      <div className="text-center h-52 w-full bg-slate-50">
        <Typography variant="h4" gutterBottom className="pt-16">
          Todo List
        </Typography>
        <Button variant="contained" size="small">
          Create Task
        </Button>
      </div>
      <Box className="w-full mb-5">
        <Typography variant="h6" className="pl-6 pt-4">
          All Tasks
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={0} className="py-4">
          {tasks.length &&
            tasks.map((task, index) => (
              <Grid item xs={3} key={index}>
                <TodoCard task={task} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}
