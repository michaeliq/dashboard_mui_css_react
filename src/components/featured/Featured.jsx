import './featured.scss'
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import { CircularProgress, Typography } from '@mui/material'

export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">
          Total Revenue
        </h1>
        <MoreVert />
      </div>
      <div className="bottom">
        <div className="circular-progress-cont">
          <Typography className="parcentage-circular" color='secondary' variant='body1' component='p'>
            70%
          </Typography>
          <CircularProgress
            value={100}
            variant="determinate"
            className='circular-prog-back' />
          <CircularProgress
            value={70}
            variant="determinate"
            color="secondary"
            className='circular-prog' />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima, esse at repudiandae aliquam ut sed sequi
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">
              Day
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              $14.56
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Week
            </div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              $14.56
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">
              Mount
            </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              $14.56
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
