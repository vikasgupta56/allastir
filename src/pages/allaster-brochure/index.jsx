import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/pdf/PdfViewer"), { ssr: false });

const PdfPage = () => {
    return (
        <div>
            <PdfViewer fileUrl={"/Allaster_Brochure.pdf"}/>
        </div>
    );
};

export default PdfPage;
