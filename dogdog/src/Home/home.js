import React, { Component } from 'react';
import axios from 'axios';
import './home.css';
import {connect} from 'react-redux';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';        // 加载 CSS


class AppUI extends Component {
  componentDidMount(){
    this.props.getData();
    this.props.getSurprise();
  }
  render() {
    var props = this.props;
    return (
      <div className="home">
        <Carousel autoplay className="sliderBox">
          {props.slider.map(
            (item,index)=>{
              return (
                <img alt="" key={item.advid} src={item.image} />
              )
            })
          }
        </Carousel>

        <ul className="menu">
          {props.menu.map(
            (item,index)=>{
              return (
                <li key={item.image}>
                  <img alt="" src={item.image}/>
                </li>
              )
            })
          }
        </ul> 
        <div className="line"></div>
        <div className="surprise">
          <div className="title">
            <div className="left">
              <img alt="" key={props.surprise.image} src={props.surprise.image}/>
            </div>
            <div className="time">
              <p>距离下一场
                <span>00</span>:<span>24</span>:<span>29</span>
              </p>
            </div>
            <div className="right">
              <img alt="" key={props.right.image} src={props.right.image}/>
            </div>
          </div>
          <div className="goods">
            <ul>
              {props.goods.map(
                (item,index)=>{
                  return (
                    <li key={item.gid}>
                      <img alt="" src={item.image.image}/>
                      <p className="sale">￥ {item.sale_price}</p>
                      <p className="little">{item.little_price}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="fire">
          <div className="title">
            <img alt="" key={props.fire_title.image} src={props.fire_title.image}/>
          </div>
          <div className="img">
              <img alt="" className="limg" key={props.fire_limg.image} src={props.fire_limg.image}/>
              {props.fire_simg.map(
                (item,index)=>{
                  return (
                    <img alt="" className="simg" key={item.advid} src={item.image} />
                  )
                })
              }
          </div> 
        </div>
        <div className="line"></div>
        <div className="video">
          <div className="title">
            <img alt="" id="v_t" key={props.video_title} src={props.video_title}/>
          </div>
          <div className="mp4">
            <a href={props.video_info.url}>
              <img alt="" key={props.video_info.image} src={props.video_info.image} />
            </a>
            <p>{props.video_info.title}</p>
            <p>
              <img src={props.video_watch}/>
              <span>{props.video.visit}</span>
              <span>{props.video.time}</span>
            </p>
            </div> 
        </div>
        <div className="line"></div>
        <div className="e_word">
          <div className="title">
            <img alt="" key={props.e_word.image} src={props.e_word.image}/>
            <span key={props.text}>{props.text}</span>
          </div>
          <ul className="username">
            {props.user.map(
              (item,index)=>{
                return (
                    <li key={item.username}>
                      <div className="img">
                        <img alt="" src={item.main_image.image} />
                      </div>
                      <p className="join">{item.join_time}</p>
                      <div className="other">
                        <span className="user">{item.username}</span>
                        <span className="pet">{item.pet_des}</span>
                      </div>
                      <p className="words">{item.comment_content}</p>
                    </li>
                )
              })
            }
          </ul>
        </div>
        <div className="line"></div>
        <footer> 
          <div className="list">
            <span><a href="https://wap.epet.com/main.html">触屏版</a></span>
            <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
            <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
            <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
          </div>
          <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
        </footer>
      </div>
    )
  }

  // constructor(){
  //   super();
  //   this.state = {
  //     Data:[],
  //     menu:[],
  //     surprise:[],
  //   }
  // }
  // componentDidMount() {
  //   var that = this;
  //   axios.get("/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1511570766611")
  //   .then(function(res){
  //     console.log(res);
  //     that.setState({
  //       Data:res.data.datas[0].value,
  //       menu:res.data.datas[2].menus
  //     })
  //   });
  // }
}
const mapStateToProps = (state)=>{
  return {
    slider:state.slider,
    menu:state.menu,
    goods:state.goods,
    surprise:state.surprise,
    right:state.right,

    fire_title:state.fire_title,
    fire_limg:state.fire_limg,
    fire_simg:state.fire_simg,

    video_title:state.video_title,
    video_info:state.video_info,
    video_watch:state.video_watch,
    video:state.video,

    e_word:state.e_word,
    text:state.text,
    user:state.user
  }
}

const mapDispatchProps = (dispatch)=>{
  return {
    getData:function(){
      axios.get("/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1511570766611")
      .then(function(res){
        // console.log(res.data);
        var slider = res.data.datas[0].value;
        var menu = res.data.datas[2].menus;
        var fire_title = res.data.datas[4].center_image;
        var fire_limg = res.data.datas[4].content_images[0][0];
        var fire_simg = res.data.datas[4].content_images[1];
        var video_title = res.data.datas[6].value.center.img.image;
        var video_info = res.data.datas[7].value[0].share_target.param;
        var video_watch = res.data.datas[7].value[0].visit_img.image;
        var video = res.data.datas[7].value[0];
        // var fire_simg = res.data.datas[9];
        // var fire_simg = res.data.datas[10];
        var text = res.data.datas[56].right_text;
        var e_word = res.data.datas[56].center_image;
        var user = res.data.datas[56].list;
        console.log("aaaa");
        console.log(video_title);
        console.log(video_info);
        console.log( video_watch);
        console.log("aaaa");
        dispatch({
          type:"GET_DATA",
          payload:slider
        });
        dispatch({
          type:"GET_MENU",
          payload:menu
        });
        dispatch({
          type:"GET_FIRE_TITLE",
          payload:fire_title
        });
        dispatch({
          type:"GET_FIRE_LIMG",
          payload:fire_limg
        });
        dispatch({
          type:"GET_FIRE_SIMG",
          payload:fire_simg
        });
        dispatch({
          type:"GET_EWORD",
          payload:e_word
        });
        dispatch({
          type:"GET_RTEXT",
          payload:text
        });
        dispatch({
          type:"GET_USER",
          payload:user
        })
        dispatch({
          type:"GET_VIDEO_TITLE",
          payload:video_title
        });
        dispatch({
          type:"GET_INFO",
          payload:video_info
        })
        dispatch({
          type:"GET_WATCH",
          payload:video_watch
        })
        dispatch({
          type:"GET_VIDEO",
          payload:video
        })
      });
    },
    getSurprise:function(){
      axios.get("/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1511771932747")
      .then(function(res){
        // console.log("aaaa");
        // console.log(res.data);
        var goods = res.data.data[3].goods;
        var surprise = res.data.data[3].surprise_icon;
        var right = res.data.data[3].right_image;
        // console.log("bbbbb");
        // console.log(goods);
        // console.log( surprise);
        // console.log( right);
        // console.log("bbbbb");
        dispatch({
          type:"GET_GOODS",
          payload:goods
        });
        dispatch({
          type:"GET_SURPRISE",
          payload:surprise
        });
        dispatch({
          type:"GET_RIGHT",
          payload:right
        })
      });
    }
  }
}


const Home = connect(mapStateToProps,mapDispatchProps)(AppUI);


export default Home;
