import {
    ShieldCheck,
    FileText,
    ClipboardCheck,
    SearchCheck,
    Send,
    Microscope,
    Receipt,
    ShieldAlert,
    Building2,
    FileStack,
    PhoneCall,
    BarChart3,
} from "lucide-react";

export const services = [
    {
        slug: "patient-eligibility",
        icon: "ShieldCheck",
        title: "Patient Eligibility",
        para: "Patient eligibility verification is one of the most important steps in the medical billing process. At OSOZ Medical Billing Services, we verify insurance coverage before the patient's visit to ensure all information is accurate and up to date.",
        p: "Our specialists communicate directly with insurance providers to confirm eligibility, benefits, deductibles, co-payments, and coverage details. This proactive approach significantly reduces claim denials, prevents billing errors, and improves the overall revenue cycle.",
        paragraph: "By identifying coverage issues before services are provided, healthcare providers can focus on delivering quality patient care while we ensure accurate reimbursement and smoother claim processing.",
    },

    {
        slug: "medical-coding",
        icon: "FileText",
        title: "Medical Coding",
        para: "Our certified medical coders accurately convert diagnoses, procedures, and treatments into standardized ICD-10, CPT, and HCPCS codes.",
        p: "Accurate coding is essential for timely reimbursements and compliance with insurance regulations. Our coding experts stay updated with the latest coding guidelines to reduce denials and maximize revenue.",
        paragraph: "With our quality assurance process, healthcare providers receive accurate coding services that improve reimbursement rates while minimizing compliance risks.",
    },

    {
        slug: "claim-creation",
        icon: "ClipboardCheck",
        title: "Claim Creation",
        para: "We prepare and create clean electronic claims using accurate patient demographics, insurance information, and medical coding.",
        p: "Every claim undergoes multiple validation checks before submission to reduce errors and increase first-pass acceptance rates.",
        paragraph: "Our efficient workflow ensures claims are submitted quickly, helping practices receive faster reimbursements while reducing administrative burdens.",
    },

    {
        slug: "claim-scrubbing",
        icon: "SearchCheck",
        title: "Claim Scrubbing",
        para: "Claim scrubbing identifies coding errors, missing information, and payer-specific issues before claims are submitted.",
        p: "Our advanced validation process catches potential claim errors early, preventing unnecessary denials and payment delays.",
        paragraph: "With thorough claim scrubbing, healthcare providers experience higher clean-claim rates and significantly improved cash flow.",
    },

    {
        slug: "claim-transferred",
        icon: "Send",
        title: "Claim Transferred",
        para: "We securely transfer validated electronic claims to insurance payers through trusted clearinghouses.",
        p: "Our team continuously monitors claim transmission status to ensure successful delivery and immediate resolution of rejected claims.",
        paragraph: "Efficient claim transmission reduces turnaround time and helps practices receive reimbursements as quickly as possible.",
    },

    {
        slug: "medical-laboratory",
        icon: "Microscope",
        title: "Clinical Medical Laboratory",
        para: "Our laboratory billing services ensure accurate coding and billing for diagnostic testing and laboratory procedures.",
        p: "We manage payer-specific billing requirements while ensuring compliance with laboratory regulations and documentation standards.",
        paragraph: "Our expertise helps laboratories reduce denials, increase collections, and maintain compliance with industry standards.",
    },

    {
        slug: "eob-posting",
        icon: "Receipt",
        title: "EOB Posting",
        para: "We accurately post Explanation of Benefits (EOB) and Electronic Remittance Advice (ERA) information into your practice management system.",
        p: "Proper payment posting allows providers to identify underpayments, denials, and outstanding balances efficiently.",
        paragraph: "Accurate EOB posting improves financial reporting and provides complete visibility into your revenue cycle.",
    },

    {
        slug: "denial-management",
        icon: "ShieldAlert",
        title: "Denial Management",
        para: "Our denial management specialists investigate denied claims, identify root causes, and submit timely appeals.",
        p: "We continuously analyze denial trends to reduce future claim rejections and improve reimbursement performance.",
        paragraph: "Our proactive denial management process maximizes revenue recovery while improving the long-term financial health of your practice.",
    },

    {
        slug: "clearing-house",
        icon: "Building2",
        title: "Clearing House",
        para: "We manage electronic claim submission through secure clearinghouse networks for faster processing.",
        p: "Claims are validated before reaching insurance companies, reducing errors and improving first-pass acceptance rates.",
        paragraph: "Efficient clearinghouse management ensures seamless communication between providers and insurance companies.",
    },

    {
        slug: "patient-statements",
        icon: "FileStack",
        title: "Patient Statements",
        para: "We generate accurate patient statements that clearly explain balances, payments, and outstanding charges.",
        p: "Professional patient communication helps improve collection rates while maintaining a positive patient experience.",
        paragraph: "Clear and timely statements reduce confusion, increase payment compliance, and strengthen patient relationships.",
    },

    {
        slug: "patient-calls",
        icon: "PhoneCall",
        title: "Patient Calls",
        para: "Our dedicated support team assists patients by answering billing inquiries and explaining insurance balances.",
        p: "We provide courteous and professional communication that enhances patient satisfaction while reducing staff workload.",
        paragraph: "By handling billing-related phone calls, we allow healthcare providers to focus on patient care rather than administrative tasks.",
    },

    {
        slug: "collection-reports",
        icon: "BarChart3",
        title: "Collection Reports",
        para: "Our detailed collection reports provide insights into payment trends, outstanding balances, and revenue performance.",
        p: "We generate customized financial reports that help providers make informed business decisions and improve cash flow.",
        paragraph: "Comprehensive reporting allows practices to monitor financial performance, identify opportunities for improvement, and maximize profitability.",
    },
];