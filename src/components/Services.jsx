import Button from "@/components/ui/Button";
import MedicalBillingSolutions from "@/components/MedicalBillingSolutions";

export default function Services() {
  return (
    <section className="border-b border-emerald-200 py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MedicalBillingSolutions />

        <div className="mt-8 sm:mt-10 flex justify-center">
          <Button
            title="View All Services"
            href="/service"
            variant="primary"
            size="md"
            className="w-full sm:w-auto text-center justify-center"
          />
        </div>
      </div>
    </section>
  );
}