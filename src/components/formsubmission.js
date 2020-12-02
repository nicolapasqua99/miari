import React, { useEffect } from 'react';
import firebase from "gatsby-plugin-firebase"
import { useForm } from "react-hook-form"
import styled from 'styled-components'

import { device } from "../css/device"
import { navigate } from 'gatsby';

const StyledForm = styled.form`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    @media ${ device.tablet } {
      width: 80%;
      padding: 0 10% 0 10%;
      & div, & #sendbtn{
          width: 100% !IMPORTANT;
          margin-left: 0 !IMPORTANT;
      }
      & h1{
          width: 100%;
          text-align: center;
          font-size: 2.5rem !IMPORTANT;
      }
    }
    @media ${ device.mobileL } {
      width: 100%;
      padding: 0;
    }
    & div{
        position: relative;
        width: 80%;
        height: 6rem;
        margin: 5rem 10% 0% 10%;
    }
    & div.textarea{
        height: 20rem;
    }
    & #sendbtn{
        position: relative;
        width: 80%;
        height: 12rem;
        margin: 5rem 10% 10% 10%;
    }
    & div h1{
        text-align: center;
        font-size: 3rem;
        transform: translateY(-7px);
    }
    & label{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    & label span{
        position: absolute;
        top: calc(50% - 1.5rem);
        left: 110%;
        width: 100%;
    }
    & label h3{
        position: absolute;
        top: -22px;
        left: 3rem;
        width: auto;
        height: auto;
        background-color: white;
        padding: 0 1rem 0 1rem;
        z-index: 2;
        transition: all 0.4s ease;
        color: rgba(0, 0, 0, 1);
        font-size: 1.5rem;
    }
    & input:placeholder-shown + h3, & textarea:placeholder-shown + h3{
        top: -.5rem !IMPORTANT;
        color: rgba(0, 0, 0, 0.4);
        z-index: 0 !IMPORTANT;
        font-size: 2rem;
    }
    & label input:focus + h3, & label textarea:focus + h3{
        top: -22px !IMPORTANT;
        z-index: 2 !IMPORTANT;
        color: rgba(0, 0, 0, 1);
        font-size: 1.5rem;
    }
    & input, & textarea{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1; 
        background-color: transparent;
        border: .25rem solid rgba(0, 0, 0, 1) !IMPORTANT;
        outline: none;
        border-radius: .5rem;
        text-indent: 3rem;
        font-size: 2rem;
    }
    & textarea{
        width: calc(100% - 6rem);
        height: calc(100% - 3rem);
        padding: 1.5rem 3rem 1.5rem 3rem;
        text-indent: 0;
    }
    & input:placeholder-shown, & textarea:placeholder-shown{
        border: .25rem solid rgba(0, 0, 0, 0.4) !IMPORTANT;
    }
    & input:focus, & textarea:focus{
        border: .25rem solid rgba(0, 0, 0, 1) !IMPORTANT;
    }
    & input::placeholder, & textarea::placeholder{
        color: transparent;
        user-select: none;
    }
    & #sendbtn input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background-color: transparent;
        color: black;
        transition: all 0.6s ease;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 800;
        text-transform: uppercase;
    }
    & #sendbtn:hover input{
        color: white;
    }
    & #sendbtn:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: black;
        transition: all 0.6s ease;
        border-radius: .5rem;
    }
    & #sendbtn:hover:before{
        width: 100%;
    }
`

export default function Form() {
    const { register, handleSubmit, errors } = useForm();
    const [dati, setDati] = React.useState('');
    const [stato, setStato] = React.useState(false);
    const [destination, setDestination] = React.useState('');

    const onSubmit = data => {
        setDati( data );
        setDestination('submission inviata!');
        setStato( true );
    };

    useEffect(() => {
        if(stato){
            const data = {
                nome: dati.nome,
                cognome: dati.cognome,
                paese: dati.paese,
                email: dati.email,
                bio: dati.bio,
                web: dati.sitoweb,
                instagram: dati.instagram,
                titolo: dati.titolo,
                descrizione: dati.desc,
                link: dati.link
            };
            console.log(data);
                    
            firebase
                .firestore()
                .collection('submission')
                .add(data);

            navigate('/sentform/', { state: { destination } })
        }
    }, [stato, dati, destination])


    return (
    <>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nome">
                    <input placeholder="Nome e cognome *" name="nome" ref={register({ required: false })} />
                    <h3>Nome *</h3>
                    {errors.nome && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="cognome">
                    <input placeholder="Cognome *" name="cognome" ref={register({ required: false })} />
                    <h3>Cognome *</h3>
                    {errors.cognome && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="paese">
                    <input placeholder="Paese *" name="paese" ref={register({ required: false })} />
                    <h3>Paese *</h3>
                    {errors.paese && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="email">
                    <input placeholder="E-mail *" name="email" ref={register({ required: false })} />
                    <h3>E-mail *</h3>
                    {errors.email && <span>This field is required</span>}
                </label>
            </div>
            <div className="textarea">
                <label htmlFor="bio">
                    <textarea placeholder="Bio *" name="bio" ref={register({ required: false })} />
                    <h3>Bio *</h3>
                    {errors.bio && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="sitoweb">
                    <input placeholder="Sito web" name="sitoweb" ref={register({ required: false })} />
                    <h3>Sito Web</h3>
                    {errors.sitoweb && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="instagram">
                    <input placeholder="Instagram" name="instagram" ref={register({ required: false })} />
                    <h3>Instagram</h3>
                    {errors.instagram && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="titolo">
                    <input placeholder="Titolo progetto" name="titolo" ref={register({ required: false })} />
                    <h3>Titolo progetto *</h3>
                    {errors.titolo && <span>This field is required</span>}
                </label>
            </div>
            <div className="textarea">
                <label htmlFor="desc">
                    <textarea placeholder="Descrizione" name="desc" ref={register({ required: false })} />
                    <h3>Descrizione *</h3>
                    {errors.desc && <span>This field is required</span>}
                </label>
            </div>
            <div>
                <label htmlFor="link">
                    <input placeholder="Link We-Transfer *" name="link" ref={register({ required: false })} />
                    <h3>Link We-Transfer *</h3>
                    {errors.link && <span>This field is required</span>}
                </label>
            </div>
            <div id="sendbtn">
                <input type="submit" />
            </div>
        </StyledForm>
    </>
  );
}