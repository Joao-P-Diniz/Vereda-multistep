import React from 'react';

const Step1 = ({ formData, handleChange, nextStep }) => {
  return (
    <div>
      <div className="input-group">
        <label htmlFor="tipoPessoa">Tipo de Pessoa:</label>
        <select
          id="tipoPessoa"
          name="tipoPessoa"
          value={formData.tipoPessoa}
          onChange={handleChange}
          required
        >
          <option value="">Selecione</option>
          <option value="fisica">Pessoa Física</option>
          <option value="juridica">Pessoa Jurídica</option>
        </select>
      </div>
      <div className="buttons">
        <button onClick={nextStep}>Próximo</button>
      </div>
    </div>
  );
};

export default Step1;

