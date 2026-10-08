import Logo from "./Logo";
import StatusDot from "./system/StatusDot";
import LogoLockup from "./system/LogoLockup";

export default function Footer() {
  return (
    <footer className="border-t border-dashed border-paper/10 bg-ink py-16 text-paper/50 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <LogoLockup />

        <div className="mt-12 flex flex-col gap-6 border-t border-dashed border-paper/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <div className="flex flex-col gap-2 font-mono text-[12px] tracking-[0.03em] uppercase sm:flex-row sm:items-center sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <StatusDot />
              Barcelona / ES
            </span>
            <span>
              © {new Date().getFullYear()} Nublix Digital Solutions, S.L.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
