/* 
http://localhost:8081으로 접속하여 웹 페이지를 개발할 수 있게 되고 프록시 설정을 통해 Vue 개발용 서버가 처리하지 못하는 모든 요청은 8080 포트로 요청합니다. 
따라서, Vue 컴포넌트 내에서 스프링 부트 애플리케이션이 제공하는 API를 호출할 수 있게 됩니다.

Web Application 에서 Controller 없이도 url mapping 되어 index.html로 어떻게 가는지 궁금할텐데, spring-starter-web-tomcat 은 기본적으로 static 
파일 밑에 index.html을 읽어 들이도록 설정되어 있다. 
*/

module.exports = {
	//ES-LINT 설정 끄기
	lintOnSave : false,
    //outputDir : npm run build로 빌드 시에 파일이 생성되는 위치
    outputDir: '../src/main/resources/static',
	//indexPath : index.html 파일이 생성될 위치
  	//indexPath: "../static/index.html",
    devServer: {
        port: 8081,  //스프링 부트 애플리케이션은 별다른 설정이 없으면 8080 포트를 사용. 따라서, Vue 개발용 서버는 8081 포트를 사용하도록 합니다.
        proxy: {     //proxy라는 것은 서로 연결점이 없거나 보안상의 이유로 직접 통신할 수 없는 외부 네트워크들을 간접적으로 연결시키는 중계인 역할
                     //Spring Boot(백엔드 서버)와 Vue.js(프론트엔드 서버)를 연결하기 위해 중계인인 Proxy
            '/api': {
                target: 'http://localhost:8080',	//target:개발 서버 주소를 타겟으로 지정
            }
        }
    }
}