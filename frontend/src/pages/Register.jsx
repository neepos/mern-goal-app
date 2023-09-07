import React from "react";
import { useState, useEffect } from "react";
import {FaUser} from 'react-icons/fa'

function Register() {
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  password2: ''
})

const { name, email, password, password2 } = formData;



  return <>
    <section className="heading">
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className="form">
      <form>
        input.
      </form>
    </section>
  </>;
}

export default Register;
