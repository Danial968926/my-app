import { ShieldCheck, FileText, ClipboardCheck, SearchCheck, Send, Microscope, Receipt, ShieldAlert, Building2, FileStack, PhoneCall, BarChart3, } from "lucide-react";

export const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Specialities",
        href: "/specialities",
    },
    {
        name: "Software",
        href: "/software",
    },
    {
        name: "Testimonials",
        href: "/testimonials",
    },
    {
        name: "Updates",
        href: "/updates",
    },
];

export const services = [
    {
        title: "Patient Eligibility",
        href: "/services/patient-eligibility",
        icon: ShieldCheck,
    },
    {
        title: "Medical Coding",
        href: "/services/medical-coding",
        icon: FileText,
    },
    {
        title: "Claim Creation",
        href: "/services/claim-creation",
        icon: ClipboardCheck,
    },
    {
        title: "Claim Scrubbing",
        href: "/services/claim-scrubbing",
        icon: SearchCheck,
    },
    {
        title: "Claim Transferred",
        href: "/services/claim-transferred",
        icon: Send,
    },
    {
        title: "Clinical Medical Laboratory",
        href: "/services/medical-laboratory",
        icon: Microscope,
    },
    {
        title: "EOB Posting",
        href: "/services/eob-posting",
        icon: Receipt,
    },
    {
        title: "Denial Management",
        href: "/services/denial-management",
        icon: ShieldAlert,
    },
    {
        title: "Clearing House",
        href: "/services/clearing-house",
        icon: Building2,
    },
    {
        title: "Patient Statements",
        href: "/services/patient-statements",
        icon: FileStack,
    },
    {
        title: "Patient Calls",
        href: "/services/patient-calls",
        icon: PhoneCall,
    },
    {
        title: "Collection Reports",
        href: "/services/collection-reports",
        icon: BarChart3,
    },
];