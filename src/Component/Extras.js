import React from "react";
import Res from "../images/res.png";
import Dfy from "../images/dfy.png";
import Green from "../images/green.svg";
import Sign from "../images/sign.gif";
import Sec from "../images/sec.png";

const Extras = () => {
  return (
    <section className="container-2 extra">
      <div className="further-links">
        <p class="t">
          Need more pageviews, custom implementation and dedicated support?
        </p>
        <a href="">
          Click here to contact us about our custom Enterprise plans
        </a>
      </div>

      <div className="Free">
        <div>
          <img src={Dfy} alt="" className="icon" />
          <div class="res-desc">
            <p class="small-p">
              <strong>OptinMonster University ($1,997 value)</strong>
            </p>
            <p class="xsmall-p">
              Instant access to our library of expert courses, guides, video
              training and ebooks.
            </p>
          </div>
          <div class="stats-res">
            <i className="fas fa-check"></i>
            <p class="small-p">Included for Free</p>
          </div>
        </div>
        <div>
          <img src={Dfy} alt="" className="icon" />
          <div class="res-desc">
            <p class="small-p">
              <strong>OptinMonster University ($1,997 value)</strong>
            </p>
            <p class="xsmall-p">
              Instant access to our library of expert courses, guides, video
              training and ebooks.
            </p>
          </div>
          <div class="stats-res">
            <i className="fas fa-check"></i>
            <p class="small-p">Included for Free</p>
          </div>
        </div>
      </div>
      <div className="founder">
        <img src={Green} alt="" className="banner-img" />
        <div className="explain">
          <strong>MY 100% NO-RISK DOUBLE-GUARANTEE</strong>
          <p className="medium-p">
            If you don’t like OptinMonster over the next 14 days, I will happily
            refund 100% of your purchase. No questions asked.
          </p>
          <p className="convo">
            Let me tell you why I offer this guarantee to you
          </p>
          <p className="convo">
            First –<strong>the power of OptinMonster just works.</strong> I use
            OptinMonster everywhere on this site because it works so well, and I
            am certain it will work the same for your website too.
          </p>
          <p className="convo">
            Second – part of our core beliefs here at OptinMonster is that we
            put people first – ALWAYS – and we fight for your success.
          </p>
          <p className="convo">
            I believe it, the team believes it, and I’m confident you will
            believe it too.
          </p>
          <p className="convo">
            <strong>
              t’s simple: purchase OptinMonster, add it to your site, and if it
              doesn’t grow your leads, subscribers or sales, I’ll refund 100% of
              your purchase.
            </strong>
          </p>
          <p className="convo">
            This guarantee covers a full 14 days, and during that time, the team
            and I will do everything possible to help you succeed.
          </p>
          <p className="convo">
            Thanks, and I hope we get to be part of your growth story soon!
          </p>
          <p className="convo">Sincerely,</p>
          <img src={Sign} alt="" className="sign" />
          <p>Thomas Griffin</p>
          <p>Co-Founder and President, OptinMonster</p>
        </div>
      </div>
      <div className="security">
        <p className="small-app">
          All pricing is in USD. All renewals are at full price. You can change
          plans or cancel your account at any time.
        </p>
        <img src={Sec} alt="" className="icon-sec" />
      </div>
    </section>
  );
};

export default Extras;
