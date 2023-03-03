import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import React from 'react'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import EventNoteIcon from '@mui/icons-material/EventNote'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 220

const items = [
  {
    name: 'Dashboard',
    icon: <EqualizerIcon />,
  },
  {
    name: 'Tasks',
    icon: <EventNoteIcon />,
  },
  {
    name: 'Profile',
    icon: <PersonIcon />,
  },
]

export default function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left">
      <Toolbar />
      <Divider />
      <List className="flex flex-col justify-between h-full pb-0">
        <div>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </div>
        <div className="bottom-0">
          <Divider />
          <ListItem key={items.length} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Sign out" />
            </ListItemButton>
          </ListItem>
        </div>
      </List>
    </Drawer>
  )
}
