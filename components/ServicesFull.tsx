import EditorialAccordion from "@/components/system/EditorialAccordion";
import { SERVICES } from "@/lib/content";

export default function ServicesFull() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <EditorialAccordion items={SERVICES} tone="onDark" />
      </div>
    </section>
  );
}
