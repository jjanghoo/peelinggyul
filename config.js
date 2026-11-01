/* 오늘의 귤 설정 — 서비스를 만든 뒤 아래 값만 채우면 됩니다. 비워 두면 로그인·카카오 공유 없이 지금처럼 동작해요.
   (여기 넣는 값은 모두 브라우저에 공개돼도 되는 '공개 키'예요. 비밀 키는 절대 넣지 마세요.) */
window.GYUL_CONFIG = {
  kakaoKey: '8dc2cfe4b5115a795c1b832652fe8a20',        // 카카오 개발자 > 내 애플리케이션 > 앱 키 > JavaScript 키
  supabaseUrl: 'https://jgartnicuexmpaqwveil.supabase.co',     // Supabase > Project Settings > API > Project URL  (https://xxxx.supabase.co)
  supabaseAnon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpnYXJ0bmljdWV4bXBhcXd2ZWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1MjQ2MDksImV4cCI6MjEwOTEwMDYwOX0.esLwKsBH5zcE6mx4sOpOwvK2h_TSYjFiTl321D6E9I0',    // Supabase > Project Settings > API > anon public 키
  lineChannelId: '2012317936'    // LINE Developers > LINE Login 채널 > Channel ID
};
