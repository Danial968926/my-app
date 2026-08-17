import Button from "@/components/ui/Button";
import MedicalBillingSolutions from "@/components/MedicalBillingSolutions";

export default function Services() {
  return (
    <section className="border-b border-emerald-200 py-10">
      <div className="mx-auto max-w-7xl">
        <MedicalBillingSolutions />

        <div className="mt-5 flex justify-center">
          <Button
            title="View All Services"
            href="/service"
            variant="primary"
            size="md"
          />
        </div>
      </div>
    </section>
  );
}