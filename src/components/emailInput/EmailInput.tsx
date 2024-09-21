import './EmailInput.css'

export default function EmailInput({size}:{size?: string}) {

    const formSubmit = (e:any)=>{
        e.preventDefault()
        const formulaire = new FormData(e.target)
        const email = formulaire.get("subscriber")
        console.log(email)
    }
    
    return size == 'big' ? (
        <form onSubmit={formSubmit} className='emailInput-big'>
            <input type="email" name="subscriber" placeholder='Enter your email...' required className='emailInput-big--input p'/>
                <button className='emailInput-big--button h5'>Subscribe</button>
        </form>
    ) : (
        <div>
            hello
        </div>
    )
}