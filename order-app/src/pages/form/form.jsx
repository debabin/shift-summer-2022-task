import React from "react";
import { Input } from "../../input/input";
import "./form.css"

export const FormPage = () => {
  const [formValues, setFormValues] = React.useState({ username: '', lastname: '', patronymic: '' })
  return (
    <div className="form-page">
      <div className="form-page-container">
        <div>
          Заявка на доставку
        </div>
        <div className="form-container">
          <div className="input-container">
            <Input value={formValues.username} placeholder="Имя" onChange={(event) => 
              setFormValues({...formValues, username: event.target.value})
             } />
          </div>
          <div className="input-container">
            <Input value={formValues.lastname} placeholder="Фамилия" onChange={(event) => 
              setFormValues({...formValues, lastname: event.target.value})
             } />
          </div>
          <div className="input-container">
            <Input value={formValues.patronymic} placeholder="Отчество" onChange={(event) => 
              setFormValues({...formValues, patronymic: event.target.value})
             } />
          </div>
          <div className="input-container">
            <Input placeholder="Дата рождения" type='date' />
          </div>
          <div>
            <button>
              Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  )

};