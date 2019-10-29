import React, { Component } from 'react';
import Select from 'react-dropdown-select'
import Slider from "react-slick"
import Modal from 'react-awesome-modal'
import 'App.css'
import './../style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: 0,
      userSelection: [],
      visible : false
    }
  }

  openModal() {
    this.setState({
        visible : true
    });
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }

  onSelect = (opt) => {
    const { setSelectedValue, selectedValues } = this.props
    const updatedValue = selectedValues || []
    console.log('updatedValue===>>>>', updatedValue && (!updatedValue.includes(opt[0].value)))
    if(updatedValue && (!updatedValue.includes(opt[0].value))){
      updatedValue.push(opt[0].value)
      console.log('updatedValue inside IF ===>>>', updatedValue)
      setSelectedValue(updatedValue)
      this.setState({
        slides: opt[0].value
      })

    }else{
      this.setState({
        slides: opt[0].value
      })  
    }
  }

  onSubmit = () => {
    this.openModal()
  }

  render() {
    const { slides, visible } = this.state
    const { selectedValues } = this.props
    console.log(
      'selectedValues', selectedValues || []
    )
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear"
    }
    return (
      <div className="home">
        <div className="header">
          <h2>Select Slides</h2>
          <div className='select-box'>
            <Select
              className="select"
              style={{
                height: '20px',
                'padding': '0 10px'
              }}
              options={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 }

              ]}
              values={[]}
              onChange={(value) => this.onSelect(value)}
            />
          </div>
        </div>
        <div className="slider-box">
          {
            slides > 0 &&
            <React.Fragment>
              <Slider {...settings}>
                {
                  Array.from(Array(slides), (e, i) => {
                    return <div className="content-slide" key={i + 'slide' + i}><h1>{'Slide' + (i+1)}</h1></div>
                  })
                }
              </Slider>
              <div className="footer">
                <button className="finish-btn" type="button" onClick={this.onSubmit} >Finish</button>
              </div>
            </React.Fragment>
          }
        </div>
        <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className="modal-body">
              <h1>User selected numbers:</h1>
              {
                selectedValues && selectedValues.length > 0 
                ? selectedValues.map((num) => <h3 key={num}>{'Number - ' + num}</h3>)
                : <h3>Number - 0</h3>
              }
              <button className="finish-btn" type="button" onClick={() => this.closeModal()} >Close</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default Home
