import React, { useContext, useState } from "react";
import { racingContext } from "../../context/Context";
import Form from "../form-elements/Form";
import Titlecard from "../form-elements/Titlecard";
import Button from "../form-elements/Button";
import Box from "../setup-elements/Box";
import InputSetup from "../setup-elements/InputSetup";
import Titlebox from "../setup-elements/Titlebox";
import BorderedBox from "../setup-elements/BorderedBox";
import TitleArea from "../setup-elements/TitleArea";

function SetupForm(props) {
  const { axiosCall, user, editData, editId } = useContext(racingContext);

  const [referencia, setReferencia] = useState('');
  const [fecha, setFecha] = useState('')
  const [marcaF, setMarcaF] = useState("");
  const [modeloF, setModeloF] = useState("");
  const [medidasF, setMedidasF] = useState("");
  const [marcaR, setMarcaR] = useState("");
  const [modeloR, setModeloR] = useState("");
  const [medidasR, setMedidasR] = useState("");
  const [presionFrioF, setPresionFrioF] = useState("");
  const [presionCalienteF, setPresionCalienteF] = useState("");
  const [presionFrioR, setPresionFrioR] = useState("");
  const [presionCalienteR, setPresionCalienteR] = useState("");
  const [precargaF, setPrecargaF] = useState("");
  const [aceiteF, setAceiteF] = useState("");
  const [durezaMuelleF, setDurezaMuelleF] = useState("");
  const [precargaR, setPrecargaR] = useState("");
  const [aceiteR, setAceiteR] = useState("");
  const [durezaMuelleR, setDurezaMuelleR] = useState("");
  const [pino, setPino] = useState("");
  const [plato, setPlato] = useState("");

  let body = {
    vehiculo: editId[0],
    referencia,
    fecha,
    neumaticos: [
      {
        delantero: {
          marcaF,
          modeloF,
          medidasF,
          presionFrioF,
          presionCalienteF,
        },
        trasero: {
          marcaR,
          modeloR,
          medidasR,
          presionFrioR,
          presionCalienteR,
        },
      },
    ],
    suspension: [
      {
        delantera: {
          precargaF,
          aceiteF,
          durezaMuelleF,
        },
        trasera: {
          precargaR,
          aceiteR,
          durezaMuelleR,
        },
      },
    ],

    desarrollo: {
      pino,
      plato,
    },
  };

  const newSetup = () => {
    axiosCall("/user/myvehicles/setup", body, "post").then((data) => {
      user[0].vehiculos = data.data.vehicles;
      console.log(user[0]);
    });
  };

  const editSetup = () => {
    axiosCall("/user/myvehicles/editsetup", body, "put").then((data) =>
      console.log(data)
    );
  };
  return (
    <div className=" bg-white max-w-screen-xl flex flex-col mx-auto border-black border-2 my-8 rounded-lg">
      <Form
        className={"bg-white p-2"}
        onSubmit={{
          edit: editSetup,
          new: newSetup,
        }}
      >
        <Titlecard className="uppercase flex">hoja de configuracion</Titlecard>
        <BorderedBox>
          <Titlebox>datos</Titlebox>
          <Box className='flex flex-row justify-evenly'>
          <InputSetup label="Referencia" name='Ej: Alcarrás seco' onChange={setReferencia} ></InputSetup>
          <InputSetup label="fecha" type='date' onChange={setFecha} className='m-1 text-lg bg-slate-300 text-center rounded-lg px-3'></InputSetup>
          </Box>
        </BorderedBox>
        <BorderedBox>
          <Titlebox>neumaticos</Titlebox>
          <Box className={" flex flex-row justify-evenly "}>
            <Box>
              <TitleArea>delantero</TitleArea>
              <InputSetup label={"Marca"} onChange={setMarcaF} />
              <InputSetup label={"Modelo"} onChange={setModeloF} />
              <InputSetup label={"Medidas"} onChange={setMedidasF} />
              <InputSetup label={"Presion frio"} onChange={setPresionFrioF} />
              <InputSetup label={"Presion caliente"} onChange={setPresionCalienteF} />
            </Box>
            <Box>
              <TitleArea>trasero</TitleArea>
              <InputSetup label={"Marca"} onChange={setMarcaR}/>
              <InputSetup label={"Modelo"} onChange={setModeloR}/>
              <InputSetup label={"Medidas"} onChange={setMedidasR} />
              <InputSetup label={"Presion frio"} onChange={setPresionFrioR} />
              <InputSetup label={"Presion caliente"} onChange={setPresionCalienteR} />
            </Box>
          </Box>
        </BorderedBox>
        <BorderedBox>
          <Titlebox>suspension</Titlebox>
          <Box className={"flex flex-row justify-evenly"}>
            <Box>
              <TitleArea>delantera</TitleArea>
              <InputSetup label={"Precarga"} onChange={setPrecargaF} />
              <InputSetup label={"Aceite"} onChange={setAceiteF} />
              <InputSetup label={"Dureza muelle"} onChange={setDurezaMuelleF} />
            </Box>
            <Box>
              <TitleArea>trasera</TitleArea>
              <InputSetup label={"Precarga"} onChange={setPrecargaR} />
              <InputSetup label={"Aceite"} onChange={setAceiteR} />
              <InputSetup label={"Dureza muelle"} onChange={setDurezaMuelleR} />
            </Box>
          </Box>
        </BorderedBox>
        <BorderedBox className={""}>
          <Box>
            <Titlebox
              className={
                "text-4xl uppercase flex justify-center font-extrabold pt-2 pb-10"
              }
            >
              desarrollo
            </Titlebox>
            <Box className="flex flex-row mx-auto">
              <InputSetup label={"Piño"} onChange={setPino}/>
              <InputSetup label={"Plato"} onChange={setPlato} />
            </Box>
          </Box>
        </BorderedBox>
        <Button>GUARDAR</Button>
      </Form>
    </div>
  );
}

export default SetupForm;
