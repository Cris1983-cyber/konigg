import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";


const ComunityData = [
    {
      image: '/img/image00018.jpeg'
    },
    {
      image: '/img/image00021.jpeg'
    },
    {
      image: '/img/image00022.jpeg'
    },
    {
      image: '/img/image00023.jpeg'
    },
    {
      image: '/img/image00024.jpeg'
    },
    {
      image: '/img/image00025.jpeg'
    },
    {
      image: '/img/image00026.jpeg'
    },
    {
      image: '/img/image00027.jpeg'
    },
    {
      image: '/img/image00028.jpeg'
    },
    {
      image: '/img/image00029.jpeg'
    },
    {
      image: '/img/image00010.jpeg'
    },
    {
      image: '/img/image00031.jpeg'
    },
    {
      image: '/img/image00032.jpeg'
    },
    {
      image: '/img/image00033.jpeg'
    },
    {
      image: '/img/image00035.jpeg'
    },
    {
      image: '/img/image00036.jpeg'
    },
    {
      image: '/img/image00037.jpeg'
    },
    {
      image: '/img/image00038.jpeg'
    },

    
    
  ];



class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }



  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === ComunityData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? ComunityData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="">
        <div className="overflow-hidden">

          <div>
            {ComunityData.map((slide, index) => {
              return (
                <div className="">
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-full object-cover object-center rounded-xl mx-auto max-w-xl"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
                </div>
              );
            })}
          </div>
          </div>

          <div className="w-full flex justify-around p-4 md:mt-4 max-w-xl mx-auto">
          <button
            onClick={this.prevSlide}
            className="bg-gray-100 left-0 text-xl text-blue-500 cursor-pointer rounded-full p-2 px-3"
          ><AiOutlineLeft className="h-7 w-5"/></button>
          
          <div className="align-center items-center h-6">
            {ComunityData.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-1 w-1 bg-blue-500 rounded-full m-1 mt-5 cursor-pointer inline-block"
                      : "h-1 w-1 bg-gray-200 rounded-full m-1 cursor-pointer inline-block"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })} 
          </div>
            
            <button
            onClick={this.nextSlide}
            className="bg-gray-100 right-0 text-xl text-blue-500 cursor-pointer rounded-full p-2 px-3"
          ><AiOutlineRight className="h-7 w-5"/></button>

          </div>
        
      </div>
    );
  }
}

export default Demo;