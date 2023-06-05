import React from 'react'
import goBack from '/icons/goBack-icon.svg'

const ReferEarn2 = ({ setToggle }) => {
  return (
    <>
    <div>
      <h5 className="breadcrums">UI/UX {'>'} Refer & Earn {'>'} Friends Referred </h5>
      <div onClick={() => setToggle(false)} className='go-back'>
        <img src={goBack} />
        <h5>go back</h5>
      </div>
      <div className='refer-earn2'>
        <section>
            <h4>Your Referral Code </h4>
            <div>
                <h4>EDCH54</h4>
            </div>
        </section>

        <section>
            <h5>Wallet Balance </h5>
            <div>
                <h4>₹ 500</h4>
            </div>
        </section>
      </div>
      <div className='course'>
        <h2>Friends who enrolled(3)</h2>
        <div className='course-card-container'>
            <div className='course-card'>
            <section style={{display:'flex',justifyContent:'space-between'}}>
                <h4>Dhiraj Saxsena</h4>
                <h5>14 Sep, 2022</h5>
            </section>
            <section>
                <h5>Courses Enrolled(6)</h5>
                <div style={{display:'flex', gap: '.7rem', flexWrap:'wrap', paddingLeft: '.7rem'}}>
                    <div className='badge'>
                    <h5>UI/UX</h5>
                    </div>

                    <div className='badge'>
                    <h5>Photoshop</h5>
                    </div>

                    <div className='badge'>
                    <h5>Illustrator</h5>
                    </div>
                    <div className='badge'>
                    <h5>Python</h5>
                    </div>
                    <div className='badge'>
                    <h5>MERN</h5>
                    </div>
                    <div className='badge'>
                    <h5>Java</h5>
                    </div>
                </div>
            </section>

            <section style={{display:'flex', alignItems: 'center', gap:'1rem', marginBottom: 'unset'}}>
                <h5>Referral Amount</h5>
                <h1> ₹185 </h1>
            </section>
            </div>
            <div className='course-card'>
            <section style={{display:'flex',justifyContent:'space-between'}}>
                <h4>Subhash Mishra</h4>
                <h5>15 Sep, 2022</h5>
            </section>
            <section>
                <h5>Courses Enrolled(23)</h5>
                <div style={{display:'flex', gap: '.7rem', flexWrap:'wrap', paddingLeft: '.7rem'}}>
                    <div className='badge'>
                    <h5>UI/UX</h5>
                    </div>

                    <div className='badge'>
                    <h5>Photoshop</h5>
                    </div>

                    <div className='badge'>
                    <h5>Illustrator</h5>
                    </div>
                    <div className='badge'>
                    <h5>Python</h5>
                    </div>
                    <div className='badge'>
                    <h5>MERN</h5>
                    </div>
                    <div className='badge'>
                    <h5>Java</h5>
                    </div>

                    <div className='badge'>
                    <h5>C++</h5>
                    </div>
                </div>
            </section>

            <section style={{display:'flex', alignItems: 'center', gap:'1rem', marginBottom: 'unset'}}>
                <h5>Referral Amount</h5>
                <h1> ₹485 </h1>
            </section>
            </div>
            <div className='course-card'>
            <section style={{display:'flex',justifyContent:'space-between'}}>
                <h4>Prafull Kumar</h4>
                <h5>16 Sep, 2022</h5>
            </section>
            <section>
                <h5>Courses Enrolled(23)</h5>
                <div style={{display:'flex', gap: '.7rem', flexWrap:'wrap', paddingLeft: '.7rem'}}>
                    <div className='badge'>
                    <h5>UI/UX</h5>
                    </div>

                    <div className='badge'>
                    <h5>Photoshop</h5>
                    </div>

                    <div className='badge'>
                    <h5>Illustrator</h5>
                    </div>
                    <div className='badge'>
                    <h5>Python</h5>
                    </div>
                    <div className='badge'>
                    <h5>MERN</h5>
                    </div>
                    <div className='badge'>
                    <h5>Java</h5>
                    </div>
                    <div className='badge'>
                    <h5>C++</h5>
                    </div>
                </div>
            </section>

            <section style={{display:'flex', alignItems: 'center', gap:'1rem', marginBottom: 'unset'}}>
                <h5>Referral Amount</h5>
                <h1> ₹485 </h1>
            </section>
            </div>
           
        </div>
      </div>
      <div className='info'>
      <h4>Terms & Conditions</h4>
      </div>
    </div>
    </>
  )
}

export default ReferEarn2