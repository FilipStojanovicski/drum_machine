var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}];

var bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

var activeStyle = {
    backgroundColor: 'orange'
};

var inactiveStyle = {
    backgroundColor: 'grey'
};

var Pad = function (_React$Component) {
    _inherits(Pad, _React$Component);

    function Pad(props) {
        _classCallCheck(this, Pad);

        var _this = _possibleConstructorReturn(this, (Pad.__proto__ || Object.getPrototypeOf(Pad)).call(this, props));

        _this.handlePlay = function () {
            if (_this.props.power) {
                _this.props.handlePlay(_this.props.id, _this.props.keyTrigger);
                _this.playSound();
                _this.activatePad();
                setTimeout(function () {
                    return _this.activatePad();
                }, 100);
            }
        };

        _this.state = {
            padStyle: inactiveStyle
        };
        _this.playSound = _this.playSound.bind(_this);
        _this.handlePlay = _this.handlePlay.bind(_this);
        _this.handleKeyPress = _this.handleKeyPress.bind(_this);
        _this.activatePad = _this.activatePad.bind(_this);
        return _this;
    }

    _createClass(Pad, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('keydown', this.handleKeyPress);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('keydown', this.handleKeyPress);
        }
    }, {
        key: 'handleKeyPress',
        value: function handleKeyPress(e) {
            if (e.keyCode === this.props.keyCode) {
                this.handlePlay();
            }
        }
    }, {
        key: 'playSound',
        value: function playSound() {
            var sound = document.getElementById(this.props.keyTrigger);
            sound.currentTime = 0;
            sound.volume = this.props.volume;
            sound.play();
        }
    }, {
        key: 'activatePad',
        value: function activatePad() {
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
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: this.props.id, onClick: this.handlePlay, className: 'drum-pad', style: this.state.padStyle },
                React.createElement('audio', {
                    className: 'clip',
                    id: this.props.keyTrigger,
                    src: this.props.clip }),
                this.props.keyTrigger
            );
        }
    }]);

    return Pad;
}(React.Component);

var Display = function (_React$Component2) {
    _inherits(Display, _React$Component2);

    function Display(props) {
        _classCallCheck(this, Display);

        return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).call(this, props));
    }

    _createClass(Display, [{
        key: 'render',
        value: function render() {
            var powerSlider = this.props.power ? {
                float: 'right'
            } : {
                float: 'left'
            };
            var bankSlider = this.props.padBank === 1 ? {
                float: 'left'
            } : {
                float: 'right'
            };
            console.log(powerSlider);
            return React.createElement(
                'div',
                { className: 'display-options' },
                React.createElement(
                    'div',
                    { className: 'power-button btn-slider' },
                    React.createElement(
                        'p',
                        null,
                        'Power'
                    ),
                    React.createElement(
                        'div',
                        { className: 'select', onClick: this.props.handlePower },
                        React.createElement('div', { className: 'inner', style: powerSlider })
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'display' },
                    this.props.display
                ),
                React.createElement(
                    'div',
                    { className: 'volume-slider' },
                    React.createElement('input', {
                        max: '1',
                        min: '0',
                        onChange: this.props.handleVolumeAdjust,
                        step: '0.01',
                        type: 'range',
                        value: this.props.volume
                    })
                ),
                React.createElement(
                    'div',
                    { className: 'bank-toggle btn-slider' },
                    React.createElement(
                        'p',
                        null,
                        'Bank'
                    ),
                    React.createElement(
                        'div',
                        { className: 'select', onClick: this.props.handleBankToggle },
                        React.createElement('div', { className: 'inner', style: bankSlider })
                    )
                )
            );
        }
    }]);

    return Display;
}(React.Component);

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App(props) {
        _classCallCheck(this, App);

        var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this3.state = {
            display: " ",
            keyTrigger: null,
            padBank: 1,
            volume: 0.5,
            power: true
        };
        _this3.handlePlay = _this3.handlePlay.bind(_this3);
        _this3.handleBankToggle = _this3.handleBankToggle.bind(_this3);
        _this3.handleVolumeAdjust = _this3.handleVolumeAdjust.bind(_this3);
        _this3.handlePower = _this3.handlePower.bind(_this3);
        return _this3;
    }

    _createClass(App, [{
        key: 'handleVolumeAdjust',
        value: function handleVolumeAdjust(event) {
            var displayText = "";
            if (this.state.power) {
                displayText = "Volume: " + event.target.value;
            }
            this.setState({
                display: displayText,
                volume: event.target.value
            });
        }
    }, {
        key: 'handleBankToggle',
        value: function handleBankToggle() {
            var currentBank = this.state.padBank == 1 ? 2 : 1;
            var bankName = currentBank == 1 ? "Heater Kit" : "Smooth Piano Kit";
            var displayText = "";
            if (this.state.power) {
                displayText = bankName;
            }
            this.setState({
                display: displayText,
                keyTrigger: null,
                padBank: currentBank
            });
        }
    }, {
        key: 'handlePlay',
        value: function handlePlay(soundId, keyTrigger) {
            if (this.state.power) {
                this.setState({
                    display: soundId,
                    keyTrigger: keyTrigger
                });
            }
        }
    }, {
        key: 'handlePower',
        value: function handlePower() {
            this.setState({
                display: " ",
                keyTrigger: null,
                power: !this.state.power
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var bank = this.state.padBank == 1 ? bankOne : bankTwo;
            return React.createElement(
                'div',
                { id: 'drum-machine' },
                React.createElement(
                    'div',
                    { id: 'pad' },
                    bank.map(function (sound, i) {
                        return React.createElement(Pad, { key: i, keyTrigger: sound.keyTrigger, id: sound.id, clip: sound.url, keyCode: sound.keyCode, volume: _this4.state.volume, power: _this4.state.power,
                            handlePlay: _this4.handlePlay });
                    })
                ),
                React.createElement(Display, { padBank: this.state.padBank, power: this.state.power, handleBankToggle: this.handleBankToggle, display: this.state.display,
                    handleVolumeAdjust: this.handleVolumeAdjust, handlePower: this.handlePower })
            );
        }
    }]);

    return App;
}(React.Component);

var domContainer = document.querySelector('#root');
var markdownEditor = ReactDOM.render(React.createElement(App, null), domContainer);