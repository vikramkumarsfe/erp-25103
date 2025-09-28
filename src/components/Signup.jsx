import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { Link } from 'react-router-dom';

const Signup = () => {
  // NOTE: Keyframes and pseudo-selectors MUST remain in a <style> block as React inline styles cannot handle them.
  const necessaryCss = `
    .form-input:focus {
        box-shadow: 0 0 0 2px rgba(135, 55, 224, 0.5);
    }
    .register-button {
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    }
    .register-button:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(135, 55, 224, 0.6);
    }
    .social-button {
        transition: transform 0.2s ease-in-out;
    }
    .social-button:hover {
        transform: scale(1.05);
    }
    .form-field {
        opacity: 0;
        transform: translateY(20px);
        animation: slide-in 0.5s forwards;
    }
    @keyframes slide-in {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
  `;

  // Define complex styles as JS objects
  const bodyBackgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    fontFamily: "'Poppins', 'Inter', sans-serif",
  };

  const gradientOverlayStyle = {
    background: 'linear-gradient(to right, rgba(54, 96, 225, 0.5), rgba(135, 55, 224, 0.5))',
  };

  const glassmorphismStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    animation: 'slide-in 0.7s ease-out forwards',
    opacity: 0,
    transform: 'translateY(30px)',
  };

  return (
    <>
      <style>{necessaryCss}</style>
      
      <div style={bodyBackgroundStyle}>
        <div className="relative min-h-screen w-full" style={gradientOverlayStyle}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wave-net.png')] opacity-10"></div>
          
          <div className="flex min-h-screen items-center justify-center p-4">
            <div 
              className="w-full max-w-lg rounded-2xl border border-white/20 p-8 shadow-2xl" 
              style={glassmorphismStyle}
            >
              <div className="mb-6 text-center">
                <div className="inline-block p-1 bg-white/20 rounded-full mb-4">
                    {/* NOTE: You should use a local path or import the image correctly in a React project */}
                    <img alt="College Logo" className="w-20 h-20 rounded-full" src="./images/logo.jpg" />
                </div>
                <h1 className="text-3xl font-bold text-white">Scholarly Heights University</h1>
                <p className="text-white/80">A Tradition of Excellence</p>
              </div>
              
              <form className="space-y-4">
                {/* Full Name */}
                <div className="form-field" style={{ animationDelay: '0.1s' }}>
                  <input className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none" placeholder="Full Name" type="text" />
                </div>
                
                {/* Email ID */}
                <div className="form-field" style={{ animationDelay: '0.2s' }}>
                  <input className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none" placeholder="Email ID" type="email" />
                </div>
                
                {/* Phone Number */}
                <div className="form-field" style={{ animationDelay: '0.3s' }}>
                  <input className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none" placeholder="Phone Number" type="tel" />
                </div>
                
                {/* Date of Birth */}
                <div className="form-field" style={{ animationDelay: '0.4s' }}>
                  <input className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none" placeholder="Date of Birth" type="date" />
                </div>
                
                {/* Department / Role Grid */}
                <div className="grid grid-cols-1 ">
                  <div className="form-field" style={{ animationDelay: '0.5s' }}>
                    <select className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none">
                      <option className="bg-gray-800 text-white/70" disabled defaultValue>Department</option>
                      <option className="bg-gray-800">Computer Science</option>
                      <option className="bg-gray-800">Business</option>
                      <option className="bg-gray-800">Arts & Humanities</option>
                    </select>
                  </div>
                </div>
                
                {/* Password */}
                <div className="form-field" style={{ animationDelay: '0.7s' }}>
                  <input className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none" placeholder="Password" type="password" />
                </div>
                
                {/* Confirm Password */}
                <div className="form-field" style={{ animationDelay: '0.8s' }}>
                  <input className="form-input w-full rounded-lg border-none bg-white/20 p-3.5 text-white placeholder-white/70 transition focus:outline-none" placeholder="Confirm Password" type="password" />
                </div>
                
                {/* Terms & Conditions */}
                <div className="form-field flex items-center" style={{ animationDelay: '0.9s' }}>
                  <input className="h-4 w-4 rounded border-gray-300 bg-white/30 text-[#8737E0] focus:ring-[#8737E0]" id="terms" type="checkbox" />
                  <label className="ml-2 block text-sm text-white/80" htmlFor="terms">I agree to <a className="font-medium text-white" href="#">Terms & Conditions</a></label>
                </div>
                
                {/* Register Button */}
                <div className="form-field" style={{ animationDelay: '1s' }}>
                  <button className="register-button w-full rounded-full bg-gradient-to-r from-[#3660E1] to-[#8737E0] py-3.5 text-base font-bold text-white shadow-lg" type="submit">
                    Register
                  </button>
                </div>
                
                {/* OR divider */}
                <div className="form-field flex items-center gap-4" style={{ animationDelay: '1.1s' }}>
                  <hr className="w-full border-white/20" />
                  <span className="text-sm text-white/80">OR</span>
                  <hr className="w-full border-white/20" />
                </div>
                
                {/* Social Buttons with MUI Icons */}
                <div className="form-field grid grid-cols-2 gap-4" style={{ animationDelay: '1.2s' }}>
                  <button className="social-button flex items-center justify-center gap-2 rounded-full bg-white/20 py-2.5 text-white" type="button">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                    </svg>
                    Google
                  </button>
                  <button className="social-button flex items-center justify-center gap-2 rounded-full bg-white/20 py-2.5 text-white" type="button">
                    <MicrosoftIcon className="h-5 w-5 text-blue-500" fontSize="small" />
                    Microsoft
                  </button>
                </div>
                
                {/* Login Link */}
                <p className="text-center text-sm text-white/80">
                  Already have an account?
                  <Link
                    to="/login"
                    className="font-bold text-white transition hover:text-white/80"
                  >
                    Login Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;