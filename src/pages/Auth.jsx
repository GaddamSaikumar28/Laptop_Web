// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Link } from 'react-router-dom';
// // import { 
// //   Mail, 
// //   Lock,
// //   User,
// //   Send,
// //   Loader2,
// //   CheckCircle,
// //   AlertTriangle,
// //   Eye,
// //   EyeOff
// // } from 'lucide-react';
// // import { EonCircularLogo } from '../components/common/Logo';
// // import { FadeIn } from '../components/common/FadeIn';

// // // --- Animated Form Input (Adapted from Contact.jsx) ---
// // const AuthInput = ({ id, label, icon: Icon, type = "text", ...props }) => {
// //   const [isFocused, setIsFocused] = useState(false);
// //   const [showPassword, setShowPassword] = useState(false);
  
// //   const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

// //   return (
// //     <div className="relative">
// //       <label 
// //         htmlFor={id} 
// //         className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
// //       >
// //         {label}
// //       </label>
// //       <div className="relative flex items-center">
// //         <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
// //         <motion.input
// //           id={id}
// //           type={inputType}
// //           className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-12 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300"
// //           style={{
// //             boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
// //             borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)', // cyan-400, gray-700
// //           }}
// //           onFocus={() => setIsFocused(true)}
// //           onBlur={() => setIsFocused(false)}
// //           {...props}
// //         />
// //         {type === "password" && (
// //           <button
// //             type="button"
// //             onClick={() => setShowPassword(!showPassword)}
// //             className="absolute right-4 text-gray-500 hover:text-cyan-400 transition-colors"
// //           >
// //             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
// //           </button>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Form Button with States ---
// // const AuthButton = ({ status, children }) => (
// //   <motion.button
// //     type="submit"
// //     disabled={status === 'loading' || status === 'success'}
// //     className={`relative w-full text-lg font-bold py-4 px-8 rounded-lg text-white transition-all duration-300 overflow-hidden ${
// //       status === 'idle' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500' :
// //       status === 'loading' ? 'bg-gray-700' :
// //       status === 'success' ? 'bg-green-600' :
// //       'bg-red-600'
// //     }`}
// //     whileTap={status === 'idle' ? { scale: 0.95 } : {}}
// //   >
// //     <AnimatePresence mode="wait">
// //       {status === 'idle' && (
// //         <motion.span
// //           key="idle"
// //           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //           className="flex items-center justify-center"
// //         >
// //           {children}
// //         </motion.span>
// //       )}
// //       {status === 'loading' && (
// //         <motion.span
// //           key="loading"
// //           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //           className="flex items-center justify-center"
// //         >
// //           Processing... <Loader2 className="w-5 h-5 ml-3 animate-spin" />
// //         </motion.span>
// //       )}
// //       {status === 'success' && (
// //         <motion.span
// //           key="success"
// //           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //           className="flex items-center justify-center"
// //         >
// //           Success! <CheckCircle className="w-5 h-5 ml-3" />
// //         </motion.span>
// //       )}
// //       {status === 'error' && (
// //         <motion.span
// //           key="error"
// //           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
// //           className="flex items-center justify-center"
// //         >
// //           An Error Occurred <AlertTriangle className="w-5 h-5 ml-3" />
// //         </motion.span>
// //       )}
// //     </AnimatePresence>
// //   </motion.button>
// // );

// // // --- Login Form ---
// // const LoginForm = ({ setStatus, status }) => {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setStatus('loading');
// //     // Mock API Call
// //     setTimeout(() => { 
// //       setStatus('success');
// //       // In a real app, redirect here
// //       setTimeout(() => setStatus('idle'), 3000);
// //     }, 2000);
// //   };
  
// //   return (
// //     <motion.form
// //       key="login"
// //       initial={{ opacity: 0, x: -50 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       exit={{ opacity: 0, x: 50 }}
// //       transition={{ duration: 0.5, ease: 'easeInOut' }}
// //       onSubmit={handleSubmit}
// //       className="space-y-6"
// //     >
// //       <AuthInput 
// //         id="login-email" 
// //         label="Email Address" 
// //         icon={Mail} 
// //         type="email" 
// //         placeholder="you@example.com"
// //         required 
// //       />
// //       <AuthInput 
// //         id="login-password" 
// //         label="Password" 
// //         icon={Lock} 
// //         type="password" 
// //         placeholder="••••••••"
// //         required 
// //       />
// //       <div className="text-right">
// //         <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
// //           Forgot Password?
// //         </a>
// //       </div>
// //       <AuthButton status={status}>
// //         Login <Send className="w-5 h-5 ml-3" />
// //       </AuthButton>
// //     </motion.form>
// //   );
// // };

// // // --- Sign Up Form ---
// // const SignUpForm = ({ setStatus, status }) => {
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setStatus('loading');
// //     // Mock API Call
// //     setTimeout(() => { 
// //       setStatus('success');
// //       setTimeout(() => setStatus('idle'), 3000);
// //     }, 2000);
// //   };

// //   return (
// //     <motion.form
// //       key="signup"
// //       initial={{ opacity: 0, x: 50 }}
// //       animate={{ opacity: 1, x: 0 }}
// //       exit={{ opacity: 0, x: -50 }}
// //       transition={{ duration: 0.5, ease: 'easeInOut' }}
// //       onSubmit={handleSubmit}
// //       className="space-y-6"
// //     >
// //       <AuthInput 
// //         id="signup-name" 
// //         label="Full Name" 
// //         icon={User} 
// //         type="text" 
// //         placeholder="John Doe"
// //         required 
// //       />
// //       <AuthInput 
// //         id="signup-email" 
// //         label="Email Address" 
// //         icon={Mail} 
// //         type="email" 
// //         placeholder="you@example.com"
// //         required 
// //       />
// //       <AuthInput 
// //         id="signup-password" 
// //         label="Password" 
// //         icon={Lock} 
// //         type="password" 
// //         placeholder="••••••••"
// //         required 
// //       />
// //       <AuthInput 
// //         id="signup-confirm-password" 
// //         label="Confirm Password" 
// //         icon={Lock} 
// //         type="password" 
// //         placeholder="••••••••"
// //         required 
// //       />
// //       <AuthButton status={status}>
// //         Create Account <Send className="w-5 h-5 ml-3" />
// //       </AuthButton>
// //     </motion.form>
// //   );
// // };

// // // --- Main Auth Page Component ---
// // export const Auth = () => {
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [status, setStatus] = useState('idle');

// //   const toggleForm = () => {
// //     setIsLogin(!isLogin);
// //     setStatus('idle'); // Reset status on toggle
// //   };

// //   return (
// //     <div className="relative min-h-screen w-full flex items-center justify-center p-6 bg-black text-white overflow-hidden">
      
// //       {/* Animated Background */}
// //       <div className="absolute inset-0 z-0">
// //         <img 
// //           src="https://placehold.co/1920x1080/000000/1a1a1a?text=Circuit+Background&font=inter" 
// //           alt="Futuristic background"
// //           className="w-full h-full object-cover opacity-20"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
// //         <div 
// //           className="absolute inset-0"
// //           style={{
// //             backgroundImage: `
// //               linear-gradient(to right, rgba(0, 150, 200, 0.1) 1px, transparent 1px),
// //               linear-gradient(to bottom, rgba(0, 150, 200, 0.1) 1px, transparent 1px)
// //             `,
// //             backgroundSize: '40px 40px',
// //             animation: 'pulseGrid 10s linear infinite'
// //           }}
// //         ></div>
// //         <style>{`
// //           @keyframes pulseGrid {
// //             0% { opacity: 0.5; }
// //             50% { opacity: 0.8; }
// //             100% { opacity: 0.5; }
// //           }
// //         `}</style>
// //       </div>

// //       {/* Close Button - Links back to Home */}
// //       <Link to="/" className="absolute top-6 right-6 z-20 text-gray-500 hover:text-white transition-colors">
// //         <motion.div whileHover={{ scale: 1.2, rotate: 90 }}>
// //           <EyeOff className="w-8 h-8" /> {/* Using EyeOff as a "Close" icon */}
// //         </motion.div>
// //       </Link>
      
// //       {/* Auth Card */}
// //       <FadeIn delay={0.2} y={0}>
// //         <motion.div 
// //           className="relative z-10 w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-2xl shadow-cyan-500/10"
// //         >
// //           <div className="p-8 md:p-12">
// //             <div className="flex justify-center mb-6">
// //               <EonCircularLogo className="w-16 h-16" />
// //             </div>
// //             <AnimatePresence mode="wait">
// //               <motion.h2
// //                 key={isLogin ? "login" : "signup"}
// //                 initial={{ opacity: 0, y: -10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 10 }}
// //                 className="text-3xl font-bold text-center text-white mb-8"
// //               >
// //                 {isLogin ? "Welcome Back" : "Create Account"}
// //               </motion.h2>
// //             </AnimatePresence>
            
// //             {/* Form Container */}
// //             <AnimatePresence mode="wait">
// //               {isLogin ? (
// //                 <LoginForm key="login-form" setStatus={setStatus} status={status} />
// //               ) : (
// //                 <SignUpForm key="signup-form" setStatus={setStatus} status={status} />
// //               )}
// //             </AnimatePresence>
            
// //             {/* Toggle Button */}
// //             <div className="mt-8 text-center">
// //               <button
// //                 onClick={toggleForm}
// //                 className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
// //               >
// //                 {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
// //               </button>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </FadeIn>
// //     </div>
// //   );
// // };


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { 
//   Mail, 
//   Lock,
//   User,
//   Send,
//   Loader2,
//   CheckCircle,
//   AlertTriangle,
//   Eye,
//   EyeOff
// } from 'lucide-react';
// import { EonCircularLogo } from '../components/common/Logo';
// import { FadeIn } from '../components/common/FadeIn';

// // --- Helper hook to read URL query parameters ---
// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// // --- Animated Form Input (Adapted from Contact.jsx) ---
// const AuthInput = ({ id, label, icon: Icon, type = "text", ...props }) => {
//   const [isFocused, setIsFocused] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
  
//   const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

//   return (
//     <div className="relative">
//       <label 
//         htmlFor={id} 
//         className="absolute -top-2.5 left-4 bg-gray-900 px-1 text-sm text-cyan-400 z-10"
//       >
//         {label}
//       </label>
//       <div className="relative flex items-center">
//         <Icon className="absolute left-4 w-5 h-5 text-gray-500" />
//         <motion.input
//           id={id}
//           type={inputType}
//           className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pr-12 pl-12 text-white placeholder-gray-600 outline-none transition-all duration-300"
//           style={{
//             boxShadow: isFocused ? '0 0 15px rgba(6, 182, 212, 0.3)' : 'none',
//             borderColor: isFocused ? 'rgb(56 189 248)' : 'rgb(55 65 81)', // cyan-400, gray-700
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           {...props}
//         />
//         {type === "password" && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-4 text-gray-500 hover:text-cyan-400 transition-colors"
//           >
//             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// // --- Form Button with States ---
// const AuthButton = ({ status, children }) => (
//   <motion.button
//     type="submit"
//     disabled={status === 'loading' || status === 'success'}
//     className={`relative w-full text-lg font-bold py-4 px-8 rounded-lg text-white transition-all duration-300 overflow-hidden ${
//       status === 'idle' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500' :
//       status === 'loading' ? 'bg-gray-700' :
//       status === 'success' ? 'bg-green-600' :
//       'bg-red-600'
//     }`}
//     whileTap={status === 'idle' ? { scale: 0.95 } : {}}
//   >
//     <AnimatePresence mode="wait">
//       {status === 'idle' && (
//         <motion.span
//           key="idle"
//           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//           className="flex items-center justify-center"
//         >
//           {children}
//         </motion.span>
//       )}
//       {status === 'loading' && (
//         <motion.span
//           key="loading"
//           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//           className="flex items-center justify-center"
//         >
//           Processing... <Loader2 className="w-5 h-5 ml-3 animate-spin" />
//         </motion.span>
//       )}
//       {status === 'success' && (
//         <motion.span
//           key="success"
//           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//           className="flex items-center justify-center"
//         >
//           Success! <CheckCircle className="w-5 h-5 ml-3" />
//         </motion.span>
//       )}
//       {status === 'error' && (
//         <motion.span
//           key="error"
//           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
//           className="flex items-center justify-center"
//         >
//           An Error Occurred <AlertTriangle className="w-5 h-5 ml-3" />
//         </motion.span>
//       )}
//     </AnimatePresence>
//   </motion.button>
// );

// // --- Login Form ---
// const LoginForm = ({ setStatus, status }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     // Mock API Call
//     setTimeout(() => { 
//       setStatus('success');
//       // In a real app, redirect here
//       setTimeout(() => setStatus('idle'), 3000);
//     }, 2000);
//   };
  
//   return (
//     <motion.form
//       key="login"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ duration: 0.5, ease: 'easeInOut' }}
//       onSubmit={handleSubmit}
//       className="space-y-6"
//     >
//       <AuthInput 
//         id="login-email" 
//         label="Email Address" 
//         icon={Mail} 
//         type="email" 
//         placeholder="you@example.com"
//         required 
//       />
//       <AuthInput 
//         id="login-password" 
//         label="Password" 
//         icon={Lock} 
//         type="password" 
//         placeholder="••••••••"
//         required 
//       />
//       <div className="text-right">
//         <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
//           Forgot Password?
//         </a>
//       </div>
//       <AuthButton status={status}>
//         Login <Send className="w-5 h-5 ml-3" />
//       </AuthButton>
//     </motion.form>
//   );
// };

// // --- Sign Up Form ---
// const SignUpForm = ({ setStatus, status }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     // Mock API Call
//     setTimeout(() => { 
//       setStatus('success');
//       setTimeout(() => setStatus('idle'), 3000);
//     }, 2000);
//   };

//   return (
//     <motion.form
//       key="signup"
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -50 }}
//       transition={{ duration: 0.5, ease: 'easeInOut' }}
//       onSubmit={handleSubmit}
//       className="space-y-6"
//     >
//       <AuthInput 
//         id="signup-name" 
//         label="Full Name" 
//         icon={User} 
//         type="text" 
//         placeholder="John Doe"
//         required 
//       />
//       <AuthInput 
//         id="signup-email" 
//         label="Email Address" 
//         icon={Mail} 
//         type="email" 
//         placeholder="you@example.com"
//         required 
//       />
//       <AuthInput 
//         id="signup-password" 
//         label="Password" 
//         icon={Lock} 
//         type="password" 
//         placeholder="••••••••"
//         required 
//       />
//       <AuthInput 
//         id="signup-confirm-password" 
//         label="Confirm Password" 
//         icon={Lock} 
//         type="password" 
//         placeholder="••••••••"
//         required 
//       />
//       <AuthButton status={status}>
//         Create Account <Send className="w-5 h-5 ml-3" />
//       </AuthButton>
//     </motion.form>
//   );
// };

// // --- Main Auth Page Component ---
// export const Auth = () => {
//   const query = useQuery();
//   const [isLogin, setIsLogin] = useState(query.get('mode') !== 'signup');
//   const [status, setStatus] = useState('idle');

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setStatus('idle'); // Reset status on toggle
//   };

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center p-6 bg-black text-white overflow-hidden">
      
//       {/* Animated Background */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://placehold.co/1920x1080/000000/1a1a1a?text=Circuit+Background&font=inter" 
//           alt="Futuristic background"
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(0, 150, 200, 0.1) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(0, 150, 200, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '40px 40px',
//             animation: 'pulseGrid 10s linear infinite'
//           }}
//         ></div>
//         <style>{`
//           @keyframes pulseGrid {
//             0% { opacity: 0.5; }
//             50% { opacity: 0.8; }
//             100% { opacity: 0.5; }
//           }
//         `}</style>
//       </div>

//       {/* Close Button - Links back to Home */}
//       <Link to="/" className="absolute top-6 right-6 z-20 text-gray-500 hover:text-white transition-colors">
//         <motion.div whileHover={{ scale: 1.2, rotate: 90 }}>
//           <EyeOff className="w-8 h-8" /> {/* Using EyeOff as a "Close" icon */}
//         </motion.div>
//       </Link>
      
//       {/* Auth Card */}
//       <FadeIn delay={0.2} y={0}>
//         <motion.div 
//           className="relative z-10 w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-blur-lg border border-gray-800 rounded-2xl shadow-2xl shadow-cyan-500/10"
//         >
//           <div className="p-8 md:p-12">
//             <div className="flex justify-center mb-6">
//               <EonCircularLogo className="w-16 h-16" />
//             </div>
//             <AnimatePresence mode="wait">
//               <motion.h2
//                 key={isLogin ? "login" : "signup"}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//                 className="text-3xl font-bold text-center text-white mb-8"
//               >
//                 {isLogin ? "Welcome Back" : "Create Account"}
//               </motion.h2>
//             </AnimatePresence>
            
//             {/* Form Container */}
//             <AnimatePresence mode="wait">
//               {isLogin ? (
//                 <LoginForm key="login-form" setStatus={setStatus} status={status} />
//               ) : (
//                 <SignUpForm key="signup-form" setStatus={setStatus} status={status} />
//               )}
//             </AnimatePresence>
            
//             {/* Toggle Button */}
//             <div className="mt-8 text-center">
//               <button
//                 onClick={toggleForm}
//                 className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
//               >
//                 {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </FadeIn>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
import { EonCircularLogo } from '../components/common/Logo';
import { FadeIn } from '../components/common/FadeIn';

// --- Animated Form Input (Redesigned for Light Mode) ---
const AuthInput = ({ id, label, icon: Icon, type = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative">
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate error for demo
    if (e.target.email.value === 'error@test.com') {
      setStatus('error');
    } else {
      setStatus('success');
    }
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
  };

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
    </motion.form>
  );
};

// --- Main Auth Page Component ---
export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setStatus('idle');
  };

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
                <EonCircularLogo className="w-16 h-16" />
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
                  alt="EonCircular Product"
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
