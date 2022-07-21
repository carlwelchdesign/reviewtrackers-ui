import * as React from 'react'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { blue, grey } from '@mui/material/colors'
import styled from 'styled-components'

type Props = {
  handleCommentMenu: any
}

const CommentMenu = ({handleCommentMenu}: Props) => {
  const [currentMenuItem, setCurrentMenuItem] = React.useState<null | HTMLElement>(null)
  const open = Boolean(currentMenuItem)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setCurrentMenuItem(event.currentTarget)
  }

  const handleSelect = (event: React.MouseEvent<HTMLElement>) => {
    handleCommentMenu(event.currentTarget.outerText)
  }

  const handleClose = () => {
    setCurrentMenuItem(null)
  }

  return (
    <React.Fragment>
      <MenuBox sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '50'}}>
        <Tooltip title="Comment Menu" placement="top">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: blue[800]}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreHorizIcon sx={{ fontSize: 16, color: grey[800]}}/>
          </IconButton>
        </Tooltip>
      </MenuBox>
      <Menu
        anchorEl={currentMenuItem}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleSelect}>
          Update
        </MenuItem>
        <MenuItem onClick={handleSelect}>
          Delete
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default CommentMenu

const MenuBox = styled(Box)`
  width: 24px;
  position: absolute;
  right:40px;
`
