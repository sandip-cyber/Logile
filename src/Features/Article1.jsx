import React from "react";

const Article1 = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get Started: Where Do You Need the Most Support?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Let us know what’s top of mind for your business. Your pace, your way.
        </p>
      </div>

      <ul className="max-w-3xl mx-auto space-y-6 text-left text-gray-800">
        <li>
          <strong className="text-gray-900">Forecasting:</strong> Generate AI-driven forecasts that adjust to actual sales, traffic, workload and more—with up to 97% accuracy.
        </li>
        <li>
          <strong className="text-gray-900">Labor Planning and Modeling:</strong> Model store-specific labor plans based on engineered standards, your work requirements and demand data.
        </li>
        <li>
          <strong className="text-gray-900">Employee Scheduling:</strong> Automate AI-driven, optimized and task-based schedules that balance flexibility, compliance, coverage and associate preferences.
        </li>
        <li>
          <strong className="text-gray-900">Time and Attendance:</strong> Rely on accurate tracking, mobile punch-in and compliance tools designed for retail speed.
        </li>
        <li>
          <strong className="text-gray-900">Task Management and Communications:</strong> Assign, guide and track mobile execution and messages in real time—with full audit visibility.
        </li>
        <li>
          <strong className="text-gray-900">Fresh Production and Inventory:</strong> Improve accuracy, reduce waste and meet demand with smarter fresh operations.
        </li>
        <li>
          <strong className="text-gray-900">Food Safety Compliance:</strong> Digitize checklists, monitor temperatures and automate corrective actions.
        </li>
      </ul>
    </section>
  );
}

export default Article1;