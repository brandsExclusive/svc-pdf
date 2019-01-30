import React from 'react';

import style from './style'

const logoId = 'https://res.cloudinary.com/lux-group/image/upload/f_auto,fl_progressive,q_auto:eco,c_scale,w_1200/luxuryescapes/luxuryescapes-logo'
const bowId = 'https://res.cloudinary.com/lux-group/image/upload/f_auto,fl_progressive,q_auto:eco/luxuryescapes/gift-wrap-large'

export default ({ personalisation, code, expiry, amount}) => (
  <div className="root" style={style.root}>
    <div style={style.body}>
      <picture style={style.picture}>
        <img style={style.bow} src={bowId} />
      </picture>
      <div style={style.section}>
        <picture style={style.picture}>
          <img style={style.logo} src={logoId} />
        </picture>
      </div>
      <div style={style.section}>
        <div style={style.amount}>{amount}</div>
        <div style={style.subHeading}>GIFT VOUCHER</div>
      </div>
      <div style={style.personalisation}>
        <div style={style.leftColumn}>
          <div style={style.personalisationSection}>To</div>
        </div>
        <div style={style.rightColumn}>
          <div style={style.line}>
            <div>{personalisation.to}</div>
          </div>
        </div>
        <div style={style.messsage}>
          <div style={style.leftColumn}>
            <div style={style.personalisationSection}>Message</div>
          </div>
          <div style={style.rightColumn}>
            <div style={style.line}>
              <div>{personalisation.message}</div>
            </div>
            <div style={style.line} />
            <div style={style.line} />
          </div>
        </div>
        <div style={style.leftColumn}>
          <div style={style.personalisationSection}>From</div>
        </div>
        <div style={style.rightColumn}>
          <div style={style.line}>
            <div>{personalisation.from}</div>
          </div>
        </div>
      </div>
      <div style={style.footer}>
        <div style={style.leftColumn}>
          <div style={style.footerSection}>Voucher Code:</div>
          <div style={style.footerText}>{code}</div>
          <div style={style.footerSection}>Expiry Date:</div>
          <div style={style.footerText}>{expiry}</div>
        </div>
        <div style={style.rightColumn}>
          <div style={style.footerSection}>How To Redeem:</div>
          <div style={style.footerText}>Become a member at LuxuryEscapes.com to choose your perfect
                escape. At checkout, enter your unique voucher code and your account will be credited with the value of this gift card. The amount will be deducted from the final cost of your chosen holiday. Gift card valid for three years from purchase and must be used by the expiry date.
          </div>
        </div>
      </div>
    </div>
  </div>
);