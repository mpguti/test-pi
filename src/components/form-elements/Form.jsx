import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { racingContext } from "../../context/Context";
import Button from "./Button";
import Input from "./InputForms";
import Select from "./Select";
import Titlecard from "./Titlecard";

function Form({onSubmit, className, children}) {

const {editData} = useContext(racingContext);

  return (
   
    <form
      className={className ? className : " bg-white rounded-lg w-1/2 flex flex-col justify-center  border-2 border-slate-800"}
        onSubmit={(e) => {
          e.preventDefault(),
           editData[0] ? onSubmit.edit(editData[0]._id) : onSubmit.new()
          editData[1]('');
          }}
      >
        {children}

        </form>
        
     
  )
}

export default Form