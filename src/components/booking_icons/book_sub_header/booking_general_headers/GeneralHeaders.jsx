import React from 'react'
import { ContentSubHeader } from '../BookingHeaderContent.style'
import BookingIcons from '../../book_icon/BookingIcons'
import { useLocation, useNavigate } from 'react-router-dom'
import { GeneralHeaderItems } from '../../../../data/object/GeneralHeaderItems';

export default function GeneralHeaders({backgroundColor, displayInMobile, gapInMobile, textColor}) {
    
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

     // Filter out the "Flight" item if the current path is "/flight-booking"
  const filteredItems = GeneralHeaderItems.filter(item => 
    // !(item.title === 'Flight' && currentPath === '/flight-booking')
    
    !(currentPath === item.onClickFunc) //Hide the Item when on the page
  );

    // Reorder GeneralHeaderItems to make the current path item appear first
  const orderedItems = [...filteredItems].sort((a, b) => {
    if (a.onClickFunc === currentPath) return -1;
    if (b.onClickFunc === currentPath) return 1;
    return 0;
  });

  
  return (
    <ContentSubHeader bgColor={backgroundColor} disp={displayInMobile} gapItems={gapInMobile}>
    <div>
                {
        orderedItems.map((item)=>(
            <BookingIcons
              key={item.title}
              title={item.title}
              onClickFunc={()=>navigate(item.onClickFunc)}
              Icon={item.Icon}
              headerBg={item.bgColor}
              bottomBorder={item.border}
              textColor={textColor}
        />
        ))
      } 
    </div>

   </ContentSubHeader>
  )
}
