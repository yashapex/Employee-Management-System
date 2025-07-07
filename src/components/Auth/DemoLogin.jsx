import React from 'react';
import { Link } from 'react-router-dom';

const DemoLogin = () => {
  return (
    <div className="fade-up min-h-screen bg-[#1c1c1c] p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-emerald-400 text-center mb-10">
        🔐 Demo Credentials
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">

        {/* Admin Card */}
        <div className="bg-[#1c1c1c] p-6 rounded-2xl border border-emerald-500">
          <h2 className="text-xl font-bold text-emerald-300 mb-2">👑 Admin</h2>
          <p>📧 <strong>Email:</strong> admin@me.com</p>
          <p>🔐 <strong>Password:</strong> 123</p>
        </div>

        {/* Employee Cards (template) */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Employee 1 */}
          <div className="bg-[#1c1c1c] p-5 rounded-xl shadow border border-emerald-100">
            <h2 className="text-lg font-semibold text-emerald-200 mb-1">🧑‍💼 Ethan</h2>
            <p>📧 <strong>Email:</strong> e@e.com</p>
            <p>🔐 <strong>Password:</strong> 123</p>
          </div>

          {/* Employee 2 */}
          <div className="bg-[#1c1c1c] p-5 rounded-xl shadow border border-emerald-100">
            <h2 className="text-lg font-semibold text-emerald-200 mb-1">🧑‍💼 Emily</h2>
            <p>📧 <strong>Email:</strong> employee2@example.com</p>
            <p>🔐 <strong>Password:</strong> 123</p>
          </div>

          {/* Employee 1 */}
          <div className="bg-[#1c1c1c] p-5 rounded-xl shadow border border-emerald-100">
            <h2 className="text-lg font-semibold text-emerald-200 mb-1">🧑‍💼 James</h2>
            <p>📧 <strong>Email:</strong> employee3@example.com</p>
            <p>🔐 <strong>Password:</strong> 123</p>
          </div>

          {/* Employee 1 */}
          <div className="bg-[#1c1c1c] p-5 rounded-xl shadow border border-emerald-100">
            <h2 className="text-lg font-semibold text-emerald-200 mb-1">🧑‍💼 Olivia</h2>
            <p>📧 <strong>Email:</strong> employee4@example.com</p>
            <p>🔐 <strong>Password:</strong> 123</p>
          </div>

          {/* Employee 1 */}
          <div className="bg-[#1c1c1c] p-5 rounded-xl shadow border border-emerald-100">
            <h2 className="text-lg font-semibold text-emerald-200 mb-1">🧑‍💼 Logan</h2>
            <p>📧 <strong>Email:</strong> employee5@example.com</p>
            <p>🔐 <strong>Password:</strong> 123</p>
          </div>


        </div>

        {/* Back to login */}
        <div className="mt-10 text-center">
          <Link to="/" className="text-emerald-400 hover:underline text-sm">
            ← Back to Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DemoLogin;
