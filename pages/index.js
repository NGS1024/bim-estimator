import { jsPDF } from "jspdf";
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef();

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.addFileToVFS("NanumGothic-Regular.ttf", ""); // Add your base64 font here
    doc.addFont("NanumGothic-Regular.ttf", "NanumGothic", "normal");
    doc.setFont("NanumGothic");
    doc.text("BIM 견적서 계산기", 10, 10);
    doc.save("견적서.pdf");
  };

  return (
    <div>
      <h1>BIM 견적서 계산기</h1>
      <input type="text" placeholder="연면적 (㎡)" ref={inputRef} />
      <button onClick={handleDownload}>PDF 다운로드</button>
    </div>
  );
}
