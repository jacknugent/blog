import * as React from "react"
import css from "@emotion/css"

const calendarView = css`
  border-width: 0;
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`
const agendaView = css`
  border-width: 0;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`

const GoogleCalendar = () => (
  <>
    <iframe
      css={calendarView}
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23C0CA33&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
      width="100%"
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
    <iframe
      css={agendaView}
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23C0CA33&amp;ctz=America%2FNew_York&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA"
      width="100%"
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  </>
)

export default GoogleCalendar
