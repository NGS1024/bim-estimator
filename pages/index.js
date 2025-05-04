// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [projectName, setProjectName] = useState('');
  const [area, setArea] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>BIM Estimator</h1>
      <p>오조메타 BIM 견적서 자동 생성기입니다.</p>

      <div style={{ marginTop: '2rem' }}>
        <label>
          프로젝트 이름:<br />
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="예: 문화마을 A동"
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          연면적 (㎡):<br />
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="예: 1587"
            style={{ padding: '0.5rem', width: '100%' }}
          />
        </label>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <button
          onClick={() => alert(`프로젝트: ${projectName}, 연면적: ${area}㎡`)}
          style={{ padding: '0.8rem', fontWeight: 'bold' }}
        >
          견적 생성
        </button>
      </div>
    </div>
  );
}
