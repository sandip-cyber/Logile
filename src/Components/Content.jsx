import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="py-10 grid md:grid-cols-2">
     
     <div>
      {/* Extra Content */}
      <div className="mt-12 text-center space-y-4">
        <h1 className="text-2xl font-bold">Struggling with store planning, scheduling or execution?</h1>
        <p>See how our Connected Workforce Platform helps retailers align labor with real demand, optimize execution, and empower associates.</p>
        <p>All retailers. All formats. Real results.</p>
        <p>Sign up for your free demo today, customized to your priorities.</p>
        <h2 className="text-xl font-bold mt-6">An Award-Winning Store Operations Platform:</h2>
      </div>

      {/* Awards Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 mt-6">
        {[
          'RetailTech_Breakthrough_Award-Badge_2025-Logile',
          'Globee-Awards-Gold',
          'Globee-Awards-Silver',
          'TITAN-Business-Awards-Logo-Black_5x5',
          'Globee-Award-Gold'
        ].map((img, index) => (
          <img
            key={index}
            src={`https://www.logile.com/wp-content/uploads/2025/06/${img}-300x300.png`}
            alt={`Award ${index + 1}`}
            className="w-full h-auto object-contain"
          />
        ))}
      </div>
      </div>
      <ContactForm/>
    </div>
    
  );
};

export default Contact;
