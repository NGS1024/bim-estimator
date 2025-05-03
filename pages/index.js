import { useState } from "react";
import jsPDF from "jspdf";

export default function Home() {
  const [area, setArea] = useState(0);
  const [excludedArea, setExcludedArea] = useState(0);
  const [unitCost, setUnitCost] = useState(840000);
  const [designRate, setDesignRate] = useState(4.2623);
  const [bimLevel, setBimLevel] = useState("A");

  const bimRates = {
    A: 10,
    B: 20,
    C: 30,
    D1: 40,
    D2: 50,
    D3: 60,
    E: 70,
  };

  const effectiveArea = area - excludedArea;
  const constructionCost = effectiveArea * unitCost;
  const designCost = (constructionCost * designRate) / 100;
  const bimCost = (designCost * bimRates[bimLevel]) / 100;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("BIM 견적서", 20, 20);
    doc.text(`총 연면적: ${area} ㎡`, 20, 40);
    doc.text(`제외 면적: ${excludedArea} ㎡`, 20, 50);
    doc.text(`적용 면적: ${effectiveArea} ㎡`, 20, 60);
    doc.text(`공사비 단가: ${unitCost.toLocaleString()} 원/㎡`, 20, 70);
    doc.text(`총 공사비: ${constructionCost.toLocaleString()} 원`, 20, 80);
    doc.text(`설계비 (${designRate}%): ${designCost.toLocaleString()} 원`, 20, 90);
    doc.text(`BIM 항목 (${bimLevel}) 요율 ${bimRates[bimLevel]}%`, 20, 100);
    doc.text(`BIM 모델링 용역비: ${bimCost.toLocaleString()} 원`, 20, 110);
    doc.save("BIM_견적서.pdf");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>BIM 견적서 계산기</h1>
      <div>
        <input type="number" placeholder="총 연면적 (㎡)" onChange={(e) => setArea(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" placeholder="제외 면적 (㎡)" onChange={(e) => setExcludedArea(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" placeholder="공사비 단가 (원/㎡)" value={unitCost} onChange={(e) => setUnitCost(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" placeholder="설계비율 (%)" value={designRate} onChange={(e) => setDesignRate(Number(e.target.value))} />
      </div>
      <div>
        <select value={bimLevel} onChange={(e) => setBimLevel(e.target.value)}>
          <option value="A">A - 일반 BIM (10%)</option>
          <option value="B">B - 정밀 BIM (20%)</option>
          <option value="C">C - 시공 BIM (30%)</option>
          <option value="D1">D1 - 협업툴 제공 (40%)</option>
          <option value="D2">D2 - 시공기록 공유 (50%)</option>
          <option value="D3">D3 - 변경사항 반영 (60%)</option>
          <option value="E">E - 4D/5D 고급 BIM (70%)</option>
        </select>
      </div>
      <button onClick={handleDownloadPDF}>PDF 다운로드</button>
    </div>
  );
}