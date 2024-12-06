'use client'
import axios from '@/lib/axios_config';
import {Button, FormControl, FormHelperText, Input, InputLabel} from '@mui/material'
import {ChangeEvent, useRef, useState } from "react";

interface FormState {
  email: string | null; password:string | null;
}

export default function Home() {
  const [formState, setFormState] = useState<FormState>({email: null, password:null})
  const formRef = useRef<HTMLFormElement | null>(null);

  function changeFormState(e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value} = e.currentTarget;
    setFormState(prev => ({...prev, [name]: value}));
  }

  async function handleSignin(formState:FormState) {
    console.log(formState)
    try {
      await axios.post('/oauth2/signin', JSON.stringify(formState))
    } catch (error:unknown) {
      throw new Error(`${(error as Error).message}`);
    }
  }


  return (
    // there is something wrong with the top marging/padding while rendring
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center mt-40 min-h-screen p-8 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)] ">
      <form ref={formRef} className="flex flex-col gap-4 border-rose-950 border-2 p-8">
        <FormControl required>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" name='email' aria-describedby="my-helper-text" onChange={e => changeFormState(e)} />
            <FormHelperText id="my-helper-text">We will never share your email.</FormHelperText>
        </FormControl>
        <FormControl required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name='password' aria-describedby="my-helper-text" type="password" onChange={e => changeFormState(e)} />
            <FormHelperText id="my-helper-text">include non text characters to improve security.</FormHelperText>
        </FormControl>

        <Button sx={{backgroundColor: 'ThreeDFace'}} onClick={() => handleSignin(formState)} >login</Button>
      </form>
    </div>

  );
}
