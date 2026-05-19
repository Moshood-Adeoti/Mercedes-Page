 
import { useContext, useState } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import { MdAddIcCall, MdOutlineEmail } from "react-icons/md"
import { FaRocketchat } from "react-icons/fa"

const faqs = [
  {
    question: "How do I reset my password?",
    answer: "Go to Settings → Security → Reset Password and follow the on-screen prompts.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach us via Live Chat, Email, or by filling out the contact form below.",
  },
  {
    question: "Where can I find tutorials?",
    answer: "Visit our Documentation section for step-by-step video and written guides.",
  },
  {
    question: "How do I report a bug?",
    answer: "Use the 'Report a Bug' card above or email us with a description and screenshots.",
  },
]

const helpCards = [
  { icon: "📖", title: "Documentation",  desc: "Browse guides and tutorials"     },
  { icon: "💬", title: "Live Chat",       desc: "Chat with our support team now"  },
  { icon: "📧", title: "Email Support",   desc: "Get a reply within 24 hours"     },
  { icon: "🐛", title: "Report a Bug",    desc: "Help us improve by flagging issues"},
]

export default function GetHelp() {
  const { theme } = useContext(ThemeContext)
  const [openFaq, setOpenFaq] = useState(null)


  const cardStyle = `  flex flex-col gap-1 px-5 py-4 rounded-lg border cursor-pointer transition-all duration-200 hover:-translate-y-1
    ${theme === "dark" ? "bg-gray-800 border-gray-600 text-white hover:border-blue-500" : "bg-white border-black text-black hover:border-blue-500"}
  `

  const sectionCardStyle = ` px-4 py-3 rounded-lg border mb-3 cursor-pointer  transition-all duration-200  ${theme === "dark"
      ? "bg-gray-800 border-gray-600 text-white"
      : "bg-white border-black text-black"}
  `

  const contactBtnStyle = ` flex items-center gap-3 w-full px-4 py-3 rounded-lg border font-semibold text-[16px] mb-3 transition-all duration-200 hover:border-blue-500
    ${theme === "dark"
      ? "bg-gray-800 border-gray-600 text-white"
      : "bg-white border-black text-black"}
  `

  return (
    <div
      className={`min-h-screen w-full transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    > 
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

       
      <h2 className="text-center text-2xl md:text-3xl mb-10 underline font-bold">
        Get Help
      </h2>

      <div className="px-8 max-w-4xl mx-auto">

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {helpCards.map((card) => (
            <div key={card.title} className={cardStyle}>
              <span className="text-3xl">{card.icon}</span>
              <p className="font-bold text-[16px]">{card.title}</p>
              <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={sectionCardStyle}
            onClick={() => setOpenFaq(openFaq === index ? null : index)}>
            <div className="flex justify-between items-center font-semibold text-[16px]">
              {faq.question}
              <span>{openFaq === index ? "▲" : "▼"}</span>
            </div>

  {openFaq === index && (
      <p className={`mt-2 text-sm font-normal ${ theme === "dark" ? "text-gray-400" : "text-gray-600" }`}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}

       
        <h3 className="text-xl font-bold mt-8 mb-4">Contact Us</h3>

        <button className={contactBtnStyle}>
          <span className="text-xl"><MdOutlineEmail /></span>
          adeotimoshood9@gmail.com
        </button>

        <button className={contactBtnStyle}>
          <span className="text-xl"><MdAddIcCall /></span>
          +234 7069146405
        </button>

        <button className={contactBtnStyle}>
          <span className="text-xl"><FaRocketchat /></span>
          Start a Live Chat
          <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            Online
          </span>
        </button>

      </div>
    </div>   
    )
}            