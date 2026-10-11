import Logo from "@/components/Logo";
import StatusDot from "@/components/system/StatusDot";

export default function Footer3() {
  return (
    <footer className="bg-ink pt-14 pb-8 text-paper/50">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 border-t border-paper/10 pt-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-5 max-w-[32ch] text-[14px] leading-relaxed text-paper/40">
              Software a medida para pymes industriales y de servicios de
              Barcelona.
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[12px] tracking-[0.03em] text-paper/40 uppercase sm:items-end">
            <span className="inline-flex items-center gap-2">
              <StatusDot />
              Barcelona / ES
            </span>
            <a
              href="mailto:hola@nublix.com"
              className="transition-colors duration-150 ease-out hover:text-paper"
            >
              hola@nublix.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-paper/10 pt-6">
          <span className="font-mono text-[11px] tracking-[0.03em] text-paper/30">
            © {new Date().getFullYear()} Nublix Digital Solutions, S.L.
          </span>
        </div>
      </div>
    </footer>
  );
}
