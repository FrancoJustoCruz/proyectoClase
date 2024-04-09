import React, { useState } from 'react'
import { Input } from '../Input'

export const Form = ({setContactList , contactList}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


     const handleSubmit =  (e)=>{
        e.preventDefault()
 
       
        if(name.trim() != ''  && email.trim() != '' && phone.trim() != ''){
            let id = contactList[contactList.length - 1]?.id + 1 || 1
            const newContact = {id: id,  name: name, email: email, phone: phone};
       
            setContactList([...contactList, newContact])
        }

     }  

    return (
        <form id="contactForm" onSubmit={handleSubmit}>

            <Input   type='text' id='name' name='name' label="Nombre"   value={name} onChange={setName}/>
            <Input  type='email' id='email' name='email' label="Correo"   value={email} onChange={setEmail}/>
            <Input  type='text' id='phone' name='phone' label="Teléfono"  value={phone} onChange={setPhone} />

            <button type="submit">Agregar</button>
        </form>
    )
}
 