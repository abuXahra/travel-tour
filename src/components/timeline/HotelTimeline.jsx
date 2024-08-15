
import React from 'react'
import { TimelineWrapper } from './Timeline.style'

export default function HotelTimeline({currentStep}) {
  return (
    <TimelineWrapper currentStep={"0 0 3px 3px #FF6805"} spanIndex={currentStep}>
                <span>
                    <div>
                      1
                    </div>
                    Search Hotel
                    <hr />
                </span>
                <span>
                    <div>
                      2
                    </div>
                    Guests Info
                    <hr />
                </span>
                <span>
                    <div>
                      3
                    </div>
                    Trip Customization
                    <hr />
                </span>
                <span>
                    <div>
                      4 
                    </div>
                    Overview & Payment
                </span>
            </TimelineWrapper>
  )
}
