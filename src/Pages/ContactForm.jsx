import { useRef } from "react";
import emailjs from '@emailjs/browser';
import rocket from '../assets/icons/Rocket.svg'
const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_3ndn6kp', 'template_0b4rqjc', form.current, {
                publicKey: 'nXM_lW2TEVYuCOo1E',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <form className="flex flex-col space-y-3 border border-[#ffffff20] p-10 bg-[#111928d4] rounded-xl md:border-l-0 md:rounded-l-none" ref={form} onSubmit={sendEmail}>
                <h1 className="flex gap-2 font-bold text-2xl">Email Me
                    <img className="w-5" src={rocket} alt="" />
                </h1>
                <input className="p-3 bg-transparent  border border-[#ffffff20] rounded-xl" type="text" placeholder="Your Name" name="user_name" />
                <input className="p-3 bg-transparent border border-[#ffffff20] rounded-xl" type="email" placeholder="Your Email" name="user_email" />
                <input className="p-3 bg-transparent border border-[#ffffff20] rounded-xl" type="text" placeholder="Subject" name="user_email" />
                <textarea className="p-3 bg-transparent border border-[#ffffff20] rounded-xl" rows={3} placeholder="Message" name="message" />
                <input className="cursor-pointer text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;