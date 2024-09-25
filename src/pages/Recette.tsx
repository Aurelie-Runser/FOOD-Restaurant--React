// import { useState } from 'react'
import {useParams} from "react-router-dom"

export default function Recette() {
    const {id} = useParams()

  return <>
    <h1>Page de la recette {id}</h1>
  </>
}