import './EmailInput.css'

export default function EmailInput({size}:{size: string|undefined}) {
    
    return size == 'big' ? (
        <div className='emailInput-big'>
            <input type="email" placeholder='Enter your email...' className='emailInput-big--input p'/>
                <button className='emailInput-big--button h5'>Subscribe</button>
        </div>
    ) : (
        <div>
            hello
        </div>
    )
}