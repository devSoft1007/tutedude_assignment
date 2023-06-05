import React, { memo } from "react";
import peopleIcon from "/icons/people-icon.svg";
import rupeesIcon from '/icons/₹.svg'
import transferIcon from '/icons/transfer-icon.svg'
import purchaseIcon from '/icons/purchase-icon.svg'
import discountIcon from '/icons/discount-icon.svg'
import useMediaQuery from "../../utils/useMediaQuery";

const ReferEarn = ({ setToggle }) => {
    const isSmall = useMediaQuery("(max-width: 730px)")
  return (
    <>
      <h5 className="breadcrums">UI/UX {'>'} Refer & Earn </h5>
      <div className="refer-earn">
        <Card setToggle={setToggle} />
        <div>
          <h1>Your Referral Code </h1>
          <div className="refer-code">
            <p> EDCH54</p>
          </div>
        </div>
      </div>
      <h1 data-heading='How does'>How does it work ?</h1>
      <div className="list">
        <section>
          <div>
            <img src={peopleIcon} alt="" />
          </div>
          <h4>Invite your Friends</h4>
          <h4>Share the link tutedude.com with your friends</h4>
        </section>

        <section>
          <div>
            <img src={rupeesIcon} alt="" />
          </div>
          <h4>You get ₹ 200 as referral money</h4>
          <h4>On total purchase the friend makes, into your wallet</h4>
        </section>

        <section>
          <div>
            <img src={transferIcon} alt="" />
          </div>
          <h4>Transfer money from wallet</h4>
          <h4>
            When the wallet balance reaches ₹200 or more, you can withdraw it
          </h4>
        </section>

        <section>
          <div>
            <img src={purchaseIcon} alt="" />
          </div>
          <h4>Friend purchases any course</h4>
          <h4>Using your REFERRAL CODE in the payments page</h4>
        </section>

        <section>
          <div>
            <img src={discountIcon} alt="" />
          </div>
          <h4>Your Friend gets ₹ 200 Off </h4>
          <h4>
            On his overall fee on successful purchase using your referral code{" "}
          </h4>
        </section>
      </div>
      <div className="info">
        <h4>Friends Who Enrolled</h4>
        <h4>Terms & Conditions</h4>
      </div>
    </>
  );
};

export default ReferEarn;

const Card = memo(({setToggle}) => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div>
            <h5>Referral Earning</h5>
            <h3>₹ 2,500</h3>
          </div>

          <div>
            <h5>Total Referrals</h5>
            <h3>7</h3>
          </div>

          <div>
            <h5>Wallet Balance</h5>
            <h3>₹ 500</h3>
          </div>
        </div>
        <div>
          <button onClick={() => setToggle(p => !p)} className="btn-primary">Withdraw Balance</button>
        </div>
      </div>
    </>
  );
});
