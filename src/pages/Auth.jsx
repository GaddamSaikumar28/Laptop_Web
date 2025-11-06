
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { 
//   Mail, 
//   Lock,
//   User,
//   Loader2,
//   CheckCircle,
//   AlertTriangle,
//   Eye,
//   EyeOff,
//   LogIn
// } from 'lucide-react';
// import { ECycleGreenLogo } from '../components/common/Logo';
// import { FadeIn } from '../components/common/FadeIn';

// // --- Animated Form Input (Redesigned for Light Mode) ---
// const AuthInput = ({ id, label, icon: Icon, type = "text", ...props }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

//   return (
//     <div className="relative">
//       {/* Icon (Color changes on focus) */}
//       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-green-600 text-gray-400 transition-colors duration-300">
//         <Icon className="w-5 h-5" />
//       </div>
      
//       {/* Input Field (Redesigned for Light Mode) */}
//       <input
//         id={id}
//         type={inputType}
//         // Using peer-focus for futuristic label animation
//         className="peer w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pr-12 pl-12 text-gray-900 placeholder-transparent outline-none transition-all duration-300
//                    focus:border-green-500 focus:ring-4 focus:ring-green-500/30" // Green focus glow
//         placeholder={label}
//         {...props}
//       />
      
//       {/* Label (Animates on focus using peer) */}
//       <label 
//         htmlFor={id} 
//         className="absolute left-12 -top-2.5 px-1 text-sm z-10 transition-all duration-300
//                    text-gray-500 bg-gray-50
//                    peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
//                    peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gray-50 peer-focus:text-green-600"
//       >
//         {label}
//       </label>
      
//       {/* Password Toggle Button */}
//       {type === "password" && (
//         <button
//           type="button"
//           onClick={() => setShowPassword(!showPassword)}
//           className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-green-600"
//         >
//           {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//         </button>
//       )}
//     </div>
//   );
// };

// // --- Login Form Component (Redesigned) ---
// const LoginForm = ({ setStatus, status }) => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     // Simulate error for demo
//     if (e.target.email.value === 'error@test.com') {
//       setStatus('error');
//     } else {
//       setStatus('success');
//     }
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//       onSubmit={handleSubmit}
//       className="space-y-6"
//     >
//       <AuthInput id="email" label="Email" icon={Mail} type="email" required />
//       <AuthInput id="password" label="Password" icon={Lock} type="password" required />
      
//       <div className="text-right">
//         <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
//           Forgot Password?
//         </Link>
//       </div>

//       {/* Submit Button (Redesigned) */}
//       <motion.button
//         type="submit"
//         className={`w-full py-3 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
//                     ${status === 'loading' && 'bg-gray-400 cursor-not-allowed'}
//                     ${(status === 'idle' || status === 'error') && 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg shadow-green-500/20'}
//                     ${status === 'success' && 'bg-emerald-600'}
//                   `}
//         disabled={status === 'loading'}
//         whileHover={{ scale: (status === 'idle' || status === 'error') ? 1.03 : 1 }}
//         whileTap={{ scale: (status === 'idle' || status === 'error') ? 0.98 : 1 }}
//       >
//         {status === 'idle' && <><LogIn className="w-5 h-5 mr-3" /> Login</>}
//         {status === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Authenticating...</>}
//         {status === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Success!</>}
//         {status === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Login Failed</>}
//       </motion.button>
//     </motion.form>
//   );
// };

// // --- Sign Up Form Component (Redesigned) ---
// const SignUpForm = ({ setStatus, status }) => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setStatus('success');
//   };

//   return (
//     <motion.form
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -50 }}
//       transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//       onSubmit={handleSubmit}
//       className="space-y-6"
//     >
//       <AuthInput id="name" label="Full Name" icon={User} type="text" required />
//       <AuthInput id="email" label="Email" icon={Mail} type="email" required />
//       <AuthInput id="password" label="Password" icon={Lock} type="password" required />
      
//       <motion.button
//         type="submit"
//         className={`w-full py-3 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
//                     ${status === 'loading' && 'bg-gray-400 cursor-not-allowed'}
//                     ${(status === 'idle' || status === 'error') && 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg shadow-green-500/20'}
//                     ${status === 'success' && 'bg-emerald-600'}
//                   `}
//         disabled={status === 'loading'}
//         whileHover={{ scale: (status === 'idle' || status === 'error') ? 1.03 : 1 }}
//         whileTap={{ scale: (status === 'idle' || status === 'error') ? 0.98 : 1 }}
//       >
//         {status === 'idle' && <>Create Account</>}
//         {status === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Creating...</>}
//         {status === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Account Created!</>}
//         {status === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Signup Failed</>}
//       </motion.button>
//     </motion.form>
//   );
// };

// // --- Main Auth Page Component ---
// export const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setStatus('idle');
//   };

//   return (
//     // Main page container (light mode)
//     <div className="min-h-screen py-24 bg-gray-50 flex items-center justify-center">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <FadeIn>
//           {/* New Split-Screen Card */}
//           <div className="rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-gray-100">
            
//             {/* --- Left Side: Form Area (Light) --- */}
//             <div className="p-8 md:p-12 bg-white">
//               <div className="flex justify-center mb-6">
//                 <ECycleGreenLogo className="w-16 h-16" />
//               </div>
//               <AnimatePresence mode="wait">
//                 <motion.h2
//                   key={isLogin ? "login" : "signup"}
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   // Heading updated to dark
//                   className="text-3xl font-bold text-center text-gray-900 mb-8"
//                 >
//                   {isLogin ? "Welcome Back" : "Create Account"}
//                 </motion.h2>
//               </AnimatePresence>
              
//               <AnimatePresence mode="wait">
//                 {isLogin ? (
//                   <LoginForm key="login-form" setStatus={setStatus} status={status} />
//                 ) : (
//                   <SignUpForm key="signup-form" setStatus={setStatus} status={status} />
//                 )}
//               </AnimatePresence>
              
//               {/* Toggle Button (Redesigned) */}
//               <div className="mt-8 text-center">
//                 <button
//                   onClick={toggleForm}
//                   // Text updated for light mode
//                   className="text-sm text-gray-500 hover:text-green-600 transition-colors"
//                 >
//                   {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
//                 </button>
//               </div>
//             </div>

//             {/* --- NEW Feature: Right Side - Gradient Panel (Dark) --- */}
//             <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-green-600 to-teal-700 text-white">
//               <FadeIn>
//                 <h2 className="text-4xl font-bold mb-4">
//                   The Future is Circular.
//                 </h2>
//                 <p className="text-lg text-green-100 mb-8">
//                   Join a community dedicated to world-class quality and sustainable
//                   technology. By creating an account, you're supporting a
//                   better future.
//                 </p>
//                 <motion.img 
//                   src="https://placehold.co/800x600/e0e0e0/555555?text=Our+Product&font=inter"
//                   alt="ECycleGreen Product"
//                   className="rounded-lg shadow-xl"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.2, duration: 0.5 }}
//                 />
//               </FadeIn>
//             </div>

//           </div>
//         </FadeIn>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react'; // Added useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { 
  Mail, 
  Lock,
  User,
  Loader2,
  CheckCircle,
  AlertTriangle,
  Eye,
  EyeOff,
  LogIn
} from 'lucide-react';
import { ECycleGreenLogo } from '../components/common/Logo'; // Assuming path is correct
import { FadeIn } from '../components/common/FadeIn'; // Assuming path is correct
import { useAuth } from '../context/AuthContext.jsx'; // Import the useAuth hook, Added .jsx

// --- Animated Form Input (Redesigned for Light Mode) ---
const AuthInput = ({ id, label, icon: Icon, type = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative group"> {/* Added group for focus-within */}
      {/* Icon (Color changes on focus) */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-green-600 text-gray-400 transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>
      
      {/* Input Field (Redesigned for Light Mode) */}
      <input
        id={id}
        type={inputType}
        // Using peer-focus for futuristic label animation
        className="peer w-full bg-gray-50 border border-gray-300 rounded-lg py-3 pr-12 pl-12 text-gray-900 placeholder-transparent outline-none transition-all duration-300
                   focus:border-green-500 focus:ring-4 focus:ring-green-500/30" // Green focus glow
        placeholder={label}
        {...props}
      />
      
      {/* Label (Animates on focus using peer) */}
      <label 
        htmlFor={id} 
        className="absolute left-12 -top-2.5 px-1 text-sm z-10 transition-all duration-300
                   text-gray-500 bg-gray-50
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent
                   peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-gray-50 peer-focus:text-green-600"
      >
        {label}
      </label>
      
      {/* Password Toggle Button */}
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-green-600"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};

// --- Login Form Component (Redesigned) ---
const LoginForm = ({ setStatus, status }) => {
  const { signIn } = useAuth(); // Get signIn from context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { success, error } = await signIn({ email, password });

    if (success) {
      setStatus('success');
      // Redirect to dashboard or home after successful login
      setTimeout(() => navigate('/dashboard'), 1000); 
    } else {
      setStatus('error');
      // Error message is already set in the context
    }
  };
  
  // ... (rest of the LoginForm JSX is identical)
  return (
    <motion.form
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <AuthInput id="email" label="Email" icon={Mail} type="email" required />
      <AuthInput id="password" label="Password" icon={Lock} type="password" required />
      
      <div className="text-right">
        <Link to="/forgot-password" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button (Redesigned) */}
      <motion.button
        type="submit"
        className={`w-full py-3 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
                    ${status === 'loading' && 'bg-gray-400 cursor-not-allowed'}
                    ${(status === 'idle' || status === 'error') && 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg shadow-green-500/20'}
                    ${status === 'success' && 'bg-emerald-600'}
                  `}
        disabled={status === 'loading'}
        whileHover={{ scale: (status === 'idle' || status === 'error') ? 1.03 : 1 }}
        whileTap={{ scale: (status === 'idle' || status === 'error') ? 0.98 : 1 }}
      >
        {status === 'idle' && <><LogIn className="w-5 h-5 mr-3" /> Login</>}
        {status === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Authenticating...</>}
        {status === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Success!</>}
        {status === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Login Failed</>}
      </motion.button>
    </motion.form>
  );
};

// --- Sign Up Form Component (Redesigned) ---
const SignUpForm = ({ setStatus, status }) => {
  const { signUp } = useAuth(); // Get signUp from context
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { success, error } = await signUp({ email, password, fullName });

    if (success) {
      setStatus('success');
      setSuccessMessage('Account created! Check your email to verify.');
      // You might want to clear the form or switch to login
    } else {
      setStatus('error');
    }
  };

  // ... (rest of the SignUpForm JSX is identical, with one addition)
  return (
    <motion.form
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <AuthInput id="name" label="Full Name" icon={User} type="text" required />
      <AuthInput id="email" label="Email" icon={Mail} type="email" required />
      <AuthInput id="password" label="Password" icon={Lock} type="password" required />
      
      <motion.button
        type="submit"
        className={`w-full py-3 px-6 rounded-lg text-lg font-semibold text-white transition-all duration-300 flex items-center justify-center
                    ${status === 'loading' && 'bg-gray-400 cursor-not-allowed'}
                    ${(status === 'idle' || status === 'error') && 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg shadow-green-500/20'}
                    ${status === 'success' && 'bg-emerald-600'}
                  `}
        disabled={status === 'loading'}
        whileHover={{ scale: (status === 'idle' || status === 'error') ? 1.03 : 1 }}
        whileTap={{ scale: (status === 'idle' || status === 'error') ? 0.98 : 1 }}
      >
        {status === 'idle' && <>Create Account</>}
        {status === 'loading' && <><Loader2 className="w-5 h-5 mr-3 animate-spin" /> Creating...</>}
        {status === 'success' && <><CheckCircle className="w-5 h-5 mr-3" /> Account Created!</>}
        {status === 'error' && <><AlertTriangle className="w-5 h-5 mr-3" /> Signup Failed</>}
      </motion.button>

      {status === 'success' && (
        <p className="text-center text-green-600">{successMessage}</p>
      )}
    </motion.form>
  );
};

// --- Main Auth Page Component ---
export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  // Get auth state and error from context
  const { user, actionLoading, error: authError } = useAuth();
  const navigate = useNavigate();

  // This 'status' is now derived from the context
  const [status, setStatus] = useState('idle');

  // Update local status based on context's loading state
  useEffect(() => {
    if (actionLoading) {
      setStatus('loading');
    }
  }, [actionLoading]);

  // Reset status to 'idle' if the form is toggled
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setStatus('idle');
  };

  // If user is already logged in, redirect them
  useEffect(() => {
    if (user) {
      navigate('/'); // Or '/' or '/profile'
    }
  }, [user, navigate]);

  return (
    // Main page container (light mode)
    <div className="min-h-screen py-24 bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          {/* New Split-Screen Card */}
          <div className="rounded-2xl shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-gray-100">
            
            {/* --- Left Side: Form Area (Light) --- */}
            <div className="p-8 md:p-12 bg-white">
              <div className="flex justify-center mb-6">
                <ECycleGreenLogo className="w-16 h-16" />
              </div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={isLogin ? "login" : "signup"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  // Heading updated to dark
                  className="text-3xl font-bold text-center text-gray-900 mb-8"
                >
                  {isLogin ? "Welcome Back" : "Create Account"}
                </motion.h2>
              </AnimatePresence>
              
              {/* Display Auth Error from Context */}
              {status === 'error' && authError && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                  {authError}
                </div>
              )}
              
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <LoginForm key="login-form" setStatus={setStatus} status={status} />
                ) : (
                  <SignUpForm key="signup-form" setStatus={setStatus} status={status} />
                )}
              </AnimatePresence>
              
              {/* Toggle Button (Redesigned) */}
              <div className="mt-8 text-center">
                <button
                  onClick={toggleForm}
                  // Text updated for light mode
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                >
                  {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
                </button>
              </div>
            </div>

            {/* --- NEW Feature: Right Side - Gradient Panel (Dark) --- */}
            <div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-green-600 to-teal-700 text-white">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-4">
                  The Future is Circular.
                </h2>
                <p className="text-lg text-green-100 mb-8">
                  Join a community dedicated to world-class quality and sustainable
                  technology. By creating an account, you're supporting a
                  better future.
                </p>
                <motion.img 
                  src="https://placehold.co/800x600/e0e0e0/555555?text=Our+Product&font=inter"
                  alt="ECycleGreen Product"
                  className="rounded-lg shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </FadeIn>
            </div>

          </div>
        </FadeIn>
      </div>
    </div>
  );
};