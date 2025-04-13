import React, { useState } from "react";
import emailjs from "emailjs-com"

const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const SERVICE_ID = "service_t2ximu9";
    const TEMPLATE_ID = "template_eylt9d4";
    const PUBLIC_KEY = "WhVnk_oMuIx95v_bU";
    

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            alert("Message Sent")
            setFormData({name:"", email:"", message:""})
        }).catch(() => alert("Oops Somthing went wrong"))
    }
  return (
    <section
    onSubmit={handleSubmit}
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <form action="" className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name.."
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}

            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full bg-white/5  border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message"
              onChange={(e) => setFormData({...formData, message: e.target.value})}

            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
