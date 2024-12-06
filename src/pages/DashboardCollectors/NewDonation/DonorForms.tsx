import React, { useState } from 'react';
import background from "../../../assets/background_complete.png";

const DonationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    cep: '',
    city: '',
    address: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div
      className="h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',         // Ensure the image covers the entire container
        backgroundPosition: 'center',    // Center the image to avoid any misalignment
        backgroundAttachment: 'fixed',   // Keep the background fixed in place
        height: '100vh',                 // Ensure the height is 100vh
        display: 'flex',                 // Flexbox to make sure the content fits inside
        flexDirection: 'column',         // Column layout for the page structure
      }}
    >
      {/* Headline Section */}
      <div className="w-full text-center mt-10 mb-4 px-4">
        {/* Headline */}
        <div className="text-[#FF4444] text-6xl mb-4 font-semibold">
          <h1>Faça uma doação</h1>
        </div>
        {/* Subhead */}
        <div className="text-[#666666CC] text-4xl font-light max-w-3xl mx-auto">
          <p>Estamos quase lá! Complete com as informações do doador</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full px-6 pb-12 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-[700px] mx-auto mb-6 flex-grow">
        <h2 className="text-[#333333] text-2xl font-medium leading-[48px] mb-6">Nova doação</h2>
        <form onSubmit={handleSubmit}>
          {/* Nome e Sobrenome */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block font-normal mb-2 text-[#333333]">Nome do Doador</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Nome"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block font-normal mb-2 text-[#333333]">Sobrenome do Doador</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Sobrenome"
              />
            </div>
          </div>

          {/* Email ou Telefone */}
          <div className="mb-4">
            <label htmlFor="contact" className="block font-normal mb-2 text-[#333333]">Email ou Telefone do Doador</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Email ou Telefone"
            />
          </div>

          {/* CEP e Cidade */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="cep" className="block font-normal mb-2 text-[#333333]">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="CEP"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="city" className="block font-normal mb-2 text-[#333333]">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Cidade"
              />
            </div>
          </div>

          {/* Endereço */}
          <div className="mb-4">
            <label htmlFor="address" className="block font-normal mb-2 text-[#333333]">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Endereço"
            />
          </div>

          {/* Button */}
          <button type="submit" className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
            Criar Doação
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
