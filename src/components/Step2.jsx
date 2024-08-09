import React from 'react';

const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      {formData.tipoPessoa === 'fisica' && (
        <>
          <div className="input-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="sobrenome">Sobrenome:</label>
            <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </div>
        </>
      )}
      {formData.tipoPessoa === 'juridica' && (
        <>
          <div className="input-group">
            <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
            <input type="text" id="nomeEmpresa" name="nomeEmpresa" value={formData.nomeEmpresa} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="cnpj">CNPJ:</label>
            <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
          </div>
        </>
      )}
      <div className="buttons">
        <button className="voltar" onClick={prevStep}>Voltar</button>
        <button onClick={nextStep}>Próximo</button>
      </div>
    </div>
  );
};

export default Step2;

