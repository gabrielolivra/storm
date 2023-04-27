import './LandingPage.css'

function LandingPage(){
    const img1 ='https://storz.pages.dev/static/media/fragments.e09cc6a00e141b3ce338.gif'
    const img2 ='https://storz.pages.dev/static/media/security.406ba440a0f4c48385bb.gif'
    const img3 ='https://storz.pages.dev/static/media/map.50cf368f2a647622a854.png'      
 

    return(
        
<div>
    <section className='first-component'>
      <div className="title">
        <h1>The <span>Future</span> of File Sharing is here</h1>
        <p>Store unlimited files and share it seamlessly with anyone</p>
        <div className="container-buttons">
            <button className='user-now'>User Now</button>
            <button className='join-us'>Join Us</button>
        </div>
        </div>  
        <img src={img1} alt=""/>
    </section> 
    <section className='two-component'>
        <img src={img2} alt="" />
        <div className='two-container'>
            <h1><span>Privacy</span> First. Completely <span>Secured.</span></h1>
            <p>Storz uses AES-256 bit password encryption to protect your data from hackers and malicious agents. Storz will keep your data safe behind trillions of lock combinations.</p>

        </div>
    </section>
    <section className='three-component'>
        <img src={img1} alt="" />
        <div className='three-container'>
            <h1><span>Decentralized.</span> Super <span>Fast </span> & <span>Reliable. </span></h1>
            <p>Storm uses InterPlanetary File System (IPFS), a high-performance, distributed server network protocol. Your data is chopped into smaller chunks of itself, then hashed and stored.</p>
        </div>

    </section>
    <section className='finally-component'>
        <div className='finally-container'>
            <h1>Join Our Community!</h1>
            <p>Help us on our quest to make this product even better.</p>
            <button>Join Us</button>
        </div>
        <img src={img3} alt="" />

    </section>
</div>
    )
}



export default LandingPage