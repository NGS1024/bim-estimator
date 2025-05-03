
import jsPDF from "jspdf";
import "./../fonts/NanumGothic-normal";

export default function Home() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.addFileToVFS("NanumGothic.ttf", window.NanumGothicNormal);
    doc.addFont("NanumGothic.ttf", "NanumGothic", "normal");
    doc.setFont("NanumGothic");
    doc.setFontSize(14);
    doc.text("BIM 견적서 계산 결과", 20, 20);
    doc.text("총 연면적: 840,000 ㎡", 20, 40);
    doc.text("설계비: 60,615,020.76 원", 20, 60);
    doc.text("BIM 비용: 6,061,502.07 원", 20, 80);
    doc.save("bim-estimate.pdf");
  };

  return (
    <div>
      <h1>BIM 견적서 계산기</h1>
      <button onClick={generatePDF}>PDF 다운로드</button>
    </div>
  );
}
