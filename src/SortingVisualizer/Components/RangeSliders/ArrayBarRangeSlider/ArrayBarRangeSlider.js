import React from 'react';
import "./ArrayBarRangeSlider.css";
import { Slider} from '@mui/material';

const START_NUMBER_RANGE = 5
const END_NUMBER_RANGE = 100

export default function ArrayBarRangeSlider(props){
    return (
        <div className="individual-slider-container">
          <p className='slider-text'>Array Size</p>
          <Slider
            value={props.numberOfArrayBars}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={START_NUMBER_RANGE}
            max={END_NUMBER_RANGE}
            onChangeCommitted={props.onChangeArrayBarRangeSlider}
        />
        </div>
      );
}