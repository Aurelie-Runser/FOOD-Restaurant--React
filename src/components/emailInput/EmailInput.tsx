import Icon from '../icons/Icon'
import './EmailInputBig.css'
import './EmailInputSmall.css'

export default function EmailInput({size}:{size?: string}) {

    const formSubmit = (e:any)=>{
        e.preventDefault()
        const formulaire = new FormData(e.target)
        const email = formulaire.get("subscriber")
        console.log(email)
    }
    
    return size == 'big' ? (
        <form onSubmit={formSubmit} className='emailInput-big'>
            <input type="email" name="subscriber" placeholder='Enter your email...' required className='p emailInput-big--input'/>
                <button className='emailInput-big--button h5'>Subscribe</button>
        </form>
    ) : (
        <form onSubmit={formSubmit} className='emailInput-small'>
            <input type="email" name="subscriber" placeholder='Enter your email...' required className='p-small emailInput-small--input'/>
            <Icon name="chevron" size="medium" color="orangeWhite" />
        </form>
    )
}