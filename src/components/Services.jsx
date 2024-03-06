import React from 'react';

function ServiceItem({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-4 rounded-lg shadow-md bg-white hover:shadow-lg">
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: 'FREE DEMO CLASSES',
      description:
        'Before enrolling, a free DEMO lesson is provided. Be Practical offers career-focused training with hand-picked job oriented courses in Bangalore.',
      icon: <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-9-9-9-3 3 9 9-9 9 3 3z"></path></svg>,
    },
    {
      title: 'JOB ORIENTED COURSES',
      description:
        'Be Practical offers career-focused training with hand-picked job oriented courses in Bangalore.',
      icon: <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zM5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path></svg>,
    },
    // ... other services
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {services.map((service) => (
        <ServiceItem key={service.title} {...service} />
      ))}
    </div>
  );
}

export default Services;
