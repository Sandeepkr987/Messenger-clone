import {Card, CardContent, Typography } from '@material-ui/core';
import React, {forwardRef} from 'react'
import './Message.css'

const Message = forwardRef(({message, username}, ref) => {

const isthisUser = username === message.username;
//if itsthisUser then message__user is the class
  return (
      <div ref={ref} className={`message ${isthisUser && 'message__user'}`}>
        <Card className={isthisUser ? 'message__userCard' : 'message__guestCard'}>
            <CardContent>
                <Typography color='white' variant='h5' component='h2'>
                {!isthisUser && `${message.username}: `} {message.message}
                </Typography>
            </CardContent>
        </Card>
            </div>
  )
})

export default Message;