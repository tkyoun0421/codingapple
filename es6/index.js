console.log(this)  // window

var 오브젝트 = {
  data : {
    함수: () => {
      console.log(this);
    }
  }
}

오브젝트.data.함수(); // window