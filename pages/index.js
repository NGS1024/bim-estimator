import jsPDF from 'jspdf'

export default function Home() {
  const generatePDF = () => {
    const doc = new jsPDF()
    doc.text('BIM 견적서 자동 생성 예시', 10, 10)
    doc.save('bim-estimate.pdf')
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>BIM Estimator</h1>
      <p>오조메타 BIM 견적서 자동 생성기입니다.</p>
      <button onClick={generatePDF}>PDF 생성하기</button>
    </div>
  )
}
