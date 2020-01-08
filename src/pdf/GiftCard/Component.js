import React from 'react';

import style from './style';

const bannerId =
  'https://images.luxuryescapes.com/lux-group/image/upload/q_auto:eco,c_scale,w_1200/le-gift-card-banner_lgdnvh';

const redeemInstructions =
  'Become a member at LuxuryEscapes.com to choose your perfect escape. At checkout, enter your unique voucher code and your account will be credited with the value of this gift card. The amount will be deducted from the final cost of your chosen holiday. Gift card valid for three years from purchase and must be used by the expiry date.';

const Component = ({ personalisation, code, expiry, amount }) => (
  <div className="root" style={style.root}>
    <div style={style.body}>
      <picture>
        <img
          style={style.banner}
          src={bannerId}
          alt="Luxury Escapes Logo"
        />
      </picture>
      <div style={style.section}>
        <div style={style.amount}>{amount}</div>
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
        <div style={style.message}>
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
        <div>
          <div style={style.leftColumn}>
            <div style={style.footerSection}>Voucher Code</div>
          </div>
          <div style={style.rightColumn}>
            <div style={style.footerText}>{code}</div>
          </div>
        </div>

        <div>
          <div style={style.leftColumn}>
            <div style={style.footerSection}>Expiry Date</div>
          </div>
          <div style={style.rightColumn}>
            <div style={style.footerText}>{expiry}</div>
          </div>
        </div>

        <div>
          <div style={style.leftColumn}>
            <div style={style.footerSection}>How To Redeem:</div>
          </div>
          <div style={style.rightColumn}>
            <div style={style.footerTextRedeem}>{redeemInstructions}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Component;
