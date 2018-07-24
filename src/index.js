import React, { Component } from 'react'
import styled from 'react-emotion'
import { blue, grey_medium } from '@time-with/colors'
import { 
  phone,   phone_min,   phone_max,
  phablet, phablet_min, phablet_max,
  tablet,  tablet_min,  tablet_max,
  desktop, desktop_min, desktop_max,
  hd,      hd_min,      hd_max
} from '@time-with/media-queries'

export const Headline = styled.h1({
  fontFamily: 'proxima-soft',
  color: grey_medium,
  fontSize: '64px',
  marginBottom: '10px',
  lineHeight: '110%',
  [hd]:      { fontSize: '64px' },
  [desktop]: { fontSize: '50px' },
  [tablet]:  { fontSize: '42px' },
  [phablet]: { fontSize: '36px' },
  [phone]:   { fontSize: '32px' },
})

export const Headline2 = styled.h2({
  fontFamily: 'proxima-soft',
  color: grey_medium,
  fontSize: '48px',
  margin: '0',
  lineHeight: '110%',
  [hd]:      { fontSize: '48px' },
  [desktop]: { fontSize: '42px' },
  [tablet]:  { fontSize: '38px' },
  [phablet]: { fontSize: '34px' },
  [phone]:   { fontSize: '28px' },
})

export const Headline3 = styled.h3({
  fontFamily: 'proxima-soft',
  color: grey_medium,
  fontSize: '38px',
  margin: '0',
  lineHeight: '110%',
  [hd]:      { fontSize: '38px' },
  [desktop]: { fontSize: '32px' },
  [tablet]:  { fontSize: '24px' },
  [phablet]: { fontSize: '20px' },
  [phone]:   { fontSize: '18px' },
})

export const Headline4 = styled.h4({
  fontFamily: 'proxima-soft',
  color: grey_medium,
  fontSize: '32px',
  margin: '0',
  lineHeight: '110%',
  [hd]:      { fontSize: '32px' },
  [desktop]: { fontSize: '28px' },
  [tablet]:  { fontSize: '24px' },
  [phablet]: { fontSize: '18px' },
  [phone]:   { fontSize: '16px' },
})

export const Headline5 = styled.h5({
  fontFamily: 'proxima-soft',
  color: grey_medium,
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '120%',
  [hd]:      { fontSize: '28px' },
  [desktop]: { fontSize: '24px' },
  [tablet]:  { fontSize: '20px' },
  [phablet]: { fontSize: '16px' },
  [phone]:   { fontSize: '14px' },
})

export const Headline6 = styled.h6({
  fontFamily: 'proxima-soft',
  color: grey_medium,
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0',
  lineHeight: '120%',
  [hd]:      { fontSize: '20px' },
  [desktop]: { fontSize: '18px' },
  [tablet]:  { fontSize: '16px' },
  [phablet]: { fontSize: '14px' },
  [phone]:   { fontSize: '12px' },
})

export const Subline = styled.h2({
  fontFamily: 'proxima-soft',
  fontSize: '36px',
  marginBottom: '10px',
  lineHeight: '38px',
  color: grey_medium,
  [hd]:      { fontSize: '36px', marginBottom: '10px', lineHeight: '38px' },
  [desktop]: { fontSize: '34px', marginBottom: '9px',  lineHeight: '36px' },
  [tablet]:  { fontSize: '32px', marginBottom: '8px',  lineHeight: '34px' },
  [phablet]: { fontSize: '30px', marginBottom: '8px',  lineHeight: '32px' },
  [phone]:   { fontSize: '24px', marginBottom: '8px',  lineHeight: '30px' },
})

export const SublineSmall = styled.h2({
  fontFamily: 'proxima-soft',
  fontSize: '36px',
  marginBottom: '10px',
  lineHeight: '38px',
  color: grey_medium,
  [hd]:      { fontSize: '26px', marginBottom: '10px', lineHeight: '30px' },
  [desktop]: { fontSize: '26px', marginBottom: '9px',  lineHeight: '30px' },
  [tablet]:  { fontSize: '24px', marginBottom: '8px',  lineHeight: '30px' },
  [phablet]: { fontSize: '24px', marginBottom: '8px',  lineHeight: '30px' },
  [phone]:   { fontSize: '24px', marginBottom: '8px',  lineHeight: '30px' },
})

export const Paragraph = styled.p({
  fontFamily: 'proxima-soft',
  fontSize: '20px',
  lineHeight: '160%',
  marginBottom: '20px',
  color: grey_medium,
  [hd]:      { fontSize: '20px', marginBottom: '20px' },
  [desktop]: { fontSize: '19px', marginBottom: '18px' },
  [tablet]:  { fontSize: '18px', marginBottom: '17px' },
  [phablet]: { fontSize: '17px', marginBottom: '16px' },
  [phone]:   { fontSize: '16px', marginBottom: '15px' },
})

export const ParagraphLarge = styled.p({
  fontFamily: 'proxima-soft',
  fontSize: '26px',
  lineHeight: '160%',
  marginBottom: '20px',
  color: grey_medium,
  [hd]:      { fontSize: '26px', marginBottom: '20px' },
  [desktop]: { fontSize: '24px', marginBottom: '18px' },
  [tablet]:  { fontSize: '22px', marginBottom: '17px' },
  [phablet]: { fontSize: '20px', marginBottom: '16px' },
  [phone]:   { fontSize: '18px', marginBottom: '15px' },
})

export const Li_underlined = styled.li({
  cursor: 'pointer',
  paddingTop: '13px',
  borderBottom: '1px solid #E8E8E8',
  ':last-child': {
    border: 'none',
  },
})

export const Tag = styled.div({
  border: '2px solid ' + blue,
  color: blue,
  display: 'inline-block',
  fontWeight: 'bold',
  fontSize: '16px',
  verticalAlign: 'top',
  padding: '6px 12px',
  cursor: 'pointer',
  background: 'transparent',
  borderRadius: '5px',
  marginRight: '6px',
  ':hover': {
    color: 'white',
    background: blue,
  },
  ':last-child': {
    marginRight: '0',
  },
  [phablet_max]: {
    fontSize: '14px',
  }
})


export class Separator extends Component {
  render() {
    let style = { marginTop: '50px', marginBottom: '30px', width: '100%' }
    if (this.props.short) { style = { marginTop: '10px', marginBottom: '30px', width: '100%' }}
    if (this.props.noMargin) { style = { marginTop: '0', marginBottom: '0', width: '100%' }}
    return (
      <hr style={style}/>
    )
  }
}

export class Paragraphs extends Component {
  render() {
    let n = 0
    const paragraph_els = this.props.paragraphs.map(paragraph_text => (
      <Paragraph key={n++}> { paragraph_text } </Paragraph>
    ))
    return (
      <div> { paragraph_els } </div>
    )
  }
}


// inline-block div
export const IBDiv = styled.div({
  display: 'inline-block',
  verticalAlign: 'top'
})
// becomes 100% width on phone
export const IBDivPhone = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  [phablet_max]: { display: 'block', width: '100%' },
})
// becomes 100% width on phablet
export const IBDivPhablet = styled.div({
  display: 'inline-block',
  verticalAlign: 'top',
  [tablet_max]: { display: 'block', width: '100%' },
})


export const DivHdMin      = styled.div({ [desktop_max]: { display: 'none' } })
export const DivDesktopMin = styled.div({ [tablet_max]:  { display: 'none' } })
export const DivTabletMin  = styled.div({ [phablet_max]: { display: 'none' } })
export const DivPhabletMin = styled.div({ [phone_max]:   { display: 'none' } })

export const DivDesktopMax = styled.div({ [hd_min]:      { display: 'none' } })
export const DivPhabletMax = styled.div({ [tablet_min]:  { display: 'none' } })
export const DivTabletMax  = styled.div({ [desktop_min]: { display: 'none' } })

export const DivHdOnly = styled.div({
  [hd]:       { display: 'block' },
  [desktop]:  { display: 'none' },
  [tablet]:   { display: 'none' },
  [phablet]:  { display: 'none' },
  [phone]:    { display: 'none' },
})
export const DivDesktopOnly = styled.div({
  [hd]:       { display: 'none' },
  [desktop]:  { display: 'block' },
  [tablet]:   { display: 'none' },
  [phablet]:  { display: 'none' },
  [phone]:    { display: 'none' },
})
export const DivTabletOnly = styled.div({
  [hd]:       { display: 'none' },
  [desktop]:  { display: 'none' },
  [tablet]:   { display: 'block' },
  [phablet]:  { display: 'none' },
  [phone]:    { display: 'none' },
})
export const DivPhabletOnly = styled.div({
  [hd]:       { display: 'none' },
  [desktop]:  { display: 'none' },
  [tablet]:   { display: 'none' },
  [phablet]:  { display: 'block' },
  [phone]:    { display: 'none' },
})
export const DivPhoneOnly = styled.div({
  [hd]:       { display: 'none' },
  [desktop]:  { display: 'none' },
  [tablet]:   { display: 'none' },
  [phablet]:  { display: 'none' },
  [phone]:    { display: 'block' },
})