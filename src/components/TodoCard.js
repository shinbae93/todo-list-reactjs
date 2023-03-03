import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Container } from '@mui/system'
import React from 'react'

export default function TodoCard({ task }) {
  return (
    <Container>
      <Card
        sx={{ width: 280 }}
        className="border-t-4 border-blue-400"
        variant="elevation"
        elevation={3}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography variant="body1" component="div">
              Lizard
            </Typography>
          }
          subheader={
            <Typography
              variant="caption"
              component="div"
              color="text.secondary">
              <AccessTimeIcon className="text-base align-top mr-1" />
              20/02/2023
            </Typography>
          }
          className="pb-0"
        />
        <CardContent>
          <Typography variant="body2">
            {`${'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica ABCA SDAS DASDA SDASD ASDASD'
              .repeat(task)
              .slice(0, 200)} ${task > 2 ? '...' : ''}`}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
