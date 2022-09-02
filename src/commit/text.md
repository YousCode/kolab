<div id="app">
  
  <span
    class="prev"
    @click="move(-1)"
  >
    <i class="fa fa-chevron-left" aria-hidden="true"></i>
  </span>
  <span
    class="next"
    @click="move(1)"
  >
    <i class="fa fa-chevron-right" aria-hidden="true"></i>
  </span>
  <ul class="dots">
    <li 
      v-for="(dot, index) in slides"
      :class="{ active: ++index === active }"
      @click="jump(index)"
    ></li>
  </ul>
</div>



///
$primary: #221e21;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

body {
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: $primary;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid $primary;
  color: #7B37FF;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    backgroun-color:#4E00D0 ;
    color: #7B37FF;
    transform: scale(1.2);
  }
  
  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

.next {
  right: 0;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
}

.dots {
  position: fixed;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;
  
  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #7B37FF;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &.active {
      width: 22px;
      opacity: 1;
      backgroud: #4E00D0;
    }
  }
}

.slides {
  font-size: 40px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  
  @media (min-width: 600px) {
    font-size: 80px;
  }
  
  @media (min-width: 900px) {
    font-size: 140px;
  }
  
  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  
  .slide-in {
    opacity: 0;
    transform: translate(-40%, -50%);
  }
  
  .slide-in-active {
    transition-delay: 150ms;
  }
  
  .slide-out {
    opacity: 1;
    background-color: #7B37FF;
    
  }
  
  .slide-out-active {
    opacity: 0;
    transform: translate(-60%, -50%);
  }
}

.buttons {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  padding: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background: $primary;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.2;
    cursor: no-drop;
  }
}
///////
/*
Slider based on --> http://www.storytrail.co
*/

const app = new Vue({
  el: '#app',
  data: {
    slides: 4,
    active: 1
  },
  methods: {
    move(amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides) newActive = 1
      if (newIndex === 0) newActive = this.slides
      this.active = newActive || newIndex
    },
    jump(index) {
      this.active = index
    },
    addSlide() {
      this.slides = this.slides + 1
    },
    removeSlide() {
      this.slides = this.slides - 1 
    }
  }
})