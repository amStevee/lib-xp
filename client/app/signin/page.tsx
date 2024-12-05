'use client'
import axios from '@/lib/axios_config';
import {Box, Button, FormControl, FormHelperText, Input, InputLabel, Typography} from '@mui/material'
import {ChangeEvent, useRef, useState } from "react";

interface FormSate {
  email: string | null; password:string | null;
}

export default function Home() {
  const [formState, setFormState] = useState<FormSate>({email: null, password:null})
  const formRef = useRef<HTMLFormElement | null>(null);

  function changeFormState(e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value} = e.currentTarget;
    setFormState(prev => ({...prev, [name]: value}));
  }

  async function handleSignin(formState:FormSate) {
    console.log(formState)
    await axios.post('/oauth2/signin', JSON.stringify(formState))
  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <form ref={formRef} className="flex flex-col gap-4 border-rose-950 border-2 p-8">
        <FormControl required>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" name='email' aria-describedby="my-helper-text" onChange={e => changeFormState(e)} />
            <FormHelperText id="my-helper-text">We&aps;ll never share your email.</FormHelperText>
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
