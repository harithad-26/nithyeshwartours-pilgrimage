import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Insights — Admin Dashboard",
};

const STATS = [
  {
    label: "TOTAL BOOKINGS",
    value: "1,284",
    sub: "+12.5% vs last month",
    subColor: "text-[#15803d]",
    bg: "bg-white",
    valueColor: "text-midnight",
    labelColor: "text-[#74777f]",
    shadow: "shadow-[0px_10px_30px_0px_rgba(0,31,63,0.04)]",
    colSpan: "lg:col-span-4",
  },
  {
    label: "GROSS REVENUE",
    value: "₹48.2M",
    sub: "All-time pilgrim volume",
    subColor: "text-gold",
    bg: "bg-navy",
    valueColor: "text-gold",
    labelColor: "text-white/60",
    shadow: "shadow-[0px_10px_15px_rgba(0,31,63,0.04)]",
    colSpan: "lg:col-span-5",
  },
  {
    label: "ACTIVE INQUIRIES",
    value: "42",
    sub: "Awaiting response from guides",
    subColor: "text-[#43474e]",
    bg: "bg-[#f4f3f2] border-l-2 border-[rgba(115,92,0,0.2)]",
    valueColor: "text-midnight",
    labelColor: "text-[#74777f]",
    shadow: "",
    colSpan: "lg:col-span-3",
  },
];

type StatusKey = "PENDING" | "REPLIED" | "URGENT" | "CLOSED";

const STATUS_STYLES: Record<StatusKey, string> = {
  PENDING: "bg-[rgba(254,214,91,0.3)] text-[#745c00]",
  REPLIED: "bg-[#dcfce7] text-[#15803d]",
  URGENT: "bg-[#ffdad6] text-[#ba1a1a]",
  CLOSED: "bg-[#e9e8e7] text-[#74777f]",
};

const INQUIRIES = [
  { name: "Amitabh Varma", destination: "Varanasi Deep Dive", status: "PENDING" as StatusKey, date: "2 hours ago" },
  { name: "Sarah Jenkins", destination: "Rishikesh Yoga", status: "REPLIED" as StatusKey, date: "5 hours ago" },
  { name: "Priyancka Nair", destination: "Amarnath Yatra", status: "URGENT" as StatusKey, date: "Yesterday" },
  { name: "Rahul Mehra", destination: "Chardham Pilgrimage", status: "CLOSED" as StatusKey, date: "Oct 24, 2024" },
];

const NAV_ITEMS = [
  { label: "Dashboard", active: true, icon: DashboardIcon },
  { label: "Packages", active: false, icon: PackagesIcon },
  { label: "Users", active: false, icon: UsersIcon },
  { label: "Inquiries", active: false, icon: InquiriesIcon },
  { label: "Reviews", active: false, icon: ReviewsIcon },
];

function DashboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function PackagesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1L17 5v8L9 17 1 13V5L9 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 1v16M1 5l8 4 8-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 15c0-4 3.6-7 8-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 15c0-3-2.7-5-6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function InquiriesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 5l8 5 8-5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ReviewsIcon() {
  return (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" aria-hidden="true">
      <path d="M10 1l2.4 5 5.6.7-4 4 .9 5.6L10 14l-4.9 2.3.9-5.6L2 6.7l5.6-.7L10 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-[288px] shrink-0 bg-navy flex flex-col justify-between min-h-screen sticky top-0">
        {/* Brand */}
        <div className="px-8 pt-10 pb-2">
          <p className="font-serif text-xl font-bold tracking-[0.1em] uppercase text-gold leading-tight">
            NITHYESHWAR
          </p>
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/60 mt-1">
            ADMIN CONSOLE
          </p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4 flex flex-col gap-2" aria-label="Admin navigation">
          {NAV_ITEMS.map(({ label, active, icon: Icon }) => (
            <Link
              key={label}
              href={`/admin/${label.toLowerCase()}`}
              className={`flex items-center gap-4 px-4 py-3 rounded transition-colors duration-200 min-h-[44px] ${
                active
                  ? "bg-gold text-[#745c00]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="shrink-0 w-[22px] flex items-center justify-center">
                <Icon />
              </span>
              <span className="font-sans text-base font-medium tracking-[0.025em]">{label}</span>
            </Link>
          ))}
        </nav>

        {/* User footer */}
        <div className="border-t border-white/5 px-8 py-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-dark flex items-center justify-center shrink-0 overflow-hidden">
              <span className="font-serif text-sm text-white">A</span>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-surface">Admin User</p>
              <button className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-12">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-gold-dark mb-2">
                INTERNAL MANAGEMENT
              </p>
              <h1 className="font-serif text-[36px] text-midnight font-normal leading-tight">
                Sacred Insights
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search records..."
                  className="bg-[#f4f3f2] pl-10 pr-4 py-2 font-sans text-sm text-[#6b7280] placeholder:text-[#6b7280] outline-none rounded w-64 min-h-[44px]"
                  aria-label="Search records"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" stroke="#6b7280" strokeWidth="1.5" />
                  <path d="M13 13l3 3" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <button className="bg-midnight text-surface font-sans text-sm font-semibold px-6 py-2.5 rounded flex items-center gap-2 hover:bg-navy transition-colors min-h-[44px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1v8M4 6l3 3 3-3M1 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Export Report
              </button>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {STATS.map((s) => (
              <div key={s.label} className={`${s.colSpan} ${s.bg} ${s.shadow} px-8 pt-8 pb-11`}>
                <p className={`font-sans text-xs tracking-[0.1em] uppercase ${s.labelColor} mb-2`}>
                  {s.label}
                </p>
                <p className={`font-serif text-5xl ${s.valueColor} font-normal leading-tight mt-2`}>
                  {s.value}
                </p>
                <p className={`font-sans text-xs font-bold mt-2 ${s.subColor}`}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Inquiries table — 2/3 */}
            <section className="lg:col-span-2" aria-labelledby="inquiries-heading">
              <div className="flex items-center justify-between mb-6">
                <h2 id="inquiries-heading" className="font-serif text-xl text-midnight font-normal">
                  Recent Inquiries
                </h2>
                <button className="font-sans text-xs font-bold tracking-[0.1em] uppercase text-gold-dark hover:text-midnight transition-colors">
                  VIEW ALL
                </button>
              </div>

              <div className="bg-white shadow-[0px_10px_30px_0px_rgba(0,31,63,0.04)] overflow-hidden">
                <table className="w-full" aria-label="Recent inquiries">
                  <thead>
                    <tr className="bg-[#eeeeed]">
                      {["PILGRIM NAME", "DESTINATION", "STATUS", "DATE", "ACTIONS"].map((h, i) => (
                        <th
                          key={h}
                          scope="col"
                          className={`font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#74777f] px-6 py-4 ${
                            i === 4 ? "text-right" : "text-left"
                          }`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {INQUIRIES.map((row, i) => (
                      <tr key={row.name} className={i > 0 ? "border-t border-[rgba(196,198,207,0.1)]" : ""}>
                        <td className="px-6 py-5">
                          <span className="font-sans text-sm font-semibold text-midnight">{row.name}</span>
                        </td>
                        <td className="px-6 py-5">
                          <span className="font-sans text-sm text-[#43474e]">{row.destination}</span>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`font-sans text-[10px] font-bold uppercase px-3 py-0.5 rounded-full ${STATUS_STYLES[row.status]}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <span className="font-sans text-xs text-[#74777f]">{row.date}</span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button
                            className="font-sans text-[#74777f] hover:text-midnight px-2 min-h-[44px] min-w-[44px]"
                            aria-label={`Actions for ${row.name}`}
                          >
                            ···
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Side cards — 1/3 */}
            <div className="flex flex-col gap-6">
              {/* Guide Spotlight */}
              <div className="bg-[#f4f3f2] border border-[rgba(196,198,207,0.1)] rounded-lg p-6 flex flex-col gap-4">
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#74777f]">
                  GUIDE SPOTLIGHT
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-14 h-14 rounded-xl bg-gold-dark overflow-hidden shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xl text-white">A</span>
                  </div>
                  <div>
                    <p className="font-sans text-base font-bold text-midnight">Acharya Shlok</p>
                    <p className="font-sans text-xs text-[#43474e] mt-0.5">4.9/5 Rating (120 tours)</p>
                  </div>
                </div>
                <button className="w-full border border-gold-dark font-sans text-xs font-bold text-gold-dark py-2.5 rounded-sm hover:bg-gold-dark hover:text-white transition-colors min-h-[44px]">
                  View Performance
                </button>
              </div>

              {/* Generate Itinerary Draft */}
              <div className="bg-gold rounded-sm p-8 flex flex-col gap-4">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" aria-hidden="true">
                  <path d="M16.5 2l3 7 7 1-5 5 1.5 7.5L16.5 19l-6.5 3.5 1.5-7.5-5-5 7-1L16.5 2z" stroke="#745c00" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 28l3-3M25 28l-3-3M16.5 30v-4" stroke="#745c00" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h3 className="font-serif text-lg text-[#745c00] font-normal mt-2 leading-snug">
                  Generate Itinerary Draft
                </h3>
                <p className="font-sans text-xs text-[#745c00]/75 leading-relaxed">
                  Use AI to draft a 7-day pilgrimage path based on seasonal traffic and guide availability.
                </p>
                <button className="bg-navy text-surface font-sans text-xs font-bold tracking-[0.1em] uppercase px-6 py-3 rounded-sm hover:bg-midnight transition-colors min-h-[44px]">
                  START DRAFT
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[rgba(196,198,207,0.1)] px-12 py-10 flex items-center justify-between">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#74777f]">
            © 2024 NITHYESHWAR TOURS. MANAGEMENT INTERFACE V2.4.0
          </p>
          <div className="flex gap-8">
            <button className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#74777f] hover:text-midnight transition-colors">
              SUPPORT CENTER
            </button>
            <button className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#74777f] hover:text-midnight transition-colors">
              PRIVACY POLICY
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
