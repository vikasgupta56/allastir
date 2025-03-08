import { useContext, useEffect, useState } from "react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { CartContext } from "@/utils/context/Wrapper";

// Set the correct worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl, onClose }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const {setIsPdf} = useContext(CartContext)

    const [pageWidth, setPageWidth] = useState(350);

    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth < 640) {
                setPageWidth(350);
            } else if (window.innerWidth >= 640 && window.innerWidth < 1000) {
                setPageWidth(600);
            } else {
                setPageWidth(1000);
            }
        };

        updateWidth(); // Set initial width
        window.addEventListener("resize", updateWidth);
        
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // Function to handle document load
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    // Function to go to the next page
    const goToNextPage = () => {
        if (pageNumber < numPages) setPageNumber(pageNumber + 1);
    };

    // Function to go to the previous page
    const goToPrevPage = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    };

    // Function to download the PDF
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Allaster_Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="fixed top-0 left-0 z-[999] bg-[#000000e2] w-full h-[100dvh] flex items-center justify-center flex-col p-4">
            {/* Close Button */}
            <button onClick={()=>setIsPdf(false)} className="absolute z-[999] top-6 right-6 bg-white w-[35px] h-[35px] flex items-center justify-center rounded-full shadow-lg">
            <i className="ri-close-line"></i>
            </button>
            
            {/* PDF Viewer */}
            <div className="sm:w-[350px] md:w-[600px] w-[1000px] sm:h-[35vh] md:h-[65vh] h-[100vh] flex items-center justify-center bg-white shadow-lg rounded-lg p-4 overflow-hidden">
                <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} className="w-full h-full flex items-center justify-center">
                    <Page pageNumber={pageNumber} className="w-full h-full" renderTextLayer={false} renderAnnotationLayer={false} width={pageWidth} />
                </Document>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between sm:flex-wrap w-full max-w-4xl pt-4">
                <div className="flex gap-4 items-center">
                    <button className="bg-[#1863AB] sm:mb-[2vw] text-sm py-2 px-4 rounded-md text-white disabled:opacity-50" onClick={goToPrevPage} disabled={pageNumber === 1}>
                        Previous
                    </button>
                    <span className="text-white text-sm">
                        Page {pageNumber} of {numPages}
                    </span>
                    <button className="bg-[#1863AB] sm:mb-[2vw] text-sm py-2 px-4 rounded-md text-white disabled:opacity-50" onClick={goToNextPage} disabled={pageNumber === numPages}>
                        Next
                    </button>
                </div>
                {/* Download Button */}
                <button className="bg-[#1863AB] sm:mb-[2vw] text-sm py-2 px-4 rounded-md text-white" onClick={handleDownload}>
                    Download Now
                </button>
            </div>
        </div>
    );
};

export default PdfViewer;
