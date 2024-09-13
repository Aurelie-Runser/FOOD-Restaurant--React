import { ReactNode } from 'react';
import './Title.css'

export default function Title({children, subTitle}:{ children: ReactNode, subTitle: string }) {
  return (
    <section className='title'>
      <h2 className='p-small subTitle'>{ subTitle }</h2>
      <h3>{ children }</h3>
    </section>
  )
}