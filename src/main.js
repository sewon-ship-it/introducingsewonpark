import './style.css'

// 언어별 콘텐츠
const content = {
  ko: {
    title: '박세원 - 자기소개',
    name: '박세원',
    subtitle: '초등교사 · AI·디지털 교육 전문가',
    educationTitle: '학력',
    experienceTitle: '이력',
    footer: '© 2025 박세원',
    education: [
      '이화여대 초등교육학과 19학번 수석졸업, 공동대표',
      '중앙대학교사범대학부속초등학교 정교사 23년도~',
      '서울대학교 AI융합교육학과 석사과정 재학중, 5기 학과 대표 (2025.9월~)'
    ],
    experiences: [
      '2024년 동작관악 초등 AI. 디지털 역량강화 연수 지원단 주강사(관0초.사0초.신0초. 봉0초.난0초.신0초.신00초. 본0초. 원0초)',
      '2024 Ai 디지털러닝 페스티벌 실습 영역 발표자(서울시교육청 최고 등급 전문가 디지털 배지 수령)',
      '2024 교육부 교실혁명 선도교사',
      '2024 AIEDAP 마스터 교원 승급',
      '2023 AIEDAP 리더교원',
      '2023 AIEDAP 최종보고회 서울지역 리더교원 초등교사 2인 중 1인으로 초청',
      '동작관악교육지원청 미래교육지구 교원지원단',
      '동작관악 함성지원단(미래교육영역) 교사',
      '동작관악 2023. 2024 AI·에듀테크 선도교사단',
      '금성출판사 주최 <제1회 교육 분야 AI 활용 사례 및 아이디어 공모전> 우수상 수상(2024.09.01)',
      '교육부 터치교사단 3기 (2024.11~)',
      '교육부 터치교사단 서울특별시 초등 대표 2인 중 1인 (2024.11.26.~)',
      '교육부 \'디지털 인프라 가이드라인 검토 협의회\' 초청 및 참석(2024.12.12.)',
      '2024 동작관악 초등 AI 디지털 교과서 살펴보기 연수지원단(2025.01.13.~) -> 흑0초 보조강사 출강(2025. 2. 20)',
      'KERIS 주관 AIDT 수업설계안 우수 사례로 뽑혀 시도교육청 연수자료로 활용될 예정(2025.1 선정~)',
      '[네페스 컨소시엄] 광0고 선생님들 대상 출강 보조강사(AIDT수학)(2025.1.19)',
      '[네페스 컨소시엄] 태0초 선생님들 대상 출강 보조강사(교실혁명교육의 이해)(2025.1.20)',
      '2025 함성지원단 선발(AI디지털, Math Up, 진로교육, 생태전환교육) (발대식 25.04.16)',
      'KAIT 코딩활용능력1급 (파이썬)100점 (2025.04.11)',
      '2025 AI디지털 선도교사단 선정(2025.04.16)',
      '2025 동작관악교육지원청 교사 기후행동 365 단원 위촉(2025.04.17)',
      '2025 AI디지털러닝페스티벌 -실습 발표(바이브 코딩 관련. 당일 최고 수강인원) (2025.8.7)',
      '2025 AI선도교사단 GOLDENSTORY 공모전 합격. 전시(2025.11.22)(사회정서학습, 게임기반학습, 바이브코딩 관련)',
      '2025 마이크로러닝 직무연수 영상공모 최우수상(20251112 최종 선정)',
      '2025 AI에듀테크 선도교사단 성과공유회 참석_20251103',
      '한국 사립초 연합회 우수 교직원 해외연수 (예정) 20261111~19',
      '교수평현장지원단(교육과정 수업 평가 현장지원단) _초등 실과 20260122~23 (예정)'
    ]
  },
  en: {
    title: 'Se-won Park - Introduction',
    name: 'Se-won Park',
    subtitle: 'Elementary School Teacher · AI & Digital Education Expert',
    educationTitle: 'Education',
    experienceTitle: 'Experience',
    footer: '© 2025 Se-won Park',
    education: [
      'Graduated Summa Cum Laude from Ewha Womans University, Department of Elementary Education, Class of 2019, Co-Representative',
      'Certified Teacher at Chung-Ang University Elementary School (2023~)',
      'Master\'s Student in AI Convergence Education at Seoul National University, 5th Cohort Representative (September 2025~)'
    ],
    experiences: [
      '2024 Lead Instructor for Dongjak-Gwanak Elementary AI & Digital Competency Enhancement Training Support Team',
      '2024 AI Digital Learning Festival Practice Session Presenter (Received Seoul Metropolitan Office of Education\'s Highest Grade Expert Digital Badge)',
      '2024 Ministry of Education Classroom Revolution Leading Teacher',
      '2024 AIEDAP Master Teacher Promotion',
      '2023 AIEDAP Leader Teacher',
      '2023 Invited as one of 2 Seoul Region Leader Teacher Elementary School Teachers to AIEDAP Final Report Meeting',
      'Dongjak-Gwanak Office of Education Future Education District Teacher Support Team',
      'Dongjak-Gwanak Hamsung Support Team (Future Education Area) Teacher',
      'Dongjak-Gwanak 2023, 2024 AI & EdTech Leading Teacher Team',
      'Won Excellence Award at Geumseong Publishing\'s <1st AI Application Cases and Ideas Competition in Education> (2024.09.01)',
      'Ministry of Education Touch Teacher Team 3rd Cohort (2024.11~)',
      'Ministry of Education Touch Teacher Team Seoul Metropolitan City Elementary Representative (one of 2) (2024.11.26.~)',
      'Invited and Attended Ministry of Education \'Digital Infrastructure Guideline Review Conference\' (2024.12.12.)',
      '2024 Dongjak-Gwanak Elementary AI Digital Textbook Review Training Support Team (2025.01.13.~) -> Assistant Instructor at Heuk0 Elementary (2025. 2. 20)',
      'Selected as Excellent Case for KERIS AIDT Lesson Design Plan, to be used as training material for Provincial Offices of Education (2025.1 selection~)',
      '[NEPES Consortium] Assistant Instructor for Gwang0 High School Teachers (AIDT Mathematics) (2025.1.19)',
      '[NEPES Consortium] Assistant Instructor for Tae0 Elementary School Teachers (Understanding Classroom Revolution Education) (2025.1.20)',
      '2025 Hamsung Support Team Selection (AI Digital, Math Up, Career Education, Ecological Transition Education) (Launch Ceremony 25.04.16)',
      'KAIT Coding Utilization Level 1 (Python) 100 points (2025.04.11)',
      '2025 AI Digital Leading Teacher Team Selection (2025.04.16)',
      '2025 Dongjak-Gwanak Office of Education Teacher Climate Action 365 Member Appointment (2025.04.17)',
      '2025 AI Digital Learning Festival - Practice Presentation (Vibe Coding related. Highest attendance that day) (2025.8.7)',
      '2025 AI Leading Teacher Team GOLDENSTORY Competition Pass. Exhibition (2025.11.22) (Social-Emotional Learning, Game-Based Learning, Vibe Coding related)',
      '2025 Microlearning Job Training Video Competition Grand Prize (20251112 final selection)',
      '2025 AI EdTech Leading Teacher Team Performance Sharing Meeting Attendance_20251103',
      'Korea Private Elementary School Association Excellent Staff Overseas Training (Scheduled) 20261111~19',
      'Teaching-Learning Assessment Field Support Team (Curriculum, Teaching, Assessment Field Support Team) _Elementary Practical Arts 20260122~23 (Scheduled)'
    ]
  }
};

// 현재 언어 가져오기 (localStorage 또는 기본값 'ko')
let currentLang = localStorage.getItem('language') || 'ko';

// 언어 전환 함수
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  renderContent();
  updateHTMLAttributes(lang);
}

// HTML 속성 업데이트
function updateHTMLAttributes(lang) {
  document.documentElement.lang = lang;
  document.title = content[lang].title;
}

// 콘텐츠 렌더링 함수
function renderContent() {
  const langContent = content[currentLang];
  
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <header class="header">
        <button class="language-toggle" onclick="switchLanguage('${currentLang === 'ko' ? 'en' : 'ko'}')">
          ${currentLang === 'ko' ? 'English' : '한국어'}
        </button>
        <h1 class="name">${langContent.name}</h1>
        <p class="english-name">Se-won, Park</p>
        <p class="email">twinsewon@naver.com</p>
        <p class="subtitle">${langContent.subtitle}</p>
      </header>

      <section class="section">
        <h2 class="section-title">${langContent.educationTitle}</h2>
        <div class="content-box">
          ${langContent.education.map(edu => `<div class="item">${edu}</div>`).join('')}
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">${langContent.experienceTitle}</h2>
        <div class="content-box experience-list">
          ${langContent.experiences.map((exp, index) => `<div class="item experience-item"><span class="number">${index + 1}.</span> ${exp}</div>`).join('')}
        </div>
      </section>

      <footer class="footer">
        <p>${langContent.footer}</p>
      </footer>
    </div>
  `;
  
  // 전역 함수로 등록 (인라인 onclick을 위해)
  window.switchLanguage = switchLanguage;
}

// 초기 렌더링
updateHTMLAttributes(currentLang);
renderContent();
