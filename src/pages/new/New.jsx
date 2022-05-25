import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box, TextField, IconButton, Typography, Button, Grid, MenuItem } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

export default function New({ data }) {

  const [imgUpload, setImgUpload] = useState('https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg')

  const Input = styled('input')({
    display: 'none',
  });

  const { title, fields, actionBtn } = data

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={imgUpload}
              alt='for choise'
            />
          </div>
          <div className="right">
            <Box
              component='form'
              autoComplete='off'
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                margin: "15px 20px",
                paddingLeft: '20px',
              }}
            >
              <label htmlFor="icon-button-file">
                <Input onChange={(e) => setImgUpload(e.target.value)} accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
                <Typography variant="body1" component="span">
                  Seleccionar Imagen
                </Typography>
              </label>

              <Grid container sx={{ marginBottom: "20px", gap: "20px" }}>
                <Grid item sm={12}>
                  {fields.map(field => {
                    const { type } = field
                    return field.isSelect ?
                      <TextField className={field.class} margin={field.margin} size={field.size} label={field.label} variant={field.style} select={field.isSelect || false} type={type} sx={{width:'100%'}}
                      >
                        {field.selectData.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      : <TextField className={field.class} margin={field.margin} size={field.size} label={field.label} variant={field.style} sx={{width:'100%'}} type={type}
                      />
                    
                  })}
                </Grid>
              </Grid>
              <div className="buttonContainer">
                {actionBtn.map(btn => (
                  <Button color={btn.color} variant={btn.variant}>
                    {btn.label}
                  </Button>
                ))}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
