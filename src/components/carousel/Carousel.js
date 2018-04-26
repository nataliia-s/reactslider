import React, {Component} from 'react';
import data from "../../data/slider";
import "./Carousel.css";

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.slider,
            activeItem: 1,
            left: 0
        };
    }

    startAutoPlay() {
        if (this.props.autoPlay) {
            this.interval = setInterval(() => {
                this.showNext();
            }, 10000);
        }
    }

    stopAutoPlay() {
        if (this.props.autoPlay && this.interval) {
            clearInterval(this.interval);
        }
    }

    componentDidMount() {
        this.startAutoPlay();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showPrevious() {
        if (this.state.activeItem === 1) {
            this.setState({
                activeItem: this.state.data.length,
                left: this.state.left - parseInt(this.props.slideWidth, 10) * (this.state.data.length - 1)

            });
        } else {
            this.setState({
                activeItem: this.state.activeItem - 1,
                left: this.state.left + parseInt(this.props.slideWidth, 10)
            });
        }
    }


    showNext() {
        if (this.state.activeItem === this.state.data.length) {
            this.setState({
                activeItem: 1,
                left: 0

            });
        } else {
            this.setState({
                activeItem: this.state.activeItem + 1,
                left: this.state.left - parseInt(this.props.slideWidth, 10)
            });
        }
    }


    render() {

        return (
            <div className="carousel" onMouseEnter={this.stopAutoPlay.bind(this)}
                 onMouseLeave={this.startAutoPlay.bind(this)}>
                <div className="carousel-inner" style={{width: parseInt(this.props.slideWidth, 10) * this.state.data.length}}>
                    {
                        this.state.data.map((item, index) => {
                            return (

                                <span key={index} style={{left: this.state.left}}
                                      className={(index + 1 === this.state.activeItem) ? "active" : "carousel-item"}>
                                    <img src={item.hero} alt="carousel hero" />

                                     <div className="carousel-content">
                                         <div className="carousel-content-inner">
                                             <div className="text-container">
                                                 <img src={item.image} alt="carousel thumbnail"/>
                                                <h2>{item.text}</h2>
                                             </div>
                                         </div>
                                     </div>
                                </span>

                            )
                        }, this)
                    }

                </div>

                <div className="btn-container">
                    <button type="button" className="btn-carousel btn-prev"
                            onClick={this.showPrevious.bind(this)}></button>
                    <button type="button" className="btn-carousel btn-next" onClick={this.showNext.bind(this)}></button>
                </div>


            </div>

        )
    }
}

export default Carousel;