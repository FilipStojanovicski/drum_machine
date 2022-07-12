const e = React.createElement;

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];
  
const activeStyle = {
    backgroundColor: 'orange',
};

const inactiveStyle = {
    backgroundColor: 'grey',
};

  

class Pad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: inactiveStyle
        };
        this.playSound = this.playSound.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
        if (e.keyCode === this.props.keyCode) {
            this.handlePlay();
        }
    }

    playSound(){
        const sound = document.getElementById(this.props.keyTrigger);
        sound.currentTime = 0;
        sound.volume = this.props.volume;
        sound.play();
    }

    activatePad() {
        if (this.state.padStyle.backgroundColor === 'orange') {
        this.setState({
            padStyle: inactiveStyle
        });
        } else {
        this.setState({
            padStyle: activeStyle
        });
        }
    }

    handlePlay = () =>{
        if (this.props.power){
            this.props.handlePlay(this.props.id, this.props.keyTrigger);
            this.playSound();
            this.activatePad();
            setTimeout(() => this.activatePad(), 100);
        }
    }


    render() {
        return (
            <div id={this.props.id} onClick = {this.handlePlay} className = "drum-pad" style={this.state.padStyle}>
                <audio
                    className='clip'
                    id={this.props.keyTrigger}
                    src={this.props.clip}/>
            {this.props.keyTrigger}</div>
        );
    }
}

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const powerSlider = this.props.power
        ? {
            float: 'right'
            }
        : {
            float: 'left'
            };
        const bankSlider =
        this.props.padBank === 1
            ? {
                float: 'left'
            }
            : {
                float: 'right'
            };
            console.log(powerSlider);
        return (
            <div className="display-options">
            <div className="power-button btn-slider">
                <p>Power</p>
                <div className="select" onClick={this.props.handlePower}>
                    <div className="inner" style={powerSlider}></div>
                </div>
            </div>
            <div id="display">{this.props.display}</div>
            <div className="volume-slider">
                <input
                    max='1'
                    min='0'
                    onChange={this.props.handleVolumeAdjust}
                    step='0.01'
                    type='range'
                    value={this.props.volume}
                    /></div>
            <div className="bank-toggle btn-slider">
                <p>Bank</p>
                <div className="select" onClick={this.props.handleBankToggle}>
                    <div className="inner" style={bankSlider}></div>
                </div>
            </div>
        </div>
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: " ",
            keyTrigger: null,
            padBank: 1,
            volume: 0.5,
            power: true
        };
        this.handlePlay = this.handlePlay.bind(this);
        this.handleBankToggle = this.handleBankToggle.bind(this);
        this.handleVolumeAdjust = this.handleVolumeAdjust.bind(this);
        this.handlePower = this.handlePower.bind(this);
    }

    handleVolumeAdjust(event){
        let displayText = "";
        if(this.state.power){
            displayText = "Volume: " + event.target.value;
        }
        this.setState({
            display: displayText,
            volume: event.target.value
        })
    }

    handleBankToggle(){
        const currentBank = this.state.padBank == 1 ? 2 : 1;
        const bankName = currentBank == 1 ? "Heater Kit" : "Smooth Piano Kit";
        let displayText = "";
        if(this.state.power){
            displayText = bankName;
        }
        this.setState({
            display: displayText,
            keyTrigger: null,
            padBank: currentBank
        })
    }

    handlePlay(soundId, keyTrigger){
        if (this.state.power){
            this.setState({
                display: soundId,
                keyTrigger: keyTrigger,
            })
        }
    }

    handlePower(){
        this.setState({
            display: " ",
            keyTrigger: null,
            power: !this.state.power
        })
    }

    render() {
        const bank = this.state.padBank == 1 ? bankOne : bankTwo;
        return (
            <div id="drum-machine">
                <div id="pad">
                    {bank.map((sound, i) => {
                        return <Pad key={i} keyTrigger={sound.keyTrigger} id={sound.id} clip={sound.url} keyCode={sound.keyCode} volume={this.state.volume} power={this.state.power} 
                       handlePlay={this.handlePlay}/>
                    })}
                </div>
                    <Display  padBank={this.state.padBank} power={this.state.power} handleBankToggle={this.handleBankToggle} display={this.state.display} 
                    handleVolumeAdjust={this.handleVolumeAdjust} handlePower={this.handlePower}/>
            </div>
        );
    }
}

let domContainer = document.querySelector('#root');
let markdownEditor = ReactDOM.render(<App />, domContainer);

