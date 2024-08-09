import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import '../index.css';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipoPessoa: '',
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    nomeEmpresa: '',
    cnpj: '',
    emailEmpresa: '',
    senhaEmpresa: '',
    confirmarSenhaEmpresa: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="logo-container">
        <img src="./assets/logo.png" alt="logo Vereda" className="logo"/>
      </div>
      <h2>Cadastro</h2>
      <form id="multi-step-form">
        {step === 1 && (
          <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
        )}
        {step === 2 && (
          <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        )}
        {step === 3 && (
          <Step3 formData={formData} handleChange={handleChange} prevStep={prevStep} />
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
