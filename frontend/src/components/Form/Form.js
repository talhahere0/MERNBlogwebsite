import React,{useState} from 'react'
import useStyles from './styles'
import {TextField,Button,Typography,Paper} from '@material-ui/core'


import axios from 'axios'

const Form = () => {
    const classes = useStyles()
   const [title,settitle] = useState("")
   const [message,setmessage] = useState("")
   const [creator,setcreator] = useState("")
   const [tags,settags] = useState("")
   const [formData,setFormData] = useState("")

   const upload = (e)=>{
       setFormData(e.target.files[0])
   }

    const handleSubmit = (e) => {

        const data = new FormData()
        data.append('title',title)
        data.append('message',message)
        data.append('creator',creator)
        data.append('tags',tags)
        data.append('categoryImage',formData)
        
        axios.post("http://localhost:5000/api/category",data)
        e.preventDefault()
        settitle("")
        setmessage("")
        setcreator("")
        settags("")
        
        
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form onSubmit={handleSubmit} encType="multipart/form-data"  autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
                <Typography variant="h6" >Creating a Memory</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={creator} 
                 onChange={(event) =>{
                     setcreator(event.target.value)
                 }}
                />
                <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth
                value={title} 
                onChange={(event) =>{
                    settitle(event.target.value)
                }}
               />
                <TextField 
                name="message" 
                variant="outlined" 
                label="Message" 
                fullWidth
                value={message}
                onChange={(event) =>{
                    setmessage(event.target.value)
                }} 
               />
                <TextField 
                name="tags" 
                variant="outlined" 
                label="tags" 
                fullWidth
                value={tags}
                onChange={(event) =>{
                    settags(event.target.value)
                }} 
               />
                <div className={classes.fileInput}>
                    <input
                    type="file"
                    filename="image"
                    onChange={upload}
                    />

                </div>
                <Button 
                className={classes.buttonSubmit} 
                variant="contained" 
                color="primary" 
                size="large" 
                type="submit"
                fullWidth
                

                >Submit</Button>
                <Button 
                 
                variant="contained" 
                color="secondary" 
                size="small" 
                fullWidth
                onClick={clear}

                >Clear</Button>
            </form>

        </Paper>
    )
}

export default Form
