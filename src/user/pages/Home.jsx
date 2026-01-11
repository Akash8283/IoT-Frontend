import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Server, 
  BarChart3, 
  BellRing, 
  Wifi, 
  WifiOff, 
  BatteryWarning, 
  AlertTriangle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100">

      {/* hero section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live System Monitoring V2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
            The Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Industrial IoT
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A centralized command center tracking <span className="font-semibold text-slate-800">device health</span>, 
            <span className="font-semibold text-slate-800"> sensor data</span>, and 
            <span className="font-semibold text-slate-800"> critical alerts</span> in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/login"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

       {/* roles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for Every Role</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tailored dashboards ensuring the right data reaches the right people.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* employee Card */}
          <div className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity className="w-32 h-32 text-blue-600" />
            </div>
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Field Employees</h3>
            <p className="text-slate-600 mb-6">Monitor assigned machinery and ensure safe operating conditions on the ground.</p>
            <ul className="space-y-3">
              {[
                "Real-time sensor charts", 
                "Instant alert notifications", 
                "Device status tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* admin Card */}
          <div className="group relative bg-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server className="w-32 h-32 text-indigo-400" />
            </div>
            <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">System Admins</h3>
            <p className="text-slate-400 mb-6">Full control to configure devices, manage users, and oversee network health.</p>
            <ul className="space-y-3">
              {[
                "Device provisioning & lifecycle", 
                "User access management", 
                "System-wide health logs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* workflow */}
      <section className="bg-white border-y border-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Streamlined Workflow</h2>
               <p className="text-slate-600 max-w-xl">From device connection to actionable insights, the process is seamless.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
            
            {[
              { icon: Cpu, title: "Connect", desc: "Register IoT devices to the secure network." },
              { icon: Server, title: "Process", desc: "Data is streamed and analyzed in the cloud." },
              { icon: BarChart3, title: "Visualize", desc: "View live charts on your dashboard." },
              { icon: BellRing, title: "Act", desc: "Receive alerts for critical thresholds." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  <span className="text-blue-600 mr-2">{idx + 1}.</span>{step.title}
                </h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* indicators */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">System Indicators</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Wifi, title: "Online", desc: "System Active", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            { icon: WifiOff, title: "Offline", desc: "No Signal", color: "text-slate-500", bg: "bg-slate-50", border: "border-slate-200" },
            { icon: BatteryWarning, title: "Low Battery", desc: "< 15% Remaining", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
            { icon: AlertTriangle, title: "Critical", desc: "Action Required", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border ${item.border} ${item.bg} text-center hover:scale-105 transition-transform duration-300`}
            >
              <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
              <h4 className={`font-bold text-lg ${item.color}`}>{item.title}</h4>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-70 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white py-8 border-t border-slate-200 text-center">
        <p className="text-slate-500">© 2025 IoT Monitor Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;