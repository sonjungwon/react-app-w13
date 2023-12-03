// React 라이브러리와 Component 클래스를 import합니다.
import React, { Component } from "react";

// 다른 컴포넌트들을 import합니다.
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

// 이미지 파일들을 import합니다.
import welcomeImg from "./img/welcome.jpeg";
import FlowChartImg from "./img/FlowChart.jpeg";
import V_ModelImg from "./img/V_Model.png";
import OSI7Img from "./img/OSI7.jpeg";
import MySQLImg from "./img/MySQL.png";

// App 클래스를 정의합니다. Component를 상속받습니다.
class App extends Component {
  // constructor를 통해 컴포넌트의 초기 상태를 설정합니다.
  constructor(props) {
    super(props); // Component 클래스의 생성자를 호출합니다.
    this.max_content_id = 4;
    this.state = {
      mode: "welcome", // 현재 모드를 'welcome'으로 설정합니다.
      selected_content_id: 0, // 선택된 content의 id를 0으로 초기화합니다.
      subject: { title: "정보처리기능사", sub: "전반적인 컴퓨터 공부를 위한 자격증" }, // 상단 제목에 대한 정보를 객체로 설정합니다.
      welcome: { title: "welcome", desc: "Hello, 정보처리기능사", image: welcomeImg }, // 환영 메시지와 이미지를 객체로 설정합니다.
      contents: [
        // 컨텐츠의 배열을 설정합니다. 각 항목은 id, title, desc, image 속성을 갖습니다.
        {
          id: 1,
          title: "프로그래밍 언어 활용",
          desc: "알고리즘 구현 : 개정 초반에 출제된 후 나오지 않고 있습니다. 알고리즘의 추천 학습 방법은 프로그래밍 코드 부분에서 나오는 부분과 함께 프로그램의 진행 순서와 방향에 대한 부분을 공부하면 좋습니다. 어떤 일을 처리하는 과정을 간단한 기호와 화살표로 도식화한 그림. 주로 컴퓨터 프로그래밍에서 프로그램이 돌아가는 과정을 그림으로 나타낼 때 사용되는 일종의 블록선도이다. 이 순서도를 그리는 데 특화된 자(尺)를 템플릿, 또는 컴퓨터 도형자라고 부른다. 프로그래밍 언어 활용 : 우선 공통적으로 들어가게 되는 연산자와 명령어들의 대한 파악을 우선적으로 한 후 각각 모듈별로 차이점을 공부하는 것을 추천해 드립니다.",
          image: FlowChartImg,
        },
        { id: 2, title: "애플리케이션 테스트 수행", desc: "애플리케이션 테스트 수행, 애플리케이션 결함 조치 : 개정된 후 필기 부분에서 학습해보지 못한 유형이기 때문에 당황스러울 수 있으나 일반적인 ㅍ로그램의 생성부터 테스트, 실행, 실행 후 조치에 관한 정의와 용어가 출제되기 때문에 이 부분을 집중적으로 공부하면 좋겠습니다. V 모델(V-model)은 소프트웨어 개발 프로세스로 폭포수 모델의 확장된 형태 중 하나로 볼 수 있다. 아래 방향으로 선형적으로 내려가면서 진행되는 폭포수 모델과 달리, 이 프로세스는 오른쪽 그림과 같이 코딩 단계에서 위쪽으로 꺾여서 알파벳 V자 모양으로 진행된다. V 모델은 개발 생명주기의 각 단계와 그에 상응하는 소프트웨어 시험 각 단계의 관계를 보여준다.", image: V_ModelImg },
        {
          id: 3,
          title: "응용 SW 기초 기술 활용",
          desc: "운영체제 기초 활용 : 생소한 문제가 자주 출제되었습니다. 기본적으로 공개되었던 NCS 자료에 없었던 상식 문제까지 출제되어서 당황할 수 있지만 반복적으로 단축키와 운영체제 명령어들이 출제되고 있으니 이에 집중하여 공부해 주세요. 네트워크 기초 활용 : 우선적으로 OSI 7 계층과 TCP 계층을 파악하는 것을 추천드립니다. 그 후에 관련 계층에 따른 프로토콜 부분이 꾸준히 출제되고 있으니 이 부분에 집중하여 공부하세요. 데이터베이스 기초 활용 : 기존에 필기 시험에서 학습해왔던 부분에서 정의와 용어에 대한 부분을 우선적으로 암기한 후 SQL부분을 추가하여 공부해 준다고 생각하면 좋습니다.",
          image: OSI7Img,
        },
        { id: 4, title: "SQL 활용", desc: "기본 SQL, 고급 SQL : 실제로 출제되고 있는 데이터베이스와 SQL 부분은 반복적으로 등장하는 문제가 많아서 접근하기 쉬운 만큼 틀렸을 때 점수 손실이 커서 주의 깊게 공부하는 것이 좋습니다. SQL 명령문의 경우 스펠링이나 형식이 틀리면 오답입니다. 이 직관적인 언어는 어느 데이터베이스에서나 기본으로 제공하기 때문에 배워두면 여러 곳에서 쓸데가 많다. 다만, NoSQL 계열에서는 SQL 문을 사용하지 않는다. 그러나 DBMS[2]벤더[3]에 따라 사용하는 SQL에는 다소 차이가 있다. 그래서 ANSI SQL이라고 하는 표준 SQL 구문이 있으나 DBMS 시장을 독식하고 있는 오라클이 잘 지키지 않아서 거기다가 오픈소스 DBMS인 MySQL도 표준 따위는 지키질 않는다. 현실은 시궁창. 최근 인기를 얻고 있는 PostgreSQL은 표준 SQL을 잘 지키고 있다. 일반적으로 사용하는 데이터베이스는 RDB(관계형 데이터베이스)[4]이며, RDB에서 데이터 처리는 데이터 모음인 테이블[5]을 기준으로 이루어지기 때문에 SQL 역시 테이블을 염두에 두고 읽으면 이해하기 쉽다.", image: MySQLImg },
      ],
    };
  }

  getReadContent() {
    var i = 0;
    // contents 배열을 순회하여 선택된 content의 정보를 찾습니다.
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title,
      _desc,
      _image,
      _article = null;
    // 현재 모드에 따라서 title, desc, image를 결정합니다.
    if (this.state.mode === "welcome") {
      // 모드가 'welcome'일 때
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
      _article = (
        <ReadContent title={_title} desc={_desc} img={_image}></ReadContent>
      );
    } else if (this.state.mode === "read") {
      // 모드가 'read'일 때
      var _content = this.getReadContent();

      _article = (
        <ReadContent
          title={_content.title}
          desc={_content.desc}
          img={_content.image}
        ></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
              image: "",
            });
            this.setState({ contents: _contents });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === "update") {
      var _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({ contents: _contents, mode: "read" });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  // render 함수는 컴포넌트가 화면에 렌더링될 때 호출됩니다.
  render() {
    // 최종적으로 렌더링될 JSX를 return합니다.
    return (
      <div className="App">
        {/* Subject 컴포넌트는 웹사이트의 제목 부분을 렌더링합니다. */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" }); // 클릭 시 mode를 'welcome'으로 설정합니다.
          }.bind(this)}
        ></Subject>
        {/* TOC 컴포넌트는 Table of Contents를 렌더링합니다. */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read", // 클릭 시 mode를 'read'로 설정합니다.
              selected_content_id: Number(id), // 선택된 컨텐츠의 id를 설정합니다.
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("really?")) {
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while (i < _contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i = i + 1;
                }
              }
              this.setState({ mode: "welcome", contents: _contents });
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        ></Control>
        {/* Content 컴포넌트는 선택된 컨텐츠의 내용과 이미지를 렌더링합니다. */}
        {this.getContent()}
      </div>
    );
  }
}

// App 컴포넌트를 export합니다. 다른 파일에서 App 컴포넌트를 사용할 수 있게 됩니다.
export default App;
