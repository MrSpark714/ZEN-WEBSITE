import FeedbackForm from './components/FeedbackForm';
import type { Metadata } from 'next';
import { Archivo_Black, JetBrains_Mono } from 'next/font/google';

const displayFont = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'ZEN — offline-first productivity workspace',
  description:
    'ZEN is a brutalist, offline-first productivity workspace for students and developers: markdown notes, exact-time task alarms, and a credit-weighted attendance tracker that syncs a whole cohort with one JSON file.',
};

const REPO_URL = 'https://github.com/MrSpark714/Zen-Mobile-Application';
const APK_URL = 'https://github.com/MrSpark714/Zen-Mobile-Application/releases/tag/v1.0.0';
const ISSUES_URL = 'https://github.com/MrSpark714/Zen-Mobile-Application/issues';

const PRESS_LG =
  'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform duration-100 hover:translate-x-[8px] hover:translate-y-[8px] hover:shadow-none active:translate-x-[8px] active:translate-y-[8px] active:shadow-none';
const PRESS_MD =
  'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none';
const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#FF2E9E]';
const PRESS_SUBMIT =
  'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-transform duration-100 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';
const FIELD =
  'w-full border-4 border-black bg-[#EDE8DC] px-3 py-2.5 text-sm text-black placeholder:text-black/40 outline-none focus:bg-white sm:text-base ' +
  FOCUS_RING;

export default function Page() {
  return (
    <div className={`${monoFont.className} min-h-screen bg-[#EDE8DC] text-black antialiased`}>
      {/* fake status bar, i3bar / waybar style */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b-4 border-black bg-black px-3 py-1.5 text-[11px] text-[#EDE8DC] sm:px-6 sm:text-xs">
        <div className="flex items-center gap-4">
          <span className="font-bold text-[#FFE600]">ZEN</span>
          <span className="hidden gap-3 sm:flex">
            <a href="#hero" className="opacity-70 transition-opacity hover:opacity-100">1:hero</a>
            <a href="#features" className="opacity-70 transition-opacity hover:opacity-100">2:features</a>
            <a href="#docs" className="opacity-70 transition-opacity hover:opacity-100">3:docs</a>
            <a href="#source" className="opacity-70 transition-opacity hover:opacity-100">4:source</a>
            <a href="#feedback" className="opacity-70 transition-opacity hover:opacity-100">5:feedback</a>
            <a href="#footer" className="opacity-70 transition-opacity hover:opacity-100">6:footer</a>
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="border border-[#21E6E6] px-1.5 py-0.5 text-[#21E6E6]">MODE: OFFLINE</span>
          <span className="hidden opacity-70 sm:inline">v0.9.2-alpha</span>
        </div>
      </div>

      <main>
        {/* HERO */}
        <header id="hero" className="relative overflow-hidden border-b-4 border-black px-4 py-16 sm:px-8 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-5xl">
            <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between border-b-4 border-black bg-[#FF2E9E] px-3 py-2">
                <span className="truncate text-xs font-bold sm:text-sm">~/zen --version</span>
                <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold sm:text-xs">
                  <span className="border-2 border-black bg-white px-1.5 leading-tight">-</span>
                  <span className="border-2 border-black bg-white px-1.5 leading-tight">□</span>
                  <span className="border-2 border-black bg-white px-1.5 leading-tight">x</span>
                </div>
              </div>

              <div className="px-5 py-10 sm:px-10 sm:py-14">
                <p className="mb-4 text-xs font-bold sm:text-sm">user@campus:~$ ./launch zen</p>
                <h1 className={`${displayFont.className} text-6xl leading-[0.9] tracking-tight sm:text-8xl md:text-9xl`}>
                  ZEN
                  <span className="motion-safe:animate-pulse text-[#FF2E9E]" aria-hidden="true">_</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
                  A brutalist, offline-first productivity workspace for students and developers.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={APK_URL}
                    className={`border-4 border-black bg-[#FFE600] px-6 py-4 text-center text-sm font-bold sm:text-base ${PRESS_LG} ${FOCUS_RING}`}
                  >
                    Download APK
                  </a>
                  <a
                    href={REPO_URL}
                    className={`border-4 border-black bg-white px-6 py-4 text-center text-sm font-bold sm:text-base ${PRESS_LG} ${FOCUS_RING}`}
                  >
                    View source on GitHub
                  </a>
                </div>

                <p className="mt-6 text-xs text-black/50 sm:text-sm">
                  Android · no account required · works with the screen off
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* FEATURES — tiled window manager grid */}
        <section id="features" className="border-b-4 border-black px-4 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 flex items-baseline justify-between gap-4 border-b-4 border-black pb-4">
              <h2 className={`${displayFont.className} text-3xl tracking-tight sm:text-4xl`}>Tiled by design</h2>
              <span className="hidden text-xs text-black/60 sm:inline">4 windows, 1 workspace</span>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* A — Quiet Mind (master pane) */}
              <div className="flex flex-col border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:col-span-2 md:row-span-2">
                <div className="flex items-center justify-between border-b-4 border-black bg-[#FF2E9E] px-3 py-2">
                  <span className="truncate text-xs font-bold sm:text-sm">~/notes.md</span>
                  <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold sm:text-xs">
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">-</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">□</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">x</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between px-5 py-6 sm:px-6 sm:py-8">
                  <div>
                    <h3 className={`${displayFont.className} text-2xl tracking-tight sm:text-3xl`}>Quiet Mind</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed sm:text-base">
                      Write in markdown and format as you type. Every note lands in a local Room
                      database — no account, no sync, nothing leaves the phone.
                    </p>
                  </div>
                  <span className="mt-6 inline-block w-fit border-2 border-black px-2 py-0.5 text-[10px] font-bold sm:text-xs">
                    #notes
                  </span>
                </div>
              </div>

              {/* B — The Grind */}
              <div className="flex flex-col border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between border-b-4 border-black bg-[#21E6E6] px-3 py-2">
                  <span className="truncate text-xs font-bold sm:text-sm">~/scheduler.sh</span>
                  <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold sm:text-xs">
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">-</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">□</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">x</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between px-5 py-6">
                  <div>
                    <h3 className={`${displayFont.className} text-xl tracking-tight sm:text-2xl`}>The Grind</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-base">
                      Set a task for the exact minute it matters. AlarmManager fires a real
                      notification to the status bar, open app or not.
                    </p>
                  </div>
                  <span className="mt-6 inline-block w-fit border-2 border-black px-2 py-0.5 text-[10px] font-bold sm:text-xs">
                    #tasks
                  </span>
                </div>
              </div>

              {/* C — Smart Attendance */}
              <div className="flex flex-col border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between border-b-4 border-black bg-[#FFE600] px-3 py-2">
                  <span className="truncate text-xs font-bold sm:text-sm">~/attendance.db</span>
                  <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold sm:text-xs">
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">-</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">□</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">x</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between px-5 py-6">
                  <div>
                    <h3 className={`${displayFont.className} text-xl tracking-tight sm:text-2xl`}>Smart Attendance</h3>
                    <p className="mt-3 text-sm leading-relaxed sm:text-base">
                      Percentage tracked by credit hour, not by class count. Get a heads-up 5
                      minutes before each lecture starts.
                    </p>
                  </div>
                  <span className="mt-6 inline-block w-fit border-2 border-black px-2 py-0.5 text-[10px] font-bold sm:text-xs">
                    #attendance
                  </span>
                </div>
              </div>

              {/* D — Cohort Sync (bottom split) */}
              <div className="flex flex-col border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:col-span-3">
                <div className="flex items-center justify-between border-b-4 border-black bg-[#FF7A1A] px-3 py-2">
                  <span className="truncate text-xs font-bold sm:text-sm">~/cohort.json</span>
                  <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold sm:text-xs">
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">-</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">□</span>
                    <span className="border-2 border-black bg-white px-1.5 leading-tight">x</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6 px-5 py-6 sm:flex-row sm:items-center">
                  <div>
                    <h3 className={`${displayFont.className} text-xl tracking-tight sm:text-2xl`}>Cohort Sync</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                      Export the whole semester timetable as one JSON file and drop it in the
                      class WhatsApp group. Everyone imports it in a tap — no retyping, no
                      account, no server in between.
                    </p>
                  </div>
                  <span className="inline-block w-fit shrink-0 border-2 border-black px-2 py-0.5 text-[10px] font-bold sm:text-xs">
                    #peer-to-peer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION / PRO-TIP — man page style */}
        <section id="docs" className="border-b-4 border-black px-4 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className={`${displayFont.className} mb-8 text-3xl tracking-tight sm:text-4xl`}>Read the manual</h2>

            <div className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between border-b-4 border-black bg-black px-3 py-2">
                <span className="truncate text-xs font-bold text-[#EDE8DC] sm:text-sm">
                  [ man zen-scheduler ]
                </span>
                <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold text-[#EDE8DC] sm:text-xs">
                  <span className="border-2 border-[#EDE8DC] px-1.5 leading-tight">-</span>
                  <span className="border-2 border-[#EDE8DC] px-1.5 leading-tight">□</span>
                  <span className="border-2 border-[#EDE8DC] px-1.5 leading-tight">x</span>
                </div>
              </div>

              <div className="px-5 py-8 text-sm leading-relaxed sm:px-8 sm:py-10 sm:text-base">
                <p className="text-xs font-bold text-black/60 sm:text-sm">NAME</p>
                <p className="mt-1 pl-4">
                  zen-scheduler — handling multi-day, mixed-hour subjects
                </p>

                <p className="mt-6 text-xs font-bold text-black/60 sm:text-sm">DESCRIPTION</p>
                <p className="mt-1 pl-4">
                  Handling Multi-Day, Mixed-Hour Subjects: If a subject has lectures of varying
                  lengths across the week (e.g., a 2-hour lecture on Monday and a 1-hour lecture
                  on Wednesday), you must create two separate schedule entries.
                </p>
                <ul className="mt-4 space-y-2 pl-4">
                  <li className="flex gap-2">
                    <span aria-hidden="true">-</span>
                    <span>Entry 1 (Monday): Set Credit Hours to 2.</span>
                  </li>
                  <li className="flex gap-2">
                    <span aria-hidden="true">-</span>
                    <span>Entry 2 (Wednesday): Set Credit Hours to 1.</span>
                  </li>
                </ul>

                <p className="mt-6 text-xs font-bold text-black/60 sm:text-sm">NOTES</p>
                <div className="mt-3 border-4 border-black bg-[#FFE600] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-5">
                  <p className="font-bold">! CRUCIAL RULE</p>
                  <p className="mt-2">
                    You must use the exact same Subject Name (character for character) for both
                    entries. ZEN&apos;s backend SQL relational queries group by the exact string.
                    If the names match, the Analytics Engine will automatically merge them into a
                    single 3-credit course for your cumulative attendance percentage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN SOURCE / TERMINAL */}
        <section id="source" className="border-b-4 border-black px-4 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className={`${displayFont.className} mb-8 text-3xl tracking-tight sm:text-4xl`}>Open, on purpose</h2>

            <div className="border-4 border-black bg-[#0D0D0D] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between border-b-4 border-black bg-[#1a1a1a] px-3 py-2">
                <span className="truncate text-xs font-bold text-[#39FF14] sm:text-sm">
                  zen@kitty: ~/zen-android
                </span>
                <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold text-[#39FF14] sm:text-xs">
                  <span className="border-2 border-[#39FF14] px-1.5 leading-tight">-</span>
                  <span className="border-2 border-[#39FF14] px-1.5 leading-tight">□</span>
                  <span className="border-2 border-[#39FF14] px-1.5 leading-tight">x</span>
                </div>
              </div>
              <pre className="overflow-x-auto px-5 py-6 text-xs leading-relaxed text-[#39FF14] sm:text-sm">
                <span>{`$ git clone ${REPO_URL}.git
$ cd zen-android && ./gradlew installDebug

# architecture.md
Room DB       -> notes, tasks and attendance survive reboots and no signal
WorkManager   -> AlarmManager fires reminders with zero network calls
No backend    -> no account, no analytics, timetable never leaves the phone
`}</span>
                <span className="motion-safe:animate-pulse" aria-hidden="true">_</span>
              </pre>
            </div>
          </div>
        </section>

        {/* SUBMIT FEEDBACK — beta tester form */}
        <section id="feedback" className="border-b-4 border-black px-4 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className={`${displayFont.className} mb-8 text-3xl tracking-tight sm:text-4xl`}>
              Break something? Say something.
            </h2>

              <div className="border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
  <div className="flex items-center justify-between border-b-4 border-black bg-[#21E6E6] px-3 py-2">
    <span className="truncate text-xs font-bold sm:text-sm">~/feedback.sh</span>
    <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold sm:text-xs">
      <span className="border-2 border-black bg-white px-1.5 leading-tight">-</span>
      <span className="border-2 border-black bg-white px-1.5 leading-tight">□</span>
      <span className="border-2 border-black bg-white px-1.5 leading-tight">x</span>
    </div>
  </div>

  <FeedbackForm />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="footer" className="px-4 py-12 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 border-4 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className={`${displayFont.className} text-xl tracking-tight`}>ZEN</p>
            <p className="mt-1 text-xs text-black/60 sm:text-sm">
              Built at 2am between classes. Expect bugs — file them.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={REPO_URL}
              className={`border-4 border-black bg-white px-4 py-2 text-xs font-bold sm:text-sm ${PRESS_MD} ${FOCUS_RING}`}
            >
              GitHub
            </a>
            <a
              href={ISSUES_URL}
              className={`border-4 border-black bg-white px-4 py-2 text-xs font-bold sm:text-sm ${PRESS_MD} ${FOCUS_RING}`}
            >
              Report a bug
            </a>
            <a
              href={APK_URL}
              className={`border-4 border-black bg-[#FFE600] px-4 py-2 text-xs font-bold sm:text-sm ${PRESS_MD} ${FOCUS_RING}`}
            >
              Download APK
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
