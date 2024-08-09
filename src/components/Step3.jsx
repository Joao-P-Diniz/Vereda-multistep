import React from 'react';

const Step3 = ({ formData, handleChange, prevStep }) => {
  return (
    <div>
      {formData.tipoPessoa === 'fisica' && (
        <>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />
          </div>
        </>
      )}
      {formData.tipoPessoa === 'juridica' && (
        <>
          <div className="input-group">
            <label htmlFor="emailEmpresa">Email da Empresa:</label>
            <input type="email" id="emailEmpresa" name="emailEmpresa" value={formData.emailEmpresa} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="senhaEmpresa">Senha:</label>
            <input type="password" id="senhaEmpresa" name="senhaEmpresa" value={formData.senhaEmpresa} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label htmlFor="confirmarSenhaEmpresa">Confirmar Senha:</label>
            <input type="password" id="confirmarSenhaEmpresa" name="confirmarSenhaEmpresa" value={formData.confirmarSenhaEmpresa} onChange={handleChange} required />
          </div>
        </>
      )}
      <div className="buttons">
        <button className="voltar" onClick={prevStep}>Voltar</button>
        <button onClick={() => alert('Formulário enviado!')}>Enviar</button>
      </div>
    </div>
  );
};

export default Step3;
