import { useContext } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import {
  IoIosContact,
  IoIosLock,
  IoIosLogOut,
  IoIosMoon,
  IoIosText,
  IoIosNotifications,
  IoIosMail,
  IoIosEye,
} from "react-icons/io"

export default function Settings() {
  const { theme } = useContext(ThemeContext)

  const pageStyle = `min-h-screen w-full transition-all duration-300 ${
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
  }`

  const cardStyle = `rounded-lg border mb-4 divide-y ${
    theme === "dark"
      ? "bg-gray-800 border-gray-600 divide-gray-600"
      : "bg-white border-black divide-gray-200"
  }`

  const rowStyle = `flex items-center justify-between px-4 py-3`

  const iconStyle = `w-9 h-9 rounded-lg flex items-center justify-center text-xl ${
    theme === "dark" ? "bg-gray-700" : "bg-gray-100"
  }`

  const sectionLabel = `text-xs font-semibold uppercase tracking-widest mb-2 ${
    theme === "dark" ? "text-gray-400" : "text-gray-500"
  }`

  return (
    <div className={pageStyle}>

      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <h2 className="text-center text-3xl mb-10 underline font-bold">
        Settings
      </h2>

      <div className="px-4 md:px-8 max-w-xl mx-auto">

        {/* ── Appearance ── */}
        <p className={sectionLabel}>Appearance</p>
        <div className={cardStyle}>
          <LinkRow icon={<IoIosMoon />}  label="Dark mode"  rowStyle={rowStyle} iconStyle={iconStyle} />
          <LinkRow icon={<IoIosText />}  label="Large text" rowStyle={rowStyle} iconStyle={iconStyle} />
        </div>

        {/* ── Notifications ── */}
        <p className={sectionLabel}>Notifications</p>
        <div className={cardStyle}>
          <LinkRow icon={<IoIosNotifications />} label="Push notifications" rowStyle={rowStyle} iconStyle={iconStyle} />
          <LinkRow icon={<IoIosMail />}           label="Email updates"      rowStyle={rowStyle} iconStyle={iconStyle} />
        </div>

        {/* ── Privacy ── */}
        <p className={sectionLabel}>Privacy</p>
        <div className={cardStyle}>
          <LinkRow icon={<IoIosEye />}  label="Profile visibility" rowStyle={rowStyle} iconStyle={iconStyle} />
          <LinkRow icon={<IoIosLock />} label="Two-factor auth"    rowStyle={rowStyle} iconStyle={iconStyle} />
        </div>

        {/* ── Account ── */}
        <p className={sectionLabel}>Account</p>
        <div className={cardStyle}>
          <LinkRow icon={<IoIosContact />} label="Edit profile"    rowStyle={rowStyle} iconStyle={iconStyle} />
          <LinkRow icon={<IoIosLock />}    label="Change password" rowStyle={rowStyle} iconStyle={iconStyle} />
          <LinkRow icon={<IoIosLogOut />}  label="Log out" danger  rowStyle={rowStyle} iconStyle={iconStyle} />
        </div>

      </div>
    </div>
  )
}

function LinkRow({ icon, label, danger, rowStyle, iconStyle }) {
  return (
    <div className={`${rowStyle} cursor-pointer ${danger ? "text-red-500" : ""}`}>
      <div className="flex items-center gap-3">
        <span className={`${iconStyle} ${danger ? "bg-red-100" : ""}`}>
          {icon}
        </span>
        <p className="font-semibold text-[15px]">{label}</p>
      </div>
      <span className="text-lg">›</span>
    </div>
  )
}