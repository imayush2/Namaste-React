import React from "react";

const Contact = () => {
  return (
    <div className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-4 text-gray-700">
        Have any questions? Feel free to reach out to us through the details below:
      </p>

      <div className="space-y-2">
        <p className="text-lg">
          📞 <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-lg">
          📧 <strong>Email:</strong> support@example.com
        </p>
      </div>
    </div>
  );
};

export default Contact;

